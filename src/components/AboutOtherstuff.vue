<template>
  <div id="__otherstuff" class="columns is-desktop section">
    <div class="column section__title is-one-fifth">Other Stuffs</div>
    <div class="column section__content">
      <div class="otherstuff__list">
        <div class="otherstuff__name">Coders Rank Stats</div>
        <div class="otherstuff__content">
          <codersrank-widget username="zekinah"></codersrank-widget>
        </div>
      </div>
      <div class="otherstuff__list">
        <div class="otherstuff__name">Github Stats</div>
        <div class="otherstuff__content">
            <p><a href="https://github.com/zekinah" target="_blank"><img :src="githubStatsUrl" alt="zekinah-stats"></a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AboutOtherstuff',
    data: () => ({
      other_stuffs: [
          { id: 1, name: "Badminton"},
          { id: 2, name: "Dancing" },
          { id: 3, name: "Paramour" },
        ],
      githubStatsUrl: "https://github-readme-stats.vercel.app/api?username=zekinah"
    })
}
</script>