<template>
  <div id="__otherstuff" class="columns is-desktop section"  v-show="oStuffs.display">
    <div class="column section__title is-one-fifth">Other Stuffs</div>
    <div class="column section__content">

      <!-- Coders Rank Section -->
      <div class="otherstuff__list" v-show="oStuffs.section[1].codersrank_display">
        <div class="otherstuff__name">{{ oStuffs.section[1].title }}</div>
        <div class="otherstuff__content">
          <codersrank-widget :username="oStuffs.section[1].codersrank_name"></codersrank-widget>
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
import { otherStuffs } from "@/portfolio";

export default {
    name: 'AboutOtherstuff',
    data: () => ({
      oStuffs: otherStuffs
    })
}
</script>