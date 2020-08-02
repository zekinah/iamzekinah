<template>
  <div class="featured__content">
    <div v-for="f of featured" :key="f.project_id">
      <ProjectFeaturedOdd :data="f" v-if="f.project_id % 2 != 0"/>
      <ProjectFeaturedEven :data="f" v-else/>
    </div>
  </div>
</template>

<script>
import ProjectFeaturedEven from "@/components/ProjectFeaturedEven.vue";
import ProjectFeaturedOdd from "@/components/ProjectFeaturedOdd.vue";

export default {  
  name: 'ProjectFeatured',
   data: () => ({
    featured: [
        {
          project_id: 1,
          project_title: "Pandemic Covid-19",
          project_url: "https://pandemiccovid19.netlify.app/",
          project_url_github: "https://github.com/zekinah/pandemiccovid-19",
          project_image: "https://raw.githubusercontent.com/zekinah/iamzekinah/master/src/assets/projects/pandemiccovid19.png",
          project_description: "A Web app and PWA compatible worldwide tracker of Pandemic Covid-19, with visualization of graph, table, and map.",
          project_tags: [
            { tag: "VueJS", },
            { tag: "Bulma", },
            { tag: "Disease API", },
            { tag: "Leaflet", },
            { tag: "Chart", },
            { tag: "Count Up", },
          ]
        },
        {
          project_id: 2,
          project_title: "Zone Pokédex 2",
          project_url: "https://zonepokedex2.netlify.app/",
          project_url_github: "https://github.com/zekinah/zone-pokedex2",
          project_image: "https://raw.githubusercontent.com/zekinah/iamzekinah/master/src/assets/projects/zonepokedex2.png",
          project_description: "A Simple Web App and PWA compatible Pokédex built with VueJS and data was based on Poke API.",
          project_tags: [
            { tag: "VueJS", },
            { tag: "Vuetify", },
            { tag: "Poké API", },
            { tag: "Poké Sprites", },
          ]
        }
      ]
  }),
  components: {
    ProjectFeaturedEven,
    ProjectFeaturedOdd
  },
}
</script>