import { createStore } from "vuex";

const state = {
  test: true,
};

const getters = {
  get: (context) => (stateKey) => {
    return context[stateKey];
  },
};

const mutations = {
  set: (context) => (stateKey, data) => {
    context[stateKey] = data;
  },
};

export default createStore({
  state,
  getters,
  mutations,
});
