<template>
  <div id="__otherstuff" class="columns is-desktop section"  v-show="oStuffs.display">
    <div class="column section__title is-one-fifth">Other Stuffs</div>
    <div class="column section__content">

      <!-- Coders Rank Section -->
      <div class="otherstuff__list" v-show="oStuffs.section[1].display">
        <div class="otherstuff__name">{{ oStuffs.section[1].title }}</div>
        <div class="otherstuff__content">
          <codersrank-widget :username="oStuffs.section[1].codersrank_name"></codersrank-widget>
        </div>
      </div>
      
      <!-- Github Section -->
      <div class="otherstuff__list" v-show="oStuffs.section[2].display">
        <div class="otherstuff__name">{{ oStuffs.section[2].title }}</div>
        <div class="otherstuff__content">
            <p><a :href="oStuffs.section[2].github_link" target="_blank"><img :src="oStuffs.section[2].github_stats" alt="zekinah-stats"></a></p>
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