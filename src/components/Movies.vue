<template>
  <div class="movies">
    <h4 class="text-center title">{{ moviesapp }}</h4>
    <div class="row">
        <div class="col-6" v-for="movie in movies" :key="movie.id">
            <div class="card card-body">
                <img v-if="movie.poster_path === null" src="../assets/no-image.png" alt="" class="img-fluid show_img">
                <img :src='"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + movie.poster_path' alt="" class="img-fluid show_img">
                <a :href='"/movie/" + movie.id '><h4 class="card-title text-center"> {{ movie.title }}</h4></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Movies',
  data () {
    return {
      moviesapp: 'Movies',
      movies: [],
      errors: []
    }
  },
  methods: {
    getMovies () {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=a408ff2af5a75c2238309877dc8cefa5&language=en-US')
        .then(function (res) {
          let movie = res.data
          this.movies = movie.results.slice(0, 10)
        }.bind(this))
        .catch(function (err) {
          this.errors = err
        }.bind(this))
    }
  },
  created () {
    this.getMovies()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.movies .title {
    margin-top: 10px;
    color: #f3f3f3;
}
.movies .card {
    background-color: transparent;
}
.movies .show_img {
    max-width: 70%;
    margin:auto;
}
.movies .card-title {
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
.movies .card-title:hover {
    transform: scale(1.2,1.2);
    background-color: #f3f3f3;
    color: red;
}
</style>
