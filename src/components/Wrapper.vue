<template>
  <section class="post">
    {{ info }}
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Wrapper",
  data() {
    return {

      info: null
    };

  },

  mounted() {
    axios('http://127.0.0.1:8000/api/posters-by-category/' + 1)
        .then(response => {
          this.info = response
        });
  }

};
</script>