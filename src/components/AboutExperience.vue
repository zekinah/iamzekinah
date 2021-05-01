<template>
  <div id="__experience" class="columns is-desktop section">
    <div class="column section__title is-one-fifth">Experience</div>
    <div class="column section__content">
      <div class="experience__job">
        <div class="company" v-for="(e, index) in wExperiences.experience" :key="index">
          <div class="company__job">
            <div class="company__name">{{e.name}}</div>
            <div class="company__time">{{e.time}}</div>
          </div>
          <div class="company__role">{{e.role}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { workExperiences } from "@/portfolio";

export default {
    name: 'AboutExperience',
    data: () => ({
      wExperiences: workExperiences
    })
}
</script>