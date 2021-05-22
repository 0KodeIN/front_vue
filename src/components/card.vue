<template>
    <div class="wrapper">
    <div class="wrapper__photo">
          {{card.body}}
    </div>
      <div class="wrapper__main">
        <p>{{ card.title }}</p>
        <div class="wrapper__main-two">
          <p>{{card.id}}</p>
          <p>адрес</p>
          <p>цена</p>
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
      data:{
        type: Object,
        required:true
      }


  },
  methods:{
    CardFor(){

    }
  }

}
</script>
<style>
.main{
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background: azure;
  text-align: center;
  justify-content: space-around;

}
.wrapper{
  display: flex;
  width: 300px;
  height: 250px;
  background: #bf7d2e;
  flex-wrap: wrap;
  border-radius: 0 0 12px 12px;
  margin-top: 4vw;
  margin-left: 2.5vw;
  margin-right: 2.5vw;

}

.wrapper__photo{
  display: flex;
  width: 400px;
  height: 180px;
  background: bisque;
}

.wrapper__main{
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 70px;
  text-align: center;
}
.wrapper__main-two{
  display: flex;
  justify-content: space-around;
}
</style>