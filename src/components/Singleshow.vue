<template lang="html">
  <div class="details">
      <button @click="$router.go(-1)" type="button" name="button" class="btn btn-dark">Back</button>
      <div class="row">
          <div class="col-12">
              <img :src='"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + show.poster_path' alt="" class="img-fluid single-img">
          </div>
          <div class="col-12">
              <h4 class="text-center show_title"> {{ show.name }}</h4>
              <div class="row">
                  <div class="col-8">
                      <div class="card card-body">
                          <small>
                             <i class="fa fa-info"></i> Overview of the show:
                          </small>
                          <hr>
                          <p class="card-text">
                              {{ show.overview }}
                          </p>
                      </div>
                  </div>
                  <div class="col-4">
                      <div class="card card-body">
                          <h6>
                            <small>
                                <i class="fa fa-film"></i> Seasons: {{ show.number_of_seasons }}
                            </small>
                            <hr>
                             <small>
                                <i class="fa fa-tv"></i> Episodes: {{ show.number_of_episodes }}
                             </small>
                             <hr>
                             <small>
                                 <i class="fa fa-star"></i> Popularity: {{ show.popularity }}
                              </small>
                              <hr>
                              <small>
                                 <i class="fa fa-calendar"></i> Last air date: {{ show.last_air_date }}
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
      show: ''
    }
  },
  methods: {
    getShow (id) {
      axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=a408ff2af5a75c2238309877dc8cefa5&language=en-US`)
        .then(function (resp) {
          this.show = resp.data
        }.bind(this))
    }
  },
  created () {
    this.getShow(this.$route.params.id)
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
    font-size: 18px;
    letter-spacing: 2px;
}
.details .fa {
    margin-right: 15px;
    font-size: 18px;
    padding: 5px;
    border-bottom: 2px solid black;
}
</style>
