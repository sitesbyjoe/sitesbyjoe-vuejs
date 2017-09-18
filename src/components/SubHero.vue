<template>
  <section id="inner-intro" class="inner-intro bg-image portfolio-overlay dark-bg parallax parallax-background2" v-bind:data-background-img="bgImage" v-bind:style="styleObject">
    <div class="container">
      <div class="intro-content">
        <div class="intro-content-inner">
          <h1 class="wow fadeInDown" data-wow-duration="0.8s" style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInDown;">{{title}}</h1>
          <h5 class="alt-title intro-sub-title wow fadeInUp" data-wow-duration="0.8s" style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInUp;">{{subTitle}}</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['title', 'subTitle', 'bgImage'],

    created: function () {
      console.log('bgImage?', this.bgImage)
      this.setBgImage()
    },

    data () {
      return {
        styleObject: {}
      }
    },

    methods: {
      setBgImage: function () {
        console.log('setBgImage', this.bgImage)
        this.styleObject = {
          'background-image': 'url(' + this.bgImage + ')',
          'border': '1px solid lime'
        }
      }
    }

  }
</script>