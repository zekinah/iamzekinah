<template>
  <div class="navigation">
    <span class="site-logo">
      <router-link to="/" class="title">{{ intro.abbr }}</router-link>
    </span>
    <Slide right>
      <router-link v-for="item in navigation" :key="item.title" :to="item.link" :id="item.id">
        <span>{{ item.title }}</span>
      </router-link>
      <a id="resume" :href="intro.resume_link" target="_blank"><span>Resume</span></a>
    </Slide>
  </div>
</template>
<script>
import { introduction } from "@/portfolio";
import { Slide } from 'vue-burger-menu'

export default {
    name: 'navigation',
    components: {
        Slide
    },
    data: () => ({
      intro: introduction,
      navigation: [
          { id: "home", title: "Home", link: "/" },
          { id: "project", title: "Projects", link: "/project" },
          { id: "about", title: "About", link: "/about" }
        ]
     })
}
</script>

<style lang="scss">
body .bm-burger-bars {
    background-color: #F5F2F4;
}
body.light-mode .bm-burger-bars {
    background-color: #19242F;
}
body .bm-menu {
    background-color: #5290B2;
}
span.site-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30px;
    left: 30px;
}
span.site-logo a.title{
    color: #81ABAE;
}
body.light-mode span.site-logo a.title{
    color: #19242F;
}
a#resume span {
    border: 3px solid #fff;
    padding: 5px 50px;
}
</style>