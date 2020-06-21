<template>
  <div id="home">
    <header class="intro">
      <h1 class="intro__hello">> Hi, I'm <span class="name">Zekinah Lecaros. <span class="blink">_</span></span></h1>
      <h2 class="intro__tagline">A person who will strive to his achievements with the use of digital tools and open source.</h2>
      <h3 class="intro__contact">
        <span>Get in touch </span>
        <span> <a href="mailto:zjlecaros@gmail.com" target="_blank" class="highlight-link">zjlecaros@gmail.com</a> </span>
      </h3>
    </header>
    <followme/>
  </div>
</template>
<script>
import followme from '../components/Followme.vue'

export default {
  name: 'home',
  components: {
    followme
  }
}
</script>