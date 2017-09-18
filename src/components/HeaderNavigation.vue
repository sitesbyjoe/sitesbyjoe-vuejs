<template>
  <!-- Header -->
  <header id="header" class="header header-dark">
    <div class="header-inner">

      <!-- Logo -->
      <div class="logo">
        <router-link to="/"><b>Sites</b>byJoe</router-link>
      </div>
      <!-- End Logo -->

      <!-- Mobile Navbar Icon -->
      <div class="nav-mobile nav-bar-icon">
        <span></span>
      </div>
      <!-- End Mobile Navbar Icon -->

      <!-- Navbar Navigation -->
      <div class="nav-menu singlepage-nav">
        <ul class="nav-menu-inner">
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <!-- End Navbar Navigation -->

    </div>
  </header>
  <!-- End Header -->
</template>

<script>
  export default {
    name: 'headerNavigation',
    data: function () {
      return {
        msg: 'header test'
      }
    }
  }
</script>