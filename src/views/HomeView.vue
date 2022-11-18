<script setup>
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import AmiiboCard from "@/components/AmiiboCard.vue";
import Loader from "@/components/Loader.vue";

const API_URL = `https://www.amiiboapi.com/api/amiibo/`
const amiibos = ref([]);
const loading = ref(true);

onBeforeMount(async () => {
  const response = await axios.get(API_URL)
  // On récupère seulement les 3 premiers
  amiibos.value = response.data.amiibo.slice(0, 3);
  if (response.status === 200) {
    loading.value = false;
  }
});
</script>

<template>
  <div id="app">
    <div id="page-wrapper">
      <section id="banner">
        <header>
          <h2>Hey.Bienvenue sur ma collection</h2>
        </header>
      </section>

      <section id="intro" class="container" v-if="!loading">
        <div class="row">
          <AmiiboCard :amiibo="amiibo" v-for="amiibo in amiibos" :key="amiibo.tail" />
        </div>
        <footer>
          <ul class="actions">
            <li><RouterLink class="button large" :to="{name:'amibosList'}">Liste complète</RouterLink></li>
          </ul>
        </footer>
      </section>
      <Loader v-else />
    </div>
  </div>
</template>
