<template>
  <div class="page about">
    <h1 class="page-header">About.</h1>
    <div class="page-content"></div>
    <SectionBackground/>
    <SectionSkills/>
    <SectionExperience/>
    <SectionOtherstuff/>
    <SiteFooter/>
  </div>
</template>

<script>
import SectionBackground from "@/components/SectionBackground.vue";
import SectionExperience from "@/components/SectionExperience.vue";
import SectionSkills from "@/components/SectionSkills.vue";
import SectionOtherstuff from "@/components/SectionOtherstuff.vue";
import SiteFooter from "@/components/SiteFooter.vue";
export default {
  name: 'about',
  components: {
    SectionBackground,
    SectionExperience,
    SectionSkills,
    SectionOtherstuff,
    SiteFooter
  },
  mounted() {
    this.$ga.page('/about');
  }
}
</script>