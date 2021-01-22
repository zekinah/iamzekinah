<template>
  <div id="__skills" class="columns is-desktop section">
    <div class="column section__title is-one-fifth">Skills</div>
    <div class="column section__content">
      <div class="skills">
        <div class="skills__content" v-for="skill of skills" :key="skill.skill_id">
          <div class="skills__title">{{skill.skill_title}}</div>
          <div class="skills__list">
            <ul>
              <li v-for="s of skill.skill_list" :key="s.skill_name">{{s.skill_name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AboutSkills',
     data: () => ({
      skills: [
        {
          skill_id: 1,
          skill_title: "Technologies",
          skill_list: [
            { skill_name: "Javascript (ES6)", },
            { skill_name: "HTML5 & (S)CSS", },
            { skill_name: "jQuery + Ajax", },
            { skill_name: "VueJS + Axios", },
            { skill_name: "My Sqli", },
            { skill_name: "PHP", } 
          ]
        },
        {
          skill_id: 2,
          skill_title: "CMS and Tools",
          skill_list: [
            { skill_name: "Wordpress & Woocommerce", },
            { skill_name: "Magento 1.9 & 2", },
            { skill_name: "GIT & SVN", },
            { skill_name: "Bootstrap", },
            { skill_name: "Vuetify", },
            { skill_name: "Bulma", }
          ]
        }
      ]
    })
}
</script>