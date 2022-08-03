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
};
