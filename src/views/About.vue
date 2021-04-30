<template>
  <div class="page about">
    <h1 class="page-header">About.</h1>
    <div class="page-content"></div>
    <AboutBackground />
    <AboutSkills />
    <AboutExperience/>
    <AboutOtherstuff/>
    <SiteFooter/>
  </div>
</template>

<script>
import AboutBackground from "@/components/AboutBackground.vue";
import AboutExperience from "@/components/AboutExperience.vue";
import AboutSkills from "@/components/AboutSkills.vue";
import AboutOtherstuff from "@/components/AboutOtherstuff.vue";
import SiteFooter from "@/components/SiteFooter.vue";
export default {
  name: 'about',
  components: {
    AboutBackground,
    AboutExperience,
    AboutSkills,
    AboutOtherstuff,
    SiteFooter
  },
  mounted() {
    this.$ga.page('/about');
  }
}
</script>