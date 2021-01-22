<template>
  <div id="__experience" class="columns is-desktop section">
    <div class="column section__title is-one-fifth">Experience</div>
    <div class="column section__content">
      <div class="experience__job">
        <div class="company" v-for="exp of experience" :key="exp.id">
          <div class="company__job">
            <div class="company__name">{{exp.name}}</div>
            <div class="company__time">{{exp.time}}</div>
          </div>
          <div class="company__role">{{exp.role}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AboutExperience',
    data: () => ({
      experience: [
          { id: 1, name: "OptimizeX", time: "Sept 2018 - Present", role: "Web Developer" },
          { id: 2, name: "AMORELE Technology, Inc", time: "June - July 2017", role: "Intern student as Software  Developer" },
        ]
    })
}
</script>