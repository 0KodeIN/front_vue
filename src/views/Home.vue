<template>
  <div class="home">

    <HelloWorld/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SignIn from '@/components/SignIn_acc.vue'
import Regist from '@/components/Registration.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    SignIn,
    Regist

  }
}
</script>
