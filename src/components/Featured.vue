<template>
  <div class="featured__content">
    <div v-for="f of featured" :key="f.project_id">
      <FeaturedOdd :data="f" v-if="f.project_id % 2 != 0"/>
      <FeaturedEven :data="f" v-else/>
    </div>
  </div>
</template>

<script>
import FeaturedEven from "@/components/FeaturedEven.vue";
import FeaturedOdd from "@/components/FeaturedOdd.vue";

export default {  
  name: 'Featured',
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
    FeaturedEven,
    FeaturedOdd
  },
}
</script>