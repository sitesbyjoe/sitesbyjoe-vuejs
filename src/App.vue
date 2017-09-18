<template>
  <div id="app">

    <!-- Site preloader -->
    <section id="preloader">
        <div class="site-spinner"></div>
    </section>
    <!-- End Site preloader -->

    <div class="page-wrapper">
      
      <header-navigation></header-navigation>

      <main>
        <router-view></router-view>
      </main>

      <footer-component></footer-component>

    </div>

  </div>
</template>

<script>
import HeaderNavigation from './components/HeaderNavigation.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'app',
  components: {
    HeaderNavigation,
    FooterComponent
  }
}
</script>