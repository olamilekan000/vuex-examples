<template>
	<div>
		<div class="error">
			{{ authError }}
		</div>

		<form class="signin-form"
		      @submit.prevent="signin">
			<input type="email"
			       placeholder="email"
			       v-model="email" />
			<input type="password"
			       placeholder="password"
			       v-model="password" />
			<button>Signin</button>
		</form>

		<form class="signup-form"
		      @submit.prevent="signup">
			<input type="email"
			       placeholder="email"
			       v-model="email" />
			<input type="password"
			       placeholder="password"
			       v-model="password" />
			<button>Signup</button>
		</form>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},

		computed: mapState(['authError', 'authenticated']),

		methods: {
			signin() {
				this.$store.dispatch({
					type: 'signin',
					email: this.email,
					password: this.password
				})
				this.email = ''
				this.password = ''
			},
			signup() {
				this.$store.dispatch({
					type: 'signup',
					email: this.email,
					password: this.password
				})
				this.email = ''
				this.password = ''
			}
		},
		watch: {
			authenticated() {
				this.$router.push('/protected')
			}
		}
	}
</script>


<style>
	.error {
		color: red;
	}

	body {
		max-width: 500px;
		text-align: center;
		margin: auto;
	}

	form {
		margin: 20px
	}

	input,
	button {
		display: block
	}
</style>
