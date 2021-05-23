<template>
  <div class="wrapper">
    <img :src="(card.image) ? card.image: require('@/assets/img/not_img.png')" class="wrapper__photo">
    <div class="wrapper__main">
      <p>{{ card.title }}</p>
      <div class="wrapper__main-two">
        <!--          <p>{{card.id}}</p>-->
        <p>{{ card.address }}</p>
        <p>{{ card.price }}</p>
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
    CardFor() {

    }
  }

}
</script>
<style>
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
  width: 20.625vw;
  height: 20.021vw;
  background: #bf7d2e;
  flex-wrap: wrap;
  border-radius: 0 0 12px 12px;
  margin-top: 4vw;
  margin-left: 2.5vw;
  margin-right: 2.5vw;

}

.wrapper__photo {
  display: flex;
  width: 20.833vw;
  height: 13.375vw;
  background: bisque;
}

.wrapper__main {
  display: flex;
  flex-direction: column;
  width: 20.833vw;
  height: 3.646vw;
  text-align: center;
}

.wrapper__main-two {
  display: flex;
  justify-content: space-around;
}
</style>