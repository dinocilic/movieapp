<template>
  <div class="shows">
    <h4 class="text-center title">{{ showapp }}</h4>
    <div class="row">
        <div class="col-6" v-for="tv in shows" :key="tv.id">
            <div class="card card-body">
                <img v-if="tv.poster_path === null" src="../assets/no-image.png" alt="" class="img-fluid show_img">
                <img :src='"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + tv.poster_path' alt="" class="img-fluid show_img">
                <a :href='"/show/" + tv.id'><h4 class="card-title text-center"> {{ tv.name }}</h4></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Shows',
  data () {
    return {
      showapp: 'TV Shows',
      shows: [],
      errors: []
    }
  },
  methods: {
    getShows () {
      axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=a408ff2af5a75c2238309877dc8cefa5&language=en-US')
        .then(function (res) {
          let show = res.data
          this.shows = show.results.slice(0, 10)
        }.bind(this))
        .catch(function (err) {
          this.errors = err
        }.bind(this))
    }
  },
  created () {
    this.getShows()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.shows .title {
    margin-top: 10px;
    color: #f3f3f3;
}
.shows .card {
    background-color: transparent;
}
.shows .show_img {
    max-width: 70%;
    margin:auto;
}
.shows .card-title {
    position: relative;
    left: 15%;
    max-width: 70%;
    font-family: monospace;
    font-size: 16px;
    background-color: #000000;
    color: #f3f3f3;
    padding: 15px;
    text-align: center;
}
.shows .card-title:hover {
    transform: scale(1.2,1.2);
    background-color: #f3f3f3;
    color: red;
}
</style>
