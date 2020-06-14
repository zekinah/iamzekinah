<template>
  <div id="app">
    <navigation/>
    <dntoogle/>
    <header class="intro">
      <h1 class="intro__hello">> Hi, I'm <span class="name">Zekinah Lecaros. _</span></h1>
      <h2 class="intro__tagline">A person who will strive to his achivements with the use of digital tools and open source.</h2>
      <h3 class="intro__contact">
        <span>Get in touch </span>
        <span> <a href="mailto:zjlecaros@gmail.com" target="_blank" class="highlight-link">zjlecaros@gmail.com</a> </span>
      </h3>
    </header>
    <followme/>
  </div>
</template>
<script>
// @ is an alias to /src
import navigation from './components/Navigation.vue'
import dntoogle from './components/Dntoogle.vue'
import followme from './components/Followme.vue'
export default {
  name: 'app',
  components: {
    navigation,
    dntoogle,
    followme
  }
}
</script>
