<template>
  <div id="__otherstuff" class="columns is-desktop section">
    <div class="column section__title is-one-fifth">Other Stuffs</div>
    <div class="column section__content">
      <codersrank-widget username="zekinah"></codersrank-widget>
    </div>
  </div>
</template>

<script>
export default {
    name: 'section-otherstuff',
    data: () => ({
      other_stuffs: [
          { id: 1, name: "Badminton"},
          { id: 2, name: "Dancing" },
          { id: 3, name: "Paramour" },
        ]
    })
}
</script>