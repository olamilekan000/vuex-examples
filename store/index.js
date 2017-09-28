import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const URL = 'https://vuex-server.herokuapp.com'

export default new Vuex.Store({
	state: {
		loading: false,
		temp_images: [],
		images: []
	},
	mutations: {
		tempSaveImages(state, e) {
			const images = Array.from(e.target.files)
			state.temp_images.unshift(...images)
		},
		addImage(state, payload) {
			state.images.unshift(payload)
		},
		removeImage(state, payload) {
			state.images.splice(
				state.images.findIndex(image => image._id === payload._id),
				1
			)
			axios.delete(`${URL}/api/images`, {
				data: payload
			})
		},
		fetchImages(state) {
			state.loading = true
			axios.get(`${URL}/api/images`).then(res => {
				state.loading = false
				state.images = res.data
			})
		}
	},
	actions: {
		uploadImages({ state, commit }, e) {
			state.loading = true
			state.temp_images.map(image => {
				const data = new FormData()
				data.append('file', image)
				axios.post(`${URL}/api/images`, data).then(res => {
					state.loading = false
					e.target.reset()
					state.temp_images = []
					commit('addImage', res.data)
				})
			})
		}
	}
})
