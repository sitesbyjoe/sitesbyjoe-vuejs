<template>
  <div class="portfolio-detail">
    
    <sub-hero 
      title="" 
      sub-title="" 
      bg-image=""></sub-hero>
      
    <section class="section-padding">
      
      <!-- Portfolio Detail -->
      <div class="container">
          <div class="row">
              <!-- Poftfolio Item -->
              <div class="col-md-6">
                  <div class="portfolio-image-wrap" v-for="photo in item.photos">
                      <img v-bind:src="'https://sitesbyjoe.com/' + photo.image_path" alt="image" />
                  </div>
              </div>
              <!-- End Poftfolio Item -->

              <!-- Poftfolio Content -->
              <div class="col-md-6">
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
                              <li>
                                  <span class="text-bold">Client :</span> Apollo Template
                              </li>
                              <li>
                                  <span class="text-bold">Category :</span> Branding, Photography
                              </li>
                              <li>
                                  <span class="text-bold">Date Created :</span> September 19 2016
                              </li>
                              <li>
                                  <span class="text-bold">Website :</span> <a href="http://nileforest.com/" target="_blank">nileforest.com</a>
                              </li>
                          </ul>
                      </div>
                      <div class="portfolio-item-content-spc">
                          <a href="http://nileforest.com/" target="_blank" class="btn btn-black-outline btn-lg">Launch Project<i class="fa fa-external-link right"></i></a>
                      </div>
                  </div>
              </div>
              <!-- End Poftfolio Content -->
          </div>
      </div>
      <!-- End Portfolio Detail -->
      
    </section>
      
              <!--<section class="section-padding bg-image overlay-dark40" data-stellar-background-ratio="0.4" data-background-img="img/full/07.jpg" >
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
              </section>-->
              </div>
</template>

<script>
  export default {
    data () {
      return {
        item: {}
      }
    },
    created: function () {
      var api = 'https://sitesbyjoe.com/portfolio/api_detail/' + this.$route.params.slug
      this.axios({
        method: 'get',
        url: api
      }).then((response) => {
        this.item = response.data
      })
    }
  }
</script>