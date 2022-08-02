import { createStore } from "vuex";

export default createStore({
  state: {
    valute: [],
  },

  getters: {
    valuteList(state) {
      return Object.values(state.valute);
    },
  },

  mutations: {
    setValute(state, data) {
      state.valute = data.Valute;
    },
  },

  actions: {
    async loadValute({ commit }) {
      try {
        const response = await fetch(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        const data = await response.json();
        commit("setValute", data);
      } catch (e) {
        console.log(e);
      }
    },
  },

  modules: {},
});
