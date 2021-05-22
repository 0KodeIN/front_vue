<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import axios from "axios";


  export default {
    data(){
      return{
        id: 0,
        info: null
      }

    },
    methods: {
      Count(event){
        let categoryName = event.target.textContent;
        console.log(categoryName)
        if (categoryName === 'Кино'){
          this.id = 2;

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
    }


  }


</script>
<style lang="scss">

*{
  margin: 0;
  padding: 0;

}

</style>
