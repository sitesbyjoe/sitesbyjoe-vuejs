<template>
  <div class="portfolio">

    <sub-header :heading="msg"></sub-header>

    <section class="section-padding">

      <!-- Portfolio Grid -->
      <div class="container">
        <div class="rows portfolio-grid not-gallery-popup">

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
import axios from 'axios'
import SubHeader from '@/components/common/SubHeader.vue'

export default {
  data () {
    return {
      msg: 'Portfolio Main Page',
      items: []
    }
  },
  created: function () {
    var api = 'https://sitesbyjoe.com/portfolio/api_list'
    axios({
      method: 'get',
      url: api
    }).then((response) => {
      this.items = response.data
    })
  },
  components: {
    SubHeader
  }
}
</script>

<style>
  /*------------------------------------------------------------------*/
/* Portfolio (Isotop Grid, box, Portfolio Single Page, etc...) */
/*------------------------------------------------------------------*/
.portfolio-grid .portfolio-item {
    position: relative;
    float: left;
    width: 33.33333333333333%;
    height: auto;
    margin: 0px;
    padding: 15px;
    display: block;
}

@media (max-width: 3000px) {
    .portfolio-grid .portfolio-item {
        width: 20%;
    }
}


@media (max-width: 1170px) {
    .portfolio-grid .portfolio-item {
        width: 33.33333333333333%;
    }
}

@media (max-width: 980px) {
    .portfolio-grid .portfolio-item {
        width: 50%;
    }
}

@media (max-width: 375px) {
    .portfolio-grid .portfolio-item {
        width: 100%;
    }
}

.portfolio-box {
    position: relative;
    overflow: hidden;
}

    .portfolio-box a.porfolio-popup {
        display: block;
    }

    .portfolio-box .portfolio-image-wrap {
        display: block;
        transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        -moz-transition: all 0.3s ease 0s;
        -webkit-transition: all 0.3s ease 0s;
    }

        .portfolio-box .portfolio-image-wrap img {
            width: 100%;
        }

    .portfolio-box:hover .portfolio-image-wrap {
        transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transition: all 2s cubic-bezier(0.23, 1, 0.32, 1) 0s;
        -o-transition: all 2s cubic-bezier(0.23, 1, 0.32, 1) 0s;
        -moz-transition: all 2s cubic-bezier(0.23, 1, 0.32, 1) 0s;
        -webkit-transition: all 2s cubic-bezier(0.23, 1, 0.32, 1) 0s;
        width: 100%;
    }

    .portfolio-box .portfolio-caption-mask {
        background: rgba(0, 0, 0, 0.8) none repeat scroll 0 0;
        height: 100%;
        left: 0;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        top: 0;
        visibility: hidden;
        width: 100%;
        transition: all 0.5s ease-in-out 0s;
        -o-transition: all 0.5s ease-in-out 0s;
        -moz-transition: all 0.5s ease-in-out 0s;
        -webkit-transition: all 0.5s ease-in-out 0s;
        z-index: 9;
    }

    .portfolio-box:hover .portfolio-caption-mask {
        opacity: 1;
        visibility: visible;
    }

    .portfolio-box .portfolio-caption-mask .portfolio-caption-text {
        bottom: -60px;
        left: 0;
        opacity: 0;
        padding-left: 30px;
        padding-right: 30px;
        position: absolute;
        text-align: left;
        transition: all 0.5s ease-in-out 0s;
    }

    .portfolio-box:hover .portfolio-caption-mask .portfolio-caption-text {
        bottom: 30px;
        opacity: 1;
    }



    .portfolio-box .portfolio-caption-mask h1, .portfolio-box .portfolio-caption-mask h2, .portfolio-box .portfolio-caption-mask h3, .portfolio-box .portfolio-caption-mask h4, .portfolio-box .portfolio-caption-mask h5, .portfolio-box .portfolio-caption-mask h6 {
        color: #fff;
        margin-bottom: 5px;
    }

    .portfolio-box .portfolio-caption-mask p {
        margin-bottom: 0px;
        color: #fff;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1px;
    }

</style>