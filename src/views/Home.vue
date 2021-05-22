<template>
  <div class="home">

    <HelloWorld/>
    <card/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import card from '@/components/card.vue'



export default {
  name: 'Home',
  components: {
    HelloWorld,
    card


  }
}
</script>
