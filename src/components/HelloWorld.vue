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
     <img src="@/assets/img/search.png" class="search-img">
     <button class="search"></button>
   </section>

  <button class="enter">Войти</button>
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
  background: #F5F5F5;
  height: 5vw;
  display: flex;
}
.categories{
  width: 60vw;
  display: flex;
  justify-content: space-between;
  margin: 0 0 0 2vw;
  padding-top: 2vw;
  border-color: black;
}
.enter{
  margin-left: 40vw;
  width: 5vw;
  height: 2vw;
  margin-top: 1.5vw;
  background: #FFFFFF;
}
.search{
  width: 12vw;
  height: 2vw;
  margin-top: 1.5vw;
  margin-left: 0.4vw;

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
