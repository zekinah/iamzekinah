<template>
  <div id="app">
    <navigation/>
    <dntoogle/>
    <router-view />
  </div>
</template>
<script>
import navigation from './components/Navigation.vue'
import dntoogle from './components/Dntoogle.vue'
export default {
  name: 'app',
  components: {
    navigation,
    dntoogle,
  }
}
</script>
