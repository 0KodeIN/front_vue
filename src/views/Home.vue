<template>
  <div class="home">
    <HelloWorld/>
    <div class="main">
    <card v-for="(card, index) in cards" :key="`card${index}`" :card="card"/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import card from '@/components/card.vue'

export default {
  name: 'Home',
  data() {
    return {
      cards: []
    }
  },
  mounted() {
    this.getCards()
  },
  methods: {
    async getCards() {
      let res = await fetch(this.$store.getters.GET_API_URL + 'posts')
      if (res.ok) {
        let json = await res.json();
        this.cards = json
      } else {
        alert("Ошибка HTTP: " + res.status);
      }
    }
  },
  components: {
    HelloWorld,
    card
  }
}
</script>
