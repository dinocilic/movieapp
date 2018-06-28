<template lang="html">
  <div class="details">
      <button @click="$router.go(-1)" type="button" name="button" class="btn btn-dark">Back</button>
      <div class="row">
          <div class="col-12 text-center trailer">
              <iframe v-for="vi in video" :key="vi.id" width="660" height="415" :src='"https://www.youtube.com/embed/" +  vi.key' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div class="col-12">
              <h4 class="text-center show_title"> {{ movie.title }}</h4>
              <div class="row">
                  <div class="col-7">
                      <div class="card card-body overview">
                          <small>
                             <i class="fa fa-info"></i> Overview of the show:
                          </small>
                          <hr>
                          <p class="card-text">
                              {{ movie.overview }}
                          </p>
                      </div>
                  </div>
                  <div class="col-5">
                      <div class="card card-body">
                          <img :src='"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + movie.poster_path' alt="" class="img-fluid single-img">
                          <h6>
                            <hr>
                             <small>
                                <i class="fa fa-tv"></i>Homepage: <a :href='movie.homepage' target="_blank" class="text-danger">{{ movie.homepage }}</a>
                             </small>
                             <hr>
                             <small>
                                 <i class="fa fa-star"></i> Popularity: {{ movie.popularity }}
                              </small>
                              <hr>
                              <small>
                                 <i class="fa fa-calendar"></i>Release date: {{ movie.release_date }}
                              </small>
                              <hr>
                          </h6>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Singleshow',
  data () {
    return {
      movie: '',
      video: []
    }
  },
  methods: {
    getMovie (id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a408ff2af5a75c2238309877dc8cefa5&language=en-US`)
        .then(function (resp) {
          this.movie = resp.data
        }.bind(this))
    },
    getVideo (id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a408ff2af5a75c2238309877dc8cefa5&language=en-US`)
        .then(function (resp) {
          this.video = resp.data.results.slice(0, 1)
        }.bind(this))
    }
  },
  created () {
    this.getMovie(this.$route.params.id)
    this.getVideo(this.$route.params.id)
  }
}
</script>

<style scoped>
.details .single-img {
    max-width: 40%;
    display: block;
    margin:auto;
    margin-bottom: 10px;
}
.details .show_title {
    background-color: #f3f3f3;
    color: #000000;
    padding: 15px;
}
.details .card {
    background-color: #f3f3f3;
    height: 100%;
    box-shadow: 5px 5px red;
}
.details .card-text {
    padding: 25px;
    font-size: 15px;
    letter-spacing: 2px;
}
.details .fa {
    margin-right: 15px;
    font-size: 18px;
    padding: 5px;
    border-bottom: 2px solid black;
}
.details .trailer {
    margin-bottom: 10px;
}
</style>
