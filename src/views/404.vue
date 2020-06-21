<template>
  <div class="page __not-found">
    <h1 class="page-header">> 404 <span class="blink">_</span></h1>
    <div class="page-content"></div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: '404',
  components: {
    Footer
  },
  mounted() {
    this.$ga.page('/404');
  }
}
</script>
<style lang="scss">
.__not-found .page-header {
    text-align: center;
}
</style>