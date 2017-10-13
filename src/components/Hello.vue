<template>
  <div class="homepage">
    
    <hero></hero>

    <section class="section-padding">
      <div class="container">
        <div class="rows text-center">
          <h2 class="mb-60">Over the years I've built it all for the web. These days I focus on:</h2>
        </div>  
        <div class="row">
          <div class="col-md-6 mb-10">
            <div class="content-box alt-left">
              <div class="alt-icon-left alt-icon-color">
                <i class="icon-layers"></i>
              </div>
              <h4 class="alt-title">Responsive Web Design</h4>
              <p>One website, multiple screen sizes. From the first moment you could view a webpage on a mobile phone I was hooked on the possibilities of the mobile web. Today we have tons of advanced devices with screens ranging from 2 inches to over 60 inches in size viewing content on the web. I enjoy designing for all of them.</p>
            </div>
          </div>
          
          <div class="col-md-6 mb-10">
            <div class="content-box alt-left">
              <div class="alt-icon-left alt-icon-color">
                <i class="icon-gears"></i>
              </div>
              <h4 class="alt-title">Web Programming &amp; Development</h4>
              <p>Code is art. I enjoy designing interfaces that are simple to use, but just as much I enjoy writing code. I’m a skilled at fine languages like PHP and Javascript and can create solutions quickly and efficiently.</p>
            </div>
          </div>
                
          <div class="col-md-6 mb-10">
            <div class="content-box alt-left">
              <div class="alt-icon-left alt-icon-color">
                <i class="icon-refresh"></i>
              </div>
              <h4 class="alt-title">Consulting</h4>
              <p>Want to talk with someone who’s built it all? Whether you just want to talk shop or need someone to help you put together a winning strategy for a new website idea I can help.</p>
            </div>
          </div>

          <div class="col-md-6 mb-10">
            <div class="content-box alt-left">
              <div class="alt-icon-left alt-icon-color">
                <i class="icon-mobile"></i>
              </div>
              <h4 class="alt-title">Content Management System Development</h4>
              <p>I’ve built many content management systems for the web since first opening the studio. My experience can be put to work to help you create the perfect in-house platform to run your web business.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <testimonials></testimonials>

  </div>
</template>

<script>
import Hero from './Hero.vue'
import Testimonials from './Testimonials.vue'

export default {
  name: 'hello',
  components: {
    Hero,
    Testimonials
  }
}
</script>

<style scoped>
  .homepage article.container {
    padding-top: 4rem;
  }

  .homepage h2 {
    text-align: center;
  }
</style>