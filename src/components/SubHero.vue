<template>
  <section id="inner-intro" class="inner-intro bg-image overlay-dark40 portfolio-overlay dark-bg parallax parallax-background2" v-bind:style="'background-image: url(https://sitesbyjoe.com/' + bgImage + '); background-size:cover;'">
    <div class="container">
      <div class="intro-content">
        <div class="intro-content-inner">
          <h1 class="wow fadeInDown" data-wow-duration="0.8s" style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInDown;">{{title}}</h1>
          <h5 class="alt-title intro-sub-title wow fadeInUp" data-wow-duration="0.8s" style="visibility: visible; animation-duration: 0.3s; animation-name: fadeInUp;" v-if="subTitle">{{subTitle}}</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['title', 'subTitle', 'bgImage']
  }
</script>