<template>
  <div class="portfolio">
    
    <sub-hero 
      title="Portfolio" 
      sub-title="Some stuff I made back in the day" 
      bg-image="/static/assets/img/fj40-steering.jpg"></sub-hero>

    <section class="section-padding">

      <!-- Portfolio Grid -->
      <div class="container">
        <h2>Another Heading</h2>
        <div class="rows portfolio-grid not-gallery-popup">
          <h3>Yet Another Heading</h3>

          <!-- Portfolio Item -->
          <div class="portfolio-item" v-for="item in items">
            <div class="portfolio-box">
              <router-link :to="'portfolio/detail/' + item.slug">
              <!--<a class="not-porfolio-popup not-gallery-popup-link" href="javascript:void(0);" v-bind:title="item.name">-->
                <div class="portfolio-image-wrap">
                  <img v-bind:src="'http://sitesbyjoe.com/' + item.image_path">
                </div>
                <div class="portfolio-caption-mask">
                  <div class="portfolio-caption-text">
                    <div class="portfolio-caption-tb-cell">
                      <h5 class="alt-title">{{item.name}}</h5>
                      <p>{{item.description}}</p>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <!-- End Portfolio Item -->

        </div>
      </div>
      <!-- End Portfolio Grid -->

      <div style="clear:both;"></div>

    </section>
  </div>
</template>

<script>
import SubHero from '@/components/SubHero.vue'

export default {
  name: 'portfolio',
  data () {
    return {
      msg: 'Portfolio Main Page',
      items: []
    }
  },
  created: function () {
    var api = 'https://sitesbyjoe.com/portfolio/api_list'
    this.axios({
      method: 'get',
      url: api
    }).then((response) => {
      this.items = response.data
    })
  },
  components: {
    SubHero
  }
}
</script>