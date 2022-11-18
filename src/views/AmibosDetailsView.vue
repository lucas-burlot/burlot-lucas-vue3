<script setup>
import {useRoute} from 'vue-router'
import {onBeforeMount, ref} from "vue";
import axios from "axios";
import Loader from "@/components/Loader.vue";

const route = useRoute();
const API_URL = `https://www.amiiboapi.com/api/amiibo?tail=${route.params.id}`
const amiibo = ref([]);
const loading = ref(true);

onBeforeMount(async () => {
  const response = await axios.get(API_URL)
  amiibo.value = response?.data?.amiibo[0];
  if (response.status === 200) {
    loading.value = false;
  }
});
</script>

<template>
  <section id="main">
    <div class="container">
      <div class="row" v-if="!loading">
        <div class="col-4 col-12-medium">
          <!-- Sidebar -->
          <section class="box">
            <header>
              <h3>Infos</h3>
            </header>
            <p> amiiboSeries : <b>{{ amiibo?.amiiboSeries }}</b> <br />
              character : {{ amiibo?.character }}<br />
              gameSeries : {{ amiibo?.gameSeries }}<br />
              type : {{ amiibo?.type }}
            </p>
          </section>
          <section class="box">
            <header>
              <h3>Dates sorties</h3>
            </header>
            <ul class="divided">
              <li v-for="(releaseDate, idx) in amiibo?.release">{{ idx + ' : ' + releaseDate}}</li>
            </ul>
          </section>
        </div>
        <div class="col-8 col-12-medium imp-medium">
          <!-- Content -->
          <article class="box post">
            <a href="#" class="featured"><img :src="amiibo?.image" alt="" /></a>
            <header>
              <h2>{{ amiibo?.name }}</h2>
              <p>{{ amiibo?.type }}</p>
            </header>
          </article>
        </div>
      </div>
      <Loader v-else />
    </div>
  </section>
</template>
