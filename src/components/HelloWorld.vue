<template>
<header class="navigation">
  <section class="categories">
    <a v-on:click="Count">Кино</a>
    <a v-on:click="Count">Концерты</a>
    <a v-on:click="Count">Спектакли</a>
    <a v-on:click="Count">Выставки</a>
    <a v-on:click="Count">Библиотеки</a>
    <a v-on:click="Count">Фестивали</a>
    <a v-on:click="Count">Музеи</a>
  </section>
   <section class="search-container">
     <input class="search" placeholder="Поиск">
     <img src="@/assets/img/search.png" class="search-img">
   </section>

  <button @click="$router.push('/About')" class="enter">войти</button>
</header>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      id: 0
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-img{

  height: 2.2vw;
  margin-top: 1.5vw;
  margin-left: 2vw;
}
.navigation{
  width: 100%;
  background: rgba(207, 176, 159, 0.27);
  height: 5vw;
  display: flex;
}
.categories{
  width: 50vw;
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 5vw;
  padding-top: 2vw;
  border-color: black;
}
.enter{
  width: 8vw;
  height: 2.5vw;
  margin-top: 1.5vw;
  margin-left: 8vw;
  background: #FFFFFF;
  border-radius: 20px;
  font-size: medium;
  border:solid #ffffff;
}
.search{
  width: 12vw;
  height: 2vw;
  margin-top: 1.5vw;
  margin-left: 0.4vw;
  border-radius: 20px;
  border: solid #FFFFFF;
  padding: 0 .7vw;
  outline: none;


  background: #FFFFFF;
}
.search-container{
  display: flex;
  margin-left: 5vw;
  width: 20vw;
}
a{
  font-weight: bold;
  font-size: 8px;
  cursor: pointer;
}

</style>
