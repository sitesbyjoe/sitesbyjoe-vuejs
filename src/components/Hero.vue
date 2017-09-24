<template>
  <section id="inner-intro" class="inner-intro bg-image overlay-dark40 dark-bg parallax parallax-background2" v-bind:style="'background-image: url(http://2017.sitesbyjoe.com/static/assets/img/fj40-steering.jpg); background-size:cover;'">
    <div class="container">
      <div class="intro-content">
        <div class="intro-content-inner">
          <h1 class="wow fadeInDown" data-wow-duration="0.8s" style="visibility: visible; animation-duration: 0.8s; animation-name: fadeInDown;">{{title}}</h1>
          <h5 class="alt-title intro-sub-title wow fadeInUp" data-wow-duration="1.5s" style="visibility: visible; animation-duration: 1.5s; animation-name: fadeInUp;">{{subTitle}}</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'hero',
    data: function () {
      return {
        title: 'Joseph R. B. Taylor',
        subTitle: 'Designer/Developer based in Portland, Oregon'
      }
    }
  }
</script>

<style scoped>
  /*==========================================================================================================*/
/* INTRO     ||---------------------------- */
/*==========================================================================================================*/

/*------------------------------------------------------------------*/
/* Intro */
/*------------------------------------------------------------------*/

#intro {
    position: relative;
    overflow: hidden;
}

.intro-media-wraper {
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.intro-bg-section {
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
}

.intro-caption-waper {
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
}

.intro-caption-top {
    z-index: 2;
}

.intro-content {
    display: table;
    height: 100%;
    text-align: center;
    width: 100%;
}

.intro-content-inner {
    display: table-cell;
    height: 100%;
    vertical-align: middle;
}


.intro-img-circle {
    margin-left: auto;
    margin-right: auto;
    width: 120px;
    height: 120px;
    border: 5px solid rgba(0,0,0, 0.2);
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    margin-bottom: 30px;
}

    .intro-img-circle img {
        outline: none;
        border: none;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
    }

.intro-play-icon {
    text-align: center;
}

.intro-sub-title {
    letter-spacing: 1.5px;
}

.intro-title {
    font-size: 70px;
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: 400;
    line-height: 1.1;
    /*letter-spacing: -2px;*/
}

.intro-title-sm {
    font-size: 44px !important;
    margin-top: 30px;
    font-weight: 400;
    margin-bottom: 0;
}

.error-intro-title {
    font-size: 100px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
    line-height: 1.1;
}

.inner-intro {
    position: relative;
    padding: 300px 0;
}

.inner-intro.portfolio-overlay {
  padding: 80px 0;
}

    .inner-intro h1 {
        font-size: 54px;
        margin-top: 30px;
        margin-bottom: 0;
        line-height: 1;
        font-weight: 400;
    }

    .inner-intro h5 {
      margin-top: 0.25rem;
      font-weight: 300;
    }

@media (max-width: 1024px) {
    .intro-title {
        letter-spacing: 0;
        font-size: 46px;
    }
}

@media (max-width: 767px) {
    .intro-title {
        letter-spacing: 0;
        font-size: 30px;
    }
}

/*------------------------------------------------------------------*/
/* Slider */
/*------------------------------------------------------------------*/

.sc-logo {
    /*margin-top: 0px;
    margin-bottom:0;*/
    text-align: center;
}

.sc-title {
    font-weight: 800;
    text-align: center;
    /*margin-top: 0px;
    margin-bottom:0;*/
}

.sc-paragraph-lead {
    font-family: Georgia;
    font-style: italic;
    font-size: 20px;
    text-align: center;
    /*margin-top: 0px;
    margin-bottom:0;*/
}

.sc-button {
}




</style>