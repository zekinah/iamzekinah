<template>
  <div class="navigation">
    <span class="site-logo">
      <router-link to="/" class="title">ZL</router-link>
    </span>
    <Slide right>
      <router-link v-for="item in navigation" :key="item.title" :to="item.link" :id="item.id">
        <span>{{ item.title }}</span>
      </router-link>
    </Slide>
  </div>
</template>
<script>
import { Slide } from 'vue-burger-menu'

export default {
    name: 'menu',
    components: {
        Slide
    },
    data: () => ({
      navigation: [
          { id: "home", title: "Home", link: "/" },
          { id: "project", title: "Project", link: "/project" },
          { id: "about", title: "About", link: "/about" }
        ]
     })
}
</script>

<style lang="scss">
.bm-burger-bars {
    background-color: #fff;
}
.bm-menu {
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
</style>