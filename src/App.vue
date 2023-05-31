<template>
  <h1>Counter: {{ count }}</h1>
  <button @click="random">+</button>
  <h2>{{ incrementedBy }}</h2>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { mapState, mapActions } from 'vuex';

export default{
  computed:{
    ...mapState(['count', 'incrementedBy'])
  },

  methods:{
    ...mapActions({random: 'incrementarRandom'
    })
  }

}


</script>


<style scoped>

</style>
