import Vuex from "vuex";
import axios from "axios";
import Cookies from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      apparel: [],
      token: null,
      userData: null,
      category: "all",
      categorys: ["shoes", "jacket", "tshirt", "bag"],
    },

    getters: {
      apparelData(state) {
        return state.apparel; // getter untuk di panggil oleh commponent atau function untuk mendapatkan data.
      },
      // lastIdRecipe(state) {
      //   let recipesLength = state.recipes.length;
      //   return state.recipes[recipesLength - 1].id;
      // },
      detailApparel: (state) => (id) => {
        return state.apparel.find((apparel) => apparel.id === id);
      },
      isAuthenticated(state) {
        return state.token != null;
      },
      userId(state) {
        return state.userData.userId;
      },
      userEmail(state) {
        if (state.userData === null) {
          return;
        }
        return state.userData.email;
      },
    },

    mutations: {
      addNewApparel(state, payload) {
        return state.apparel.push(payload);
      },
      setApparel(state, payload) {
        state.apparel = payload;
      },
      setToken(state, payload) {
        state.token = payload;
      },
      setUserData(state, payload) {
        state.userData = payload;
      },
      deleteApparel(state, payload) {
        const apparels = state.apparel.filter((item) => item.id !== payload);
        state.apparel = apparels;
      },
      getApparels(state, payload) {
        const apparels = state.apparel.filter((item) => item.id === payload.id);
        state.apparel[apparels.id] = payload;
      },
      changeCategory(state, payload) {
        state.category = payload;
      },
    },

    actions: {
      nuxtServerInit({ commit }) {
        return axios
          .get(
            "https://avenue-apparel-f48d9-default-rtdb.asia-southeast1.firebasedatabase.app/apparel.json"
          )
          .then((response) => {
            const apparelArray = [];
            for (const key in response.data) {
              apparelArray.push({ ...response.data[key], id: key });
            }
            commit("setApparel", apparelArray);
          })
          .catch((e) => context.error(e));
      },
      addApparel({ commit, state }, apparel) {
        return axios
          .post(
            `https://avenue-apparel-f48d9-default-rtdb.asia-southeast1.firebasedatabase.app/apparel.json?auth=${state.token}`,
            {
              ...apparel,
              userId: state.userData.userId,
              username: state.userData.username,
            }
          )
          .then((response) => {
            commit("addNewApparel", {
              ...apparel,
              userId: state.userData.userId,
              username: state.userData.username,
              id: response.data.name,
            });
            // commit("addNewRecipe", {
            //   ...recipe,
            //   userId: state.userData.userId,
            //   username: state.userData.username,
            //   id: response.data.name,
            //   dataLikes: ["null"],
            // });
            // alert("RESEP BERHASIL DITAMBAHKAN!!!");
          });
      },
      authenticateUser({ commit }, authData) {
        let webAPIKey = "AIzaSyB-DL_4eSDw1m8Fb8kPLW40ujT7zQAc4DE";
        let authUrl = authData.isLogin
          ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
          : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
        return axios
          .post(authUrl + webAPIKey, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
            displayName: authData.displayName,
          })
          .then((response) => {
            // console.log(response);
            // console.log(response.data.idToken);
            commit("setToken", response.data.idToken);
            commit("setUserData", {
              username: response.data.displayName,
              userId: response.data.localId,
              email: response.data.email,
            });
            // // console.log(authData);
            localStorage.setItem("token", response.data.idToken);
            Cookies.set("jwt", response.data.idToken);
            const userData = {
              username: response.data.displayName,
              userId: response.data.localId,
              email: response.data.email,
            };
            localStorage.setItem("user", JSON.stringify(userData));
            Cookies.set("acc_user", JSON.stringify(userData));
            // localStorage.setItem("token", response.data.idToken);
            // Cookies.set("jwt", response.data.idToken);
            // alert("SUKSES!!!!");
          })
          .catch((error) => console.log(error));
      },
      initAuth({ commit }, req) {
        let user;
        let token;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("jwt="));
          const accUserCookie = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("acc_user="));

          const userCookie = accUserCookie.substr(
            accUserCookie.indexOf("=") + 1
          );
          user = JSON.parse(decodeURIComponent(userCookie));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
        } else {
          token = localStorage.getItem("token");
          user = JSON.parse(localStorage.getItem("user"));
        }
        commit("setToken", token);
        commit("setUserData", user);
      },

      logout({ commit }) {
        commit("setToken", null);
        Cookies.remove("jwt");
        Cookies.remove("acc_user");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      },

      deleteApparel({ dispatch, commit, state }, apparelId) {
        console.log(state);
        return axios
          .delete(
            "https://avenue-apparel-f48d9-default-rtdb.asia-southeast1.firebasedatabase.app/apparel/" +
              apparelId +
              ".json?auth=" +
              state.token
          )
          .then((res) => commit("deleteApparel"), apparelId)
          .then((res) => dispatch("getApparels"));
      },

      updateApparel({ dispatch, state }, apparel) {
        console.log(state.token);
        return axios
          .put(
            "https://avenue-apparel-f48d9-default-rtdb.asia-southeast1.firebasedatabase.app/apparel/" +
              apparel.id +
              ".json?auth=" +
              state.token,
            apparel.newApparel
          )
          .then((res) => dispatch("getApparels"));
      },

      // likeUpdate({ commit, state, dispatch }, recipe) {
      //   return axios
      //     .put(
      //       "https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/recipes/" +
      //         recipe.recipeId +
      //         ".json?auth=" +
      //         state.token,
      //       recipe.newDataRecipe
      //     )
      //     .then((res) => dispatch("getRecipe"));
      // },

      getApparels({ commit }) {
        return axios
          .get(
            "https://avenue-apparel-f48d9-default-rtdb.asia-southeast1.firebasedatabase.app/apparel.json"
          )
          .then((response) => {
            const apparelArray = [];
            for (const key in response.data) {
              apparelArray.push({ ...response.data[key], id: key });
            }
            commit("setApparel", apparelArray);
          })
          .catch((e) => context.error(e));
      },
    },
  });
};

export default createStore;

//state
// export const state = () => ({
//   // recipes: [
//   //   {
//   //     id: 1,
//   //     recipeImage: "https://i.ibb.co/SBsMYNC/Rendang.jpg",
//   //     recipeTitle: "Rendang",
//   //     likes: 100,
//   //     body: "Rendang Recipe",
//   //   },
//   //   {
//   //     id: 2,
//   //     recipeImage: " ",
//   //     recipeTitle: "Tomyam",
//   //     likes: 40,
//   //     body: "Tomyam Recipe",
//   //   },
//   //   {
//   //     id: 3,
//   //     recipeImage: "https://i.ibb.co/CW4tVvp/Spaghetti-aglioo-o-lio.jpg",
//   //     recipeTitle: "Spagethi Aglio Olio",
//   //     likes: 200,
//   //     body: "Spagethi Aglio Olio Recipe",
//   //   },
//   //   {
//   //     id: 4,
//   //     recipeImage: "https://i.ibb.co/z7zRVxV/Spaghetti-Carbonara.jpg",
//   //     recipeTitle: "Spagethi Carbonara",
//   //     likes: 200,
//   //     body: "Spagethi Carbonara Recipe",
//   //   },
//   //   {
//   //     id: 5,
//   //     recipeImage: "https://i.ibb.co/Cn1XPNB/Kimchi.jpg",
//   //     recipeTitle: "Kimchi",
//   //     likes: 10,
//   //     body: "Kimchi Recipe",
//   //   },
//   // ],
//   recipes: [],
//   token: null,
//   userData: null,
// });

// getter
// export const getters = {
//   recipeData(state) {
//     return state.recipes; // getter untuk di panggil oleh commponent atau function untuk mendapatkan data.
//   },
//   lastIdRecipe(state) {
//     let recipesLength = state.recipes.length;
//     return state.recipes[recipesLength - 1].id;
//   },
//   detailRecipe: (state) => (id) => {
//     return state.recipes.find((recipe) => recipe.id === id);
//   },
//   isAuthenticated(state) {
//     return state.token != null;
//   },
//   userId(state) {
//     return state.userData.userId;
//   },
//   userEmail(state) {
//     if (state.userData === null) {
//       return;
//     }
//     return state.userData.email;
//   },
// };

//mutations
// export const mutations = {
//   addNewRecipe(state, payload) {
//     return state.recipes.push(payload);
//   },
//   setRecipe(state, payload) {
//     state.recipes = payload;
//   },
//   setToken(state, payload) {
//     state.token = payload;
//   },
//   setUserData(state, payload) {
//     state.userData = payload;
//   },
// };

// actions
// export const actions = {
//   nuxtServerInit({ commit }) {
//     return axios
//       .get(
//         "https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json"
//       )
//       .then((response) => {
//         const recipeArray = [];
//         for (const key in response.data) {
//           recipeArray.push({ ...response.data[key], id: key });
//         }
//         commit("setRecipe", recipeArray);
//       })
//       .catch((e) => context.error(e));
//   },
//   addRecipe({ commit, state }, recipe) {
//     return axios
//       .post(
//         "https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json?auth=" +
//           state.token,
//         {
//           ...recipe,
//           userId: state.userData.userId,
//           username: state.userData.username,
//           dataLikes: ["null"],
//         }
//       )
//       .then((response) => {
//         commit("addNewRecipe", {
//           ...recipe,
//           userId: state.userData.userId,
//           username: state.userData.username,
//           id: response.data.name,
//           dataLikes: ["null"],
//         });
//         alert("RESEP BERHASIL DITAMBAHKAN!!!");
//       });
//   },
//   authenticateUser({ commit }, authData) {
//     let webAPIKey = "AIzaSyDOMzLV3S9yuKCl3NocmM0pm63Dou0Xyqw";
//     let authUrl = authData.isLogin
//       ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
//       : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
//     return axios
//       .post(authUrl + webAPIKey, {
//         email: authData.email,
//         password: authData.password,
//         returnSecureToken: true,
//         displayName: authData.displayName,
//       })
//       .then((response) => {
//         // console.log(response);
//         commit("setToken", response.data.idToken);
//         commit("setUserData", {
//           username: response.data.displayName,
//           userId: response.data.localId,
//           email: response.data.email,
//         });
//         console.log(authData);
//         localStorage.setItem("token", response.data.idToken);
//         Cookies.set("jwt", response.data.idToken);
//         const userData = {
//           username: response.data.displayName,
//           userId: response.data.localId,
//           email: response.data.email,
//         };
//         localStorage.setItem("user", JSON.stringify(userData));
//         Cookies.set("acc_user", JSON.stringify(userData));
//         // localStorage.setItem("token", response.data.idToken);
//         // Cookies.set("jwt", response.data.idToken);
//         // alert("SUKSES!!!!");
//       })
//       .catch((error) => console.log(error));
//   },
//   initAuth({ commit }, req) {
//     let user;
//     let token;
//     if (req) {
//       if (!req.headers.cookie) {
//         return;
//       }
//       const jwtCookie = req.headers.cookie
//         .split(";")
//         .find((c) => c.trim().startsWith("jwt="));
//       const accUserCookie = req.headers.cookie
//         .split(";")
//         .find((c) => c.trim().startsWith("acc_user="));

//       const userCookie = accUserCookie.substr(accUserCookie.indexOf("=") + 1);
//       user = JSON.parse(decodeURIComponent(userCookie));
//       if (!jwtCookie) {
//         return;
//       }
//       token = jwtCookie.split("=")[1];
//     } else {
//       token = localStorage.getItem("token");
//       user = JSON.parse(localStorage.getItem("user"));
//     }
//     commit("setToken", token);
//     commit("setUserData", user);
//   },

//   logout({ commit }) {
//     commit("setToken", null);
//     Cookies.remove("jwt");
//     Cookies.remove("acc_user");
//     if (process.client) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//     }
//   },

//   likeUpdate({ commit, state, dispatch }, recipe) {
//     return axios
//       .put(
//         "https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/recipes/" +
//           recipe.recipeId +
//           ".json?auth=" +
//           state.token,
//         recipe.newDataRecipe
//       )
//       .then((res) => dispatch("getRecipe"));
//   },

//   getRecipe({ commit }) {
//     return axios
//       .get(
//         "https://bootcamp-timedoor-vuejs-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json"
//       )
//       .then((response) => {
//         const recipeArray = [];
//         for (const key in response.data) {
//           recipeArray.push({ ...response.data[key], id: key });
//         }
//         commit("setRecipe", recipeArray);
//       })
//       .catch((e) => context.error(e));
//   },
// };
