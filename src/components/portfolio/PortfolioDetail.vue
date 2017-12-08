<template>
  <div class="portfolio-detail">

    <sub-header :heading="'Portfolio: ' + item.name"></sub-header>

    <section class="section-padding">
      
      <!-- Portfolio Detail -->
      <div class="container">
        <div class="row">
          <!-- Poftfolio Item -->
          <div class="col-md-7">

            <!--<div class="content" id="content6" data-stellar-background-ratio="0.5"></div>-->

            <div class="portfolio-image-wrap" v-for="photo in item.photos" v-if="photo.image_path !== item.photos[0].image_path">
              <p><img v-bind:src="'https://sitesbyjoe.com/' + photo.image_path" alt="image" width="100%" /></p>
            </div>
          </div>
          <!-- End Poftfolio Item -->

          <!-- Poftfolio Content -->
          <div class="col-md-5">
            <div class="portfolio-item-content">
              <h1 class="alt-title">{{item.name}}</h1>
                <div class="portfolio-item-content-spc">
                  <h5 class="alt-title">{{item.description}}</h5>
                </div>
                <div class="portfolio-item-content-spc">
                  <h5 class="alt-title">Project Details</h5>
                  <ul class="portfolio-item-content-detail list-none">
                    <!--<li v-if="item.tags"><span class="text-bold">Tags:</span> {{item.tags}}</li>-->
                    <li v-if="item.launch_date"><span class="text-bold">Date Created:</span> {{item.launch_date}}</li>
                    <li v-if="item.technologies"><b>Technologies Used:</b> {{item.technologies}}</li>
                    <li v-if="item.goals"><b>Goals:</b> {{item.goals}}</li>
                    <li v-if="item.solution"><b>Solution:</b> {{item.solution}}</li>
                    <li v-if="item.comment"><b>Client Said:</b> <i>"{{item.comment}}"</i></li>
                  </ul>
                </div>
                <div class="portfolio-item-content-spc" v-if="item.published == 1">
                  <a v-bind:href="item.url" target="_blank" class="btn btn-primary btn-lg">Launch Website<i class="fa fa-external-link right"></i></a>
                </div>
              </div>
            </div>
            <!-- End Poftfolio Content -->
          </div>
      </div>
      <!-- End Portfolio Detail -->
      
    </section>

  </div>
</template>

<script>
  import axios from 'axios'
  import SubHeader from '@/components/common/SubHeader.vue'

  export default {
    components: {
      SubHeader
    },

    data () {
      return {
        item: {
          name: '',
          description: '',
          photos: [{
            'image_path': ''
          }],
          launch_date: '',
          url: ''
        }
      }
    },

    beforeCreate: function () {
      var api = 'https://sitesbyjoe.com/portfolio/api_detail/' + this.$route.params.slug
      axios({
        method: 'get',
        url: api
      }).then((response) => {
        this.item = response.data
      })
    }
  }
</script>

<style>
  .content {
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-y: 0;
    height: 350px;
  }
  #content6 {
    background-image: url("https://sitesbyjoe.com/uploads/portfolio/79-c-cups-homepage.jpg");
    border: solid #000 10px;
    border-radius: 6px;
  }
</style>