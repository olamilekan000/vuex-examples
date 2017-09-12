import Vue from 'vue'
import Router from 'vue-router'

// import components
import Counter from '../components/counter.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/counter',
			component: Counter
		}
	]
})
