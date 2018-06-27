<template>
  <div class="navigation">
    <header>
        <a href="/">
            <h5 class="text-center bg-dark text-danger movie_title"> {{ app }} </h5>
        </a>
    </header>
    <nav class="nav nav-pills justify-content-start">
        <a href="/movies/" class="nav-link">Movies</a>
        <a href="/" class="nav-link">Shows</a>
    </nav>
    <input type="text" v-model="search" placeholder="Search the title..." class="form-control search_bar">
    <!-- <img :src='"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + post.poster_path' alt="" class="mr-3"> -->
    <!-- <img :src='"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + post.poster_path' alt="" class="mr-3"> -->
    <ul class="nav nav-tabs search_me justify-content-start" v-if="search.length > 3">
        <li class="nav-item" v-for="post in searchList" :key="post.id">
            <a :href='"/movie/" + post.id' class="nav-link" v-if="post.media_type == 'movie'">{{ post.original_title }}</a>
            <a :href='"/show/" + post.id' class="nav-link" v-else-if="post.media_type == 'tv'">{{ post.original_name }}</a>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Nav',
  data () {
    return {
      app: 'MovieApp',
      search: '',
      searchList: [],
      errors: []
    }
  },
  watch: {
    search: function (val) { this.process(val) }
  },
  methods: {
    process: function (val) {
      this.getSearch()
    },
    getSearch () {
      axios.get('https://api.themoviedb.org/3/search/multi?api_key=a408ff2af5a75c2238309877dc8cefa5&language=en-US&query=' + this.search + '&page=1&include_adult=false')
        .then(function (resp) {
          this.searchList = resp.data.results
        }.bind(this))
        .catch(function (error) {
          this.errors = error
          //    console.log(this.errors)
        }.bind(this))
    },
    clearList () {
      this.searchList.splice(this.index, 1)
    }
  },
  created () {
    this.getSearch()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none;
}
.navigation .movie_title {
    padding: 20px;
}
.nav .nav-link {
    background-color: #f3f3f3;
    margin: 6px;
    color: #2c3e50;
    box-shadow: 5px 5px black;
}
.nav .nav-link:hover {
    box-shadow: 5px 5px red;
    transform: scale(1.2, 1.2);
}
.search_bar {
    margin: 10px;
    border-radius: 25px;
    border: 2px solid black;
}

</style>
