import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET: (state,posts)=>{
      state.posts = posts;
    }
  },
  actions: {
    GET_Posts({commit}){
      return axios('https://jsonplaceholder.typicode.com/',{
        method: 'GET'
      })
          .then((posts)=>{
            commit('SET', posts)
            return posts
          })
          .catch((error)=>{
        console.log(error)
            return error
      })
    }
  },
  getters: {
    POSTS(state){
      return state.posts
    }
  }
})
