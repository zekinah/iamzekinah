<template>
  <div class="navigation">
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
</style>