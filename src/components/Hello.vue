<template>
  <div class="homepage">
    
    <hero></hero>

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