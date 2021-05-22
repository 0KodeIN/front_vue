<template>
<header class="navigation">
  <section class="categories">
    <p>Кино</p>
    <p>Концерты</p>
    <p>Спектакли</p>
    <p>Выставки</p>
    <p>Библиотеки</p>
    <p>Фестивали</p>
    <p>Музеи</p>
  </section>
   <section class="search-container">
     <input class="search" placeholder="Поиск">
     <img src="@/assets/img/search.png" class="search-img">
   </section>

  <button @click="$router.push('/About')" class="enter">Войти</button>
</header>
</template>

<script>
export default {

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
  width: 5vw;
  height: 2vw;
  margin-top: 1.5vw;
  margin-left: 8vw;
  background: #FFFFFF;
  border-radius: 20px;
}
.search{
  width: 12vw;
  height: 2vw;
  margin-top: 1.5vw;
  margin-left: 0.4vw;
  border-radius: 20px;

  background: #FFFFFF;
}
.search-container{
  display: flex;
  margin-left: 5vw;
  width: 20vw;
}
p{
  font-weight: bold;
}

</style>
