<template>
<section class="post">
  {{info}}
</section>
</template>

<script>
import axios from "axios";
export default {
  name: "Wrapper",
  data(){
    return {

      info: null
    };

  },

  mounted() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => {
            this.info = response});
  }

};
</script>