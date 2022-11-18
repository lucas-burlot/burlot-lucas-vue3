<script setup>
import {ref, onBeforeMount} from 'vue'
import axios from 'axios'
import Loader from "@/components/Loader.vue";

const API_URL = 'https://www.amiiboapi.com/api/amiibo/'
const amiibos = ref([]);
const loading = ref(true);

onBeforeMount(async () => {
  const response = await axios.get(API_URL)
  amiibos.value = response.data?.amiibo;
  if (response.status === 200) {
    loading.value = false;
  }
})
</script>

<template>
  <section id="main">
    <div class="container">
      <!-- Content -->
      <article class="box post" v-if="!loading">
        <header>
          <h2>Ma Collection</h2>
          <p>Il y a {{ amiibos.length }} amiibos </p>
        </header>
        <table>
          <tr>
            <th>Character</th>
            <th>game Series</th>
            <th>Action</th>
          </tr>
          <tr v-for="amiibo in amiibos" :key="amiibo.tail">
            <td>{{ amiibo?.character }}</td>
            <td>{{ amiibo?.gameSeries }}</td>
            <td><RouterLink :to="{name:'amibosDetails', params:{id: amiibo.tail}}"><button>Voir</button></RouterLink></td>
          </tr>
        </table>
      </article>
      <Loader v-else />
    </div>
  </section>
</template>
