import baseCode from '@/models/baseCode'

export const converterModule = {
  namespaced: true,

  state: {
    pair: [],
    rur: {
      CharCode: 'RUR',
      Name: 'Росийский рубль',
      Previous: 1,
      Value: 1,
      prevRatio: 1,
      prevValue: 1,
      ratio: 1,
      value: 1,
    },
    inputValue: 1,
  },

  getters: {
    options(state, _, rootState) {
      let arr = [...rootState.valute].concat([state.rur])
      arr = arr.map((el) => {
        return {
          code: el.CharCode,
          name: el.Name,
        }
      })
      return arr
    },
    nominal(state, _, rootState) {
      return (
        [...rootState.valute].find((el) => el.CharCode === state.pair[0]) ||
        state.rur
      )
    },
    target(state, _, rootState) {
      return (
        [...rootState.valute].find((el) => el.CharCode === state.pair[1]) ||
        state.rur
      )
    },
  },

  mutations: {
    changePair(state, [num, value]) {
      state.pair[num] = value
    },
    changeInputValue(state, num) {
      state.inputValue = num
    },
    setPair(state, arr) {
      state.pair = arr
    },
    swapPair(state) {
      const arr = [...state.pair]
      state.pair = arr.reverse()
    },
  },

  actions: {
    async initPair({ commit, getters }) {
      const getBase = (str) => list.find((el) => el.startsWith(str))
      const baseObj = await baseCode()
      const list = [...getters.options].map((option) => option.code)
      const base = getBase(baseObj.code) || getBase(baseObj.lang) || 'EUR'
      const str = base === 'EUR' ? 'USD' : 'EUR'
      const arr = [base, str]
      commit('setPair', arr)
    },
  },
}
