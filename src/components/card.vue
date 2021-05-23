<template>
  <div class="wrapper">
    <img :src="(card.image) ? card.image: require('@/assets/img/not_img.png')" class="wrapper__photo">
    <div class="wrapper__main">
      <h1 class="header-card">{{ card.title }}</h1>
      <div class="wrapper__main-two">

        <div class="wrap-address">
          <div class="date-card">
            <!--          <p>{{ dateFormat(card.date)}} </p>-->
            <p>{{card.date.lower.slice(2,10)}} </p>
            <p> {{card.date.lower.slice(11,19)}}</p>
            <!--          <p>{{card.date.upper.slice(2,10)}}</p>-->
            <!--          <p>{{card.date.upper.slice(11,19)}}</p>-->
            <p class="address">{{ card.address }}</p>
          </div>

          <div class="price"><p class="price-text">{{ card.price }} ₽</p></div>
        </div>


      </div>
    </div>
  </div>

</template>
<script>
import Wrapper from "./Wrapper";

export default {
  components: {Wrapper},
  props: {
    card: {
      type: Object,
      required: true
    },
    // data: {
    //   type: Object,
    //   required: true
    // }


  },
  methods: {
  }

}
</script>
<style>
.wrap-address{
  display: flex;
  width: 100%;
}
.date-card{
  display: flex;
  flex-wrap: wrap;
  width: 100%;

}
.date-card p:nth-child(2){
  margin-left: 1vw;

}
.header-card{
  font-size: 25px;
  width: 100%;
  text-align: center;
}
.main {
  display: flex;
  flex-wrap: wrap;
  width: 80.500vw;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  justify-content: space-around;

}

.wrapper {
  display: flex;
  width: 30.625vw;
  height: 29.021vw;
  flex-wrap: wrap;
  margin-top: 4vw;
  margin-left: 2.5vw;
  margin-right: 2.5vw;

}

.wrapper__photo {
  display: flex;
  width: 30.833vw;
  height: 18.375vw;
  background: bisque;
  object-fit: cover;
  border-radius: 15px;
}

.wrapper__main {
  display: flex;
  flex-direction: column;
  width: 30.833vw;
  height: 8.45vw;
  text-align: center;
  /*margin-bottom: 2vw;*/
  justify-content: space-between;
}

.wrapper__main-two {
  margin-top: 0.5vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #7f7f7f;

}
.price{
  background-color: #202020;
  color: white;
  min-width: 6vw;
  max-height: 1.5vw;
  border-radius: 15px;
  margin-left: 1vw;
  padding: 0.5vw;
  text-align: center;
  /*margin-bottom: 5vw;*/
}
.address{
  margin-right: auto;
  text-align: left;
  padding-right: 3vw;
}
</style>