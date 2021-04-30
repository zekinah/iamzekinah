<template>
  <div class="featured__content">
    <div v-for="(f, index) in fproject.featured" :key="index">
      <ProjectFeaturedOdd :data="f" v-if="index % 2 != 0"/>
      <ProjectFeaturedEven :data="f" v-else/>
    </div>
  </div>
</template>

<script>
import { featuredProject } from "@/portfolio";
import ProjectFeaturedEven from "@/components/ProjectFeaturedEven.vue";
import ProjectFeaturedOdd from "@/components/ProjectFeaturedOdd.vue";

export default {  
  name: 'ProjectFeatured',
   data: () => ({
    fproject: featuredProject
  }),
  components: {
    ProjectFeaturedEven,
    ProjectFeaturedOdd
  },
}
</script>