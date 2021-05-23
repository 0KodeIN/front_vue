import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

Vue.config.productionTip = false

new Vue({
    router,
    store,
    data() {
        return {
            id: '',
            info: null
        }
    },
    methods: {
        Count(event) {
            let categoryName = event.target.textContent;
            if (categoryName === 'Кино') {
                this.id = 2;
            } else if (categoryName === 'Концерты') {
                this.id = 1;
            } else if (categoryName === 'Спектакли') {
                this.id = 3;
            } else if (categoryName === 'Выставки') {
                this.id = 4;
            } else if (categoryName === 'Библиотеки') {
                this.id = 5;
            } else if (categoryName === 'Фестивали') {
                this.id = 6;
            } else if (categoryName === 'Музеи') {
                this.id = 7;
            }
            // console.log(this.id);

            // axios('http://127.0.0.1:8000/api/posters-by-category/' + this.id)
            //     .then(response => {
            //         this.info = response
            //     });
        }
    },
    render: h => h(App)
}).$mount('#app')
