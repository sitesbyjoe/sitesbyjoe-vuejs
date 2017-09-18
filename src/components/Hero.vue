<template>
  <section id="inner-intro" class="inner-intro bg-image overlay-dark40 dark-bg parallax parallax-background2" data-background-img="/static/assets/img/fj40-steering.jpg">
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