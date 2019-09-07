import Vue from 'vue'
import Vuex from 'vuex'
import footballModule from './store/footballModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
    },
    modules: {
        footballModule: footballModule
    }
})