export const listModule = {
  namespaced: true,

  state: {
    filteredList: [],
    filter: false,
  },

  getters: {
    valuteList(state, _, rootState) {
      return state.filter ? state.filteredList : rootState.valute;
    },
  },

  mutations: {
    filterList(state, [arr, str]) {
      if (str.length) {
        state.filteredList = arr.filter(
          (el) =>
            el.Name.toLowerCase().includes(str) ||
            el.CharCode.toLowerCase().startsWith(str)
        );
        state.filter = true;
      } else {
        state.filteredList = [];
        state.filter = false;
      }
    },
  },

  actions: {
    filterList({ commit, rootState }, str) {
      commit("filterList", [rootState.valute, str.toLowerCase()]);
    },
  },
};
