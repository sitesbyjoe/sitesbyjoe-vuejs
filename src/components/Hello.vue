<template>
  <div class="homepage">
    
    <hero></hero>

    <article class="container">	
      <h2 class="darkgrey inset_light">
        Over the years I've built it all for the web. These days I focus on:
      </h2>
      
      <h3><a href="http://www.leasetool.com" target="_blank" title="Leasetool: Rental Management System"><img src="http://www.leasetool.com/assets/images/leasetool-logo.png" alt="Leasetool Logo" width="160"></a></h3>
      <p>A new rental management product designed for Real Estate agencies located at the shore who focus on weekly and summer rentals. <a href="http://www.leasetool.com" target="_blank" title="Leasetool: Rental Management System">Check out Leasetool</a></p>
      
      <h3>Responsive Web Design</h3>
      <p>One website, multiple screen sizes. From the first moment you could view a webpage on a mobile phone I was hooked on the possibilities of the mobile web. Today we have tons of advanced devices with screens ranging from 2 inches to over 60 inches in size viewing content on the web. I enjoy designing for all of them.</p>
      
      <h3>Web Programming and Development</h3>
      <p>Code is art. I enjoy designing interfaces that are simple to use, but just as much I enjoy writing code. I’m a skilled at fine languages like PHP and Javascript and can create solutions quickly and efficiently.</p>
      
      <h3>Consulting</h3>
      <p>Want to talk with someone who’s built it all? Whether you just want to talk shop or need someone to help you put together a winning strategy for a new website idea I can help.</p>
      
      <h3>CMS Development</h3>
      <p>I’ve built many content management systems for the web since first opening the studio. My experience can be put to work to help you create the perfect in-house platform to run your web business.</p>				
    </article>

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