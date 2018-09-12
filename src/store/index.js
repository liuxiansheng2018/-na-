import vue  from 'vue';
import Vuex from 'vuex';
import Vue from 'vue';
import state from './state.js'
import mutations from './mutations.js'
vue.use(Vuex);

export default new Vuex.Store({
  state,
  // getters,
   mutations,
  // actions
})