<template>
  <div class="portfolio-detail">
    
    <sub-hero 
      v-bind:title="item.name" 
      v-bind:bg-image="item.photos[0].image_path"></sub-hero>
      
    <section class="section-padding">
      
      <!-- Portfolio Detail -->
      <div class="container">
          <div class="row">
              <!-- Poftfolio Item -->
              <div class="col-md-7">
                  <div class="portfolio-image-wrap" v-for="photo in item.photos" v-if="photo.image_path !== item.photos[0].image_path">
                      <img v-bind:src="'https://sitesbyjoe.com/' + photo.image_path" alt="image" width="100%" />
                  </div>
              </div>
              <!-- End Poftfolio Item -->

              <!-- Poftfolio Content -->
              <div class="col-md-5">
                  <div class="portfolio-item-content">
                      <h1 class="alt-title">{{item.name}}</h1>
                      <div class="portfolio-item-content-spc">
                          <h5 class="alt-title">{{item.description}}</h5>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                          <p>Quisque rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                      </div>
                      <div class="portfolio-item-content-spc">
                          <h5 class="alt-title">Project details</h5>
                          <ul class="portfolio-item-content-detail list-none">
                              <li><span class="text-bold">Tags:</span> {{item.tags}}</li>
                              <li><span class="text-bold">Date Created:</span> {{item.launch_date}}</li>
                              <li><span class="text-bold">Website:</span> {{item.url}}</li>
                              <li><b>Technologies Used:</b> {{item.technologies}}</li>
                              <li><b>Website Live?</b> {{item.published}}</li>
                              <li><b>Solution:</b> {{item.solution}}</li>
                              <li><b>Client Said:</b> {{item.comment}}</li>
                          </ul>
                      </div>
                      <div class="portfolio-item-content-spc">
                          <a v-bind:href="item.url" target="_blank" class="btn btn-black-outline btn-lg">Launch Website<i class="fa fa-external-link right"></i></a>
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
  import SubHero from '@/components/SubHero.vue'

  export default {
    components: {
      SubHero
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
        console.log('api call done', response.data, this)
        this.item = response.data
        // console.log(this)
        // console.log('THIS', this, 'THIS>ITEM', this.item)
        // console.log('PortfolioDetail this.bgImage just set', this.item.photos[0].image_path)
      })
    }
  }
</script>