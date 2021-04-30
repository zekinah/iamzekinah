<template>
  <div id="__background" class="columns is-desktop section">
      <div class="column section__title is-one-fifth">Background</div>
        <div class="column section__content">
          <p v-for="(d, index) in bground.section" :key="index" v-html="d.description"></p>
        </div>
  </div>
</template>

<script>
import { background } from "@/portfolio";

export default {
  name: 'AboutBackground',
  data: () => ({
    bground: background
  }),
}
</script>