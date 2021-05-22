<template>
  <div class="home">

    <HelloWorld/>
    <dialog></dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Dialog from '@/components/Dialog.vue'
import SignIn from '@/components/SignIn.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    Dialog,
    SignIn

  }
}
</script>
