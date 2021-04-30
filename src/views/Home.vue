<template>
  <div id="home">
    <header class="intro">
      <h1 class="intro__hello">> Hi, I'm <span class="name">{{intro.name}}. <span class="blink">_</span></span></h1>
      <h2 class="intro__tagline">{{intro.tagline}}</h2>
      <h3 class="intro__contact">
        <span>Get in touch </span>
        <span> <a :href="`mailto:${intro.email}`" target="_blank" class="highlight-link">{{intro.email}}</a> </span>
      </h3>
    </header>
    <followme/>
  </div>
</template>
<script>
import {introduction} from "@/portfolio";
import followme from '@/components/Followme.vue'
export default {
  name: 'home',
  data: () => ({
    intro: introduction
  }),
  components: {
    followme
  },
  mounted() {
    this.$ga.page('/home');
  }
}
</script>