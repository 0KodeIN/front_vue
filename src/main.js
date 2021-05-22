import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    Count(event){
      let categoryName = event.target.textContent;
      console.log(categoryName)
      if (categoryName === 'Кино'){
        this.id = 2;
        console.log(this.id)

      }
      else if (categoryName === 'Концерты'){
        this.id = 1;
        console.log(this.id)
      }
      else if(categoryName === 'Спектакли'){
        this.id = 3;
        console.log(this.id)
      }
      else if(categoryName === 'Выставки'){
        this.id = 4;
        console.log(this.id)
      }
      else if(categoryName === 'Библиотеки'){
        this.id = 5;
        console.log(this.id)
      }
      else if(categoryName === 'Фестивали'){
        this.id = 6;
        console.log(this.id)
      }
      else if(categoryName === 'Музеи'){
        this.id = 7;
        console.log(this.id)
      }


      axios('http://127.0.0.1:8000/api/posters-by-category/' + this.id)
          .then(response => {
            this.info = response});

    }
  },
  render: h => h(App)
}).$mount('#app')
