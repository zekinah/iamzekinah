<template>
  <div id="__otherstuff" class="section">
    <div class="section__title">Other Stuffs</div>
    <div class="section__content">
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