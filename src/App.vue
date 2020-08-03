<template>
  <div id="app">
    <navigation/>
    <main id="page-wrap">
      <dntoogle/>
      <transition name="fade" mode="out-in">
         <router-view></router-view>
      </transition>
    </main>
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
  },
  metaInfo() {
    return { 
      title: "Zekinah Lecaros | Web Developer",
      meta: [
        { name: 'description', content:  'A person who will strive for his achievements with the use of digital tools and open source.'},
        { property: 'og:title', content: "Zekinah Lecaros | Web Developer"},
        { property: 'og:site_name', content: 'Zekinah Lecaros | Web Developer'},
        { property: 'og:type', content: 'website'},    
        { name: 'robots', content: 'index,follow'} 
      ]
    }
  }
}
</script>