<template>
  <div class="page __not-found">
    <h1 class="page-header">> 404 <span class="blink">_</span></h1>
    <div class="page-content"></div>
    <SiteFooter/>
  </div>
</template>

<script>
import SiteFooter from "@/components/SiteFooter.vue";
export default {
  name: '404',
  components: {
    SiteFooter
  }
}
</script>
<style lang="scss">
.__not-found .page-header {
    text-align: center;
}
</style>