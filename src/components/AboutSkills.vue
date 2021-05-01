<template>
  <div id="__skills" class="columns is-desktop section">
    <div class="column section__title is-one-fifth">Skills</div>
    <div class="column section__content">
      <div class="skills">
        <div class="skills__content" v-for="(s, index) in sSet.skills" :key="index">
          <div class="skills__title">{{s.skill_title}}</div>
          <div class="skills__list">
            <ul>
              <li v-for="s of s.skill_list" :key="s.skill_name">{{s.skill_name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { skillSet } from "@/portfolio";

export default {
    name: 'AboutSkills',
     data: () => ({
      sSet: skillSet
    })
}
</script>