import { createStore } from "vuex";
import { listModule } from "./listModule";

export default createStore({
  state: {
    valute: [],
    names: {
      AMD: "Армянский драм",
      HUF: "Венгерский форинт",
      HKD: "Гонконгский доллар",
      DKK: "Датская крона",
      INR: "Индийская рупия",
      KZT: "Казахстанский тенге",
      KGS: "Киргизский сом",
      CNY: "Китайский юань",
      MDL: "Молдавский лей",
      NOK: "Норвежская крона",
      TJS: "Таджикский сомони",
      TRY: "Турецкая лира",
      UZS: "Узбекский сум",
      UAH: "Украинская гривна",
      CZK: "Чешская крона",
      SEK: "Шведская крона",
      ZAR: "Южноафриканский рэнд",
      KRW: "Вон Республики Корея",
      JPY: "Японская иена",
    },
  },

  mutations: {
    setValute(state, data) {
      const arr = Object.values(data.Valute).filter(
        (el) => el.CharCode !== "XDR"
      );
      arr.forEach((el) => {
        el.value = (el.Value / el.Nominal).toFixed(4);
        el.prevValue = (el.Previous / el.Nominal).toFixed(4);
        el.ratio = (1 / el.value).toFixed(4);
        el.prevRatio = (1 / el.prevValue).toFixed(4);
        if (el.Nominal > 1) {
          el.Name = state.names[`${el.CharCode}`];
        }
      });
      state.valute = arr;
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

  modules: {
    list: listModule,
  },
});
