<script setup>
</script>

<template>
  <section id="header">

    <!-- Logo -->
    <h1><RouterLink :to="{name:'home'}">AmiiVue</RouterLink></h1>

    <!-- Nav -->
    <nav id="nav">
      <ul>
        <li><RouterLink :to="{name:'home'}">Home</RouterLink></li>
        <li><RouterLink :to="{name:'amibosList'}">Liste amiibo</RouterLink></li>
      </ul>
    </nav>
    <!-- Banner -->
  </section>
</template>

<style scoped>
</style>
