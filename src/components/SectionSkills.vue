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
    name: 'section-skills',
     data: () => ({
      skills: [
        {
          skill_id: 1,
          skill_title: "Technologies",
          skill_list: [
            { skill_name: "Javascript (ES6+)", },
            { skill_name: "jQuery + ajax", },
            { skill_name: "VueJS + axios", },
            { skill_name: "HTML & CSS", },
            { skill_name: "My Sqli", },
            { skill_name: "PHP", }
          ]
        },
        {
          skill_id: 2,
          skill_title: "CMS and Tools",
          skill_list: [
            { skill_name: "Wordpress Plugin BoilerPlates", },
            { skill_name: "VS Code Editor", },
            { skill_name: "Magento 1 & 2", },
            { skill_name: "Wordpress", },
            { skill_name: "GIT & SVN", }
          ]
        }
      ]
    })
}
</script>