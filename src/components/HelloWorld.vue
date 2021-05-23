<template>
<header class="navigation">
  <section class="categories">
    <a v-on:click="$root.Count">Кино</a>
    <a v-on:click="$root.Count">Концерты</a>
    <a v-on:click="$root.Count">Спектакли</a>
    <a v-on:click="$root.Count">Выставки</a>
    <a v-on:click="$root.Count">Библиотеки</a>
    <a v-on:click="$root.Count">Фестивали</a>
    <a v-on:click="$root.Count">Музеи</a>

  </section>
   <section class="search-container">
     <input class="search" placeholder="Поиск">
     <img src="@/assets/img/search.png" class="search-img">
   </section>
  <button @click="$router.push('/About')" class="enter">войти</button>
</header>

</template>

<script>

export default {
  data(){
    return{
      // id: 0,
      // info: null
    }

  },mounted() {

  },
  methods: {

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
  min-width: 800px;
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
  cursor: pointer;
}

@media (max-width:1000px){
  .categories{
    display: none;
  }
  .enter{
    justify-content: center;
  }
  .search-container{
    justify-content: center;
  }
}


</style>
