import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import counter from './counter'

export default new Vuex.Store(Object.assign({}, counter))
