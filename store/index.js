import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: []
	},
	mutations: {
		addTodo(state, text) {
			state.todos.push({
				id: Math.random()
					.toString(26)
					.slice(2),
				text
			})
		},
		removeTodo(state, id) {
			const todoIndex = state.todos.findIndex(item => item.id === id)
			state.todos.splice(todoIndex, 1)
		}
	}
})
