<template>
  <section id="inner-intro" class="inner-intro bg-image overlay-dark40 dark-bg parallax parallax-background2" v-bind:data-background-img="bgImage">
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
      console.log('bgImage;?', this.bgImage)
    },

    methods: {
      /*
      // ----------------------------------------------------------------
    // Backgrounds Image (Slider, Section, etc..)
    // ----------------------------------------------------------------
    var pageSection = $('.slide-bg-image, .bg-image');
    pageSection.each(function (indx) {

        if ($(this).attr("data-background-img")) {
            $(this).css("background-image", "url(" + $(this).data("background-img") + ")");
        }
    });

    // ----------------------------------------------------------------
    // Intro Height
    // ----------------------------------------------------------------
    function int_introHeight() {
        var windiwHeight = $(window).height();
        // Intro Height
        $('.js-fullscreen-height').css('height', windiwHeight);
    };
    */
    }

  }
</script>