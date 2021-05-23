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
    this.getAllCards()
  },
  watch: {
    '$root.id'(event){
      this.getCards(event);
      // console.log('watch',event)
    }
  },
  methods: {
    async getAllCards() {
      let res = await fetch(this.$store.getters.GET_API_URL + 'posters')
      if (res.ok) {
        let json = await res.json();
        this.cards = json
      } else {
        alert("Ошибка HTTP: " + res.status);
      }
    },
    async getCards(id) {
      let res = await fetch(this.$store.getters.GET_API_URL + 'posters-by-category/' + id);
      if (res.ok) {
        let json = await res.json();
        this.cards = json.results
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
