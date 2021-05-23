<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import axios from "axios";


export default {
  data() {
    return {
      // id: 0,
      // info: null
    }
  },
  methods: {
    // Count(event) {
    //   let categoryName = event.target.textContent;
    //   // console.log(categoryName);
    //   if (categoryName === 'Кино') {
    //     this.id = 2;
    //   } else if (categoryName === 'Концерты') {
    //     this.id = 1;
    //   } else if (categoryName === 'Спектакли') {
    //     this.id = 3;
    //   } else if (categoryName === 'Выставки') {
    //     this.id = 4;
    //   } else if (categoryName === 'Библиотеки') {
    //     this.id = 5;
    //   } else if (categoryName === 'Фестивали') {
    //     this.id = 6;
    //   } else if (categoryName === 'Музеи') {
    //     this.id = 7;
    //   }
    //
    //
    //   axios('http://127.0.0.1:8000/api/posters-by-category/' + this.id)
    //       .then(response => {
    //         this.info = response
    //       });
    //
    //   // console.log(this.info);
    // }
  }


}


</script>
<style lang="scss">

* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;

}

</style>
