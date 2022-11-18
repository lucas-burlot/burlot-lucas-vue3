<script setup>
const props = defineProps({
  amiibo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="col-4 col-12-medium">
    <section class="middle">
      <img :src="amiibo.image" />
      <header>
        <RouterLink :to="{name:'amibosDetails', params:{id: amiibo.tail}}">
          <h2>{{ amiibo.character }}</h2>
        </RouterLink>
      </header>
      <p>{{ amiibo.gameSeries }}</p>
    </section>
  </div>
</template>

<style scoped>
</style>
