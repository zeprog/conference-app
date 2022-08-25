<template>
  <div id="app">
    <Conference :currentLink="currentLink" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Conference from '@/components/Conference'

export default {
  name: 'App',
  components: {
    Conference
  },
  computed: {
    ...mapState(['currentLink'])
  },
  methods: {
    ...mapActions(['getCurrentLink'])
  },
  mounted() {
    this.getCurrentLink()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
