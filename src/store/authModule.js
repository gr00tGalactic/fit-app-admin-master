import axios from "axios";

export default {
  state: {
    token: "",
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  getters: {
    getToken(state) {
      console.log("getToken", state);
      return state.token;
    },
  },
  actions: {
    async fetchToken(context, payload) {
      const response = await axios
        .post("/api/auth/loginHostByPassword", {
          password: payload.password,
        })
        // .then((response) => {
        //   console.log("response", response);
        //   context.commit("setToken", response.data.token);
        // });

      console.log("response", response);
      context.commit("setToken", response.data.token);
      return response.data;
    },

    // getUsers(context) {
    //   this.axios
    //     .get("/api/users/getUsersAndModerators", {
    //       headers: { Authorization: `Bearer ${this.$store.getters.getToken}` },
    //     })
    //     .then((response) => {
    //       return response.data;
    //     });
    // },
  },
};
