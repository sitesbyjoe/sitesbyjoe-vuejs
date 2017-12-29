<template>
  <!-- Header -->
  <header id="header" class="header header-dark header-prepare" v-bind:class="{ 'header-expanded' : isActive }">
    <div class="header-inner">

      <!-- Logo -->
      <div class="logo">
        <router-link to="/" v-on:click.native="handleLogoClick()"><b>Sites</b>byJoe</router-link>
      </div>
      <!-- End Logo -->

      <!-- Mobile Navbar Icon -->
      <div class="nav-mobile nav-bar-icon" v-bind:class="{ 'active' : isActive }" v-on:click="toggleNav()">
        <span></span>
      </div>
      <!-- End Mobile Navbar Icon -->

      <!-- Navbar Navigation -->
      <div class="nav-menu singlepage-nav" v-bind:class="{ 'active' : isActive }">
        <ul class="nav-menu-inner">
          <li><router-link to="/pages/about" v-on:click.native="handleClick()">About</router-link></li>
          <li><router-link to="/portfolio" v-on:click.native="handleClick()">Portfolio</router-link></li>
          <li><router-link to="/blog" v-on:click.native="handleClick()">Blog</router-link></li>
          <li><router-link to="/contact" v-on:click.native="handleClick()">Contact</router-link></li>
        </ul>
      </div>
      <!-- End Navbar Navigation -->

    </div>
  </header>
  <!-- End Header -->
</template>

<script>
  export default {
    data () {
      return {
        isActive: false,
        mobileNav: false,
        breakPoint: 1024
      }
    },
    created: function () {
      this.initNav()
      window.addEventListener('resize', () => {
        this.initNav()
      })
    },
    methods: {
      toggleNav: function () {
        this.isActive = !this.isActive
      },

      handleClick: function () {
        if (this.mobileNav && this.isActive) {
          this.toggleNav()
        }
        window.scrollTo(0, 0)
      },

      handleLogoClick: function () {
        if (this.isActive) {
          this.handleClick()
        }
      },

      initNav: function () {
        this.mobileNav = (window.innerWidth < this.breakPoint)
      }
    }
  }
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  text-align: center;
  top: 0px;
  z-index: 1000;
  color: #fff;
  width: 100%;
  height: 85px;
  transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
  @media all and (max-width: 1024px) {
    height: 58px;
  }

  .header-inner {
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
    @media all and (max-width: 1024px) {
      display: table;
      width: 100%;
    }

    .logo a {
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.25rem;
      font-weight: 300;
      transition: all 0.3s ease 0s;
      @media all and (max-width: 1024px) {
        margin-top: 15px;
        margin-bottom: 15px;
        width: 100px;
      }
    }
  }
}

.header-prepare {
  background-color: #923f3f;
  border: none;
}

.header-fixed {
  display: block;
  margin-top: 0 !important;
  position: fixed;
  height: 58px;

  .logo a {
    margin-top: 15px;
    margin-bottom: 15px;
    transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    -o-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    -moz-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    -webkit-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
    font-weight: 300;
  }

  .nav-menu ul.nav-menu-inner > li > a {
    padding-top: 24px;
    padding-bottom: 23px;
  }
}

.header-expanded {
  height: 100%;
  background: #272931;
}


/*
@media all and (min-width: 1025px) {

 
    .header.header-prepare .nav-menu ul.nav-menu-inner > li > a {
        color: rgba(34,34,34,0.60);
    }

        .header.header-prepare .nav-menu ul.nav-menu-inner > li:hover > a,
        .header.header-prepare .nav-menu ul.nav-menu-inner > li > a:hover {
            color: rgba(34,34,34,1);
        }

    .header.header-dark.header-prepare .nav-menu ul.nav-menu-inner > li > a {
        color: rgba(255,255,255,0.75);
    }

        .header.header-dark.header-prepare .nav-menu ul.nav-menu-inner > li:hover > a,
        .header.header-dark.header-prepare .nav-menu ul.nav-menu-inner > li > a:hover {
            color: rgba(255,255,255,1);
        }
}
*/
/*------------------------------------------------------------------*/
/* Logo Style */
/*------------------------------------------------------------------*/
.logo {
  float: left;
  text-align: left;
  display: inline-block;

  a {
    width: 100px;
    display: block;
    margin-top: 29px;
    margin-bottom: 28px;
    transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    position: relative;
    color: #fff;
    font-family: "Lato", sans-serif;

    img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    }
  }
}

/*------------------------------------------------------------------*/
/* Navigation Menu Style */
/*------------------------------------------------------------------*/
.nav-menu {
  position: static;
  float: right;
  display: block;
}

    .nav-menu.active {
        display: block;
    }

    .nav-menu ul.nav-menu-inner {
        margin: 0;
        padding: 0;
        list-style: none;
    }

        .nav-menu ul.nav-menu-inner li {
            display: inline-block;
            list-style: none;
            text-align: left;
        }

        .nav-menu ul.nav-menu-inner > li > a {
            color: rgba(255,255,255,0.60);
        }





.nav-menu ul.nav-menu-inner li a {
    font-family: inherit;
    display: block;
    font-size: 0.77rem;
    line-height: 1;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.6px;
    transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    -o-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    -moz-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    -webkit-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
}

.nav-menu ul.nav-menu-inner > li > a {
    padding: 37px 15px;
}

.header .nav-menu ul.nav-menu-inner > li.active a,
.header .nav-menu ul.nav-menu-inner > li a.active,
.header .nav-menu ul.nav-menu-inner > li:hover > a,
.header .nav-menu ul.nav-menu-inner > li > a:hover,
.header.header-dark .nav-menu ul.nav-menu-inner > li.active a,
.header.header-dark .nav-menu ul.nav-menu-inner > li a.active,
.header.header-dark .nav-menu ul.nav-menu-inner > li:hover > a,
.header.header-dark .nav-menu ul.nav-menu-inner > li > a:hover,
.header.header-dark.header-prepare .nav-menu ul.nav-menu-inner li a.current,
.header.header-dark.header-prepare .nav-menu ul.nav-menu-inner li.current a {
    color: #fff;
}

.header.header-light .nav-menu ul.nav-menu-inner > li:hover > a,
.header.header-light .nav-menu ul.nav-menu-inner > li > a:hover,
.header.header-prepare .nav-menu ul.nav-menu-inner li a.current,
.header.header-prepare .nav-menu ul.nav-menu-inner li.current a {
    color: #222;
}

/* Mobile bar icon */
.nav-mobile.nav-bar-icon {
    display: none;
}

.nav-bar-icon {
    display: inline-block;
    float: right;
    position: relative;
    height: 16px;
    width: 20px;
    margin-top: 34px;
    margin-bottom: 35px;
    margin-left: 15px;
    transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    -moz-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    -o-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    -webkit-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1) 0s;
    cursor: pointer;
}

.header-fixed .nav-bar-icon {
    margin-top: 21px;
    margin-bottom: 21px;
}

.nav-bar-icon a {
    color: #fff;
    display: block;
    font-size: 17px;
    padding: 19px 0;
}

    .nav-bar-icon.active a, .nav-bar-icon a.active,
    .nav-bar-icon:hover a, .nav-bar-icon a:hover {
        color: #17a697;
    }

.nav-bar-icon > span {
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 2px;
    margin-top: -1px;
    background-color: #222;
    -webkit-transition: -webkit-transform 0.3s, background 0.25s ease;
    -webkit-transition: background 0.25s ease, -webkit-transform 0.3s;
    transition: background 0.25s ease, -webkit-transform 0.3s;
    transition: transform 0.3s, background 0.25s ease;
    transition: transform 0.3s, background 0.25s ease, -webkit-transform 0.3s;
}

    .nav-bar-icon > span:before,
    .nav-bar-icon > span:after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #222;
        -webkit-transition: -webkit-transform 0.3s, background 0.25s ease;
        -webkit-transition: background 0.25s ease, -webkit-transform 0.3s;
        transition: background 0.25s ease, -webkit-transform 0.3s;
        transition: transform 0.3s, background 0.25s ease;
        transition: transform 0.3s, background 0.25s ease, -webkit-transform 0.3s;
    }

header .nav-bar-icon > span,
header .nav-bar-icon > span:before,
header .nav-bar-icon > span::after,
header.header-dark .nav-bar-icon > span,
header.header-dark .nav-bar-icon > span:before,
header.header-dark .nav-bar-icon > span::after,
header.header-dark.header-prepare .nav-bar-icon > span,
header.header-dark.header-prepare .nav-bar-icon > span:before,
header.header-dark.header-prepare .nav-bar-icon > span::after {
    background-color: #fff;
}

header.header-light .nav-bar-icon > span,
header.header-light .nav-bar-icon > span:before,
header.header-light .nav-bar-icon > span::after,
header.header-prepare .nav-bar-icon > span,
header.header-prepare .nav-bar-icon > span:before,
header.header-prepare .nav-bar-icon > span::after {
    background-color: #222;
}


.nav-bar-icon > span:before {
    -webkit-transform: translateY(-7px);
    transform: translateY(-7px);
    -o-transform: translateY(-7px);
    -ms-transform: translateY(-7px);
    -moz-transform: translateY(-7px);
}

.nav-bar-icon > span:after {
    -webkit-transform: translateY(7px);
    transform: translateY(7px);
    -o-transform: translateY(7px);
    -ms-transform: translateY(7px);
    -moz-transform: translateY(7px);
}

.nav-bar-icon.active {
    transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

    .nav-bar-icon.active > span:before {
        transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
    }

    .nav-bar-icon.active > span:after {
        transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
    }

/* Dropdown-menu */
.nav-menu > ul li {
    position: relative;
}

.sub-dropdown.dropdown {
    top: 100%;
    left: 0;
}

.sub-dropdown {
    position: absolute;
    left: 100%;
    top: 0;
    display: none;
    background: rgba(34,34,34,0.90);
    padding: 0;
    width: 200px;
}

    .sub-dropdown li {
        width: 100%;
    }

    .sub-dropdown > li > a {
        padding: 13px 15px;
        display: block;
        color: rgba(255, 255, 255, 0.75);
    }

    .sub-dropdown > li:hover > a {
        background: rgba(255,255,255,0.05);
        color: #fff;
    }

    .sub-dropdown i {
        float: right;
    }


@media all and (max-width: 1024px) {
    .nav-menu ul.nav-menu-inner li {
        display: block;
        width: 100%;
    }

    .nav-menu ul.nav-menu-inner {
      padding-top: 4rem;
    }

    .nav-menu {
        position: static;
        left: 0;
        top: 100%;
        float: none;
        display: none;
        width: 100%;
        background: transparent;
        overflow-y: auto;
        z-index: 998;
    }

    .nav-bar-icon, .nav-mobile.nav-bar-icon, .header-fixed .nav-bar-icon {
        display: inline-block;
        float: right;
        margin-top: 21px;
        margin-bottom: 21px;
        z-index: 999;
    }

    .nav-menu ul.nav-menu-inner li a, .header-fixed .nav-menu ul.nav-menu-inner li a {
        padding: 2rem 0;
        border-top: 1px solid #444;
        text-align: center;
    }


    /* Dropdown */
    .sub-dropdown.dropdown, .sub-dropdown {
        top: 100%;
        position: relative;
        left: 0;
        width: 100%;
    }

        .sub-dropdown a {
            padding-left: 30px !important;
        }

    .header .nav-menu ul.nav-menu-inner li a.current,
    .header .nav-menu ul.nav-menu-inner li.current a,
    .header.header-light .nav-menu ul.nav-menu-inner > li:hover > a,
    .header.header-light .nav-menu ul.nav-menu-inner > li > a:hover,
    .header.header-prepare .nav-menu ul.nav-menu-inner li a.current,
    .header.header-prepare .nav-menu ul.nav-menu-inner li.current a {
        color: #fff;
    }

    .header-light .nav-menu ul.nav-menu-inner > li > a {
        color: rgba(255,255,255,0.60);
    }
}


/*------------------------------------------------------------------*/
/* Overlay Menu */
/*------------------------------------------------------------------*/
.overlay-menu {
    background: rgba(0, 0, 0, 0.9) none repeat scroll 0 0;
    display: table;
    height: 100%;
    min-height: 100%;
    opacity: 0;
    position: fixed;
    visibility: hidden;
    width: 100%;
    z-index: 9999;
    transition: all 0.4s ease-in-out 0s;
    -o-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    -webkit-transition: all 0.4s ease-in-out 0s;
    top: 0px;
    left: 0px;
    overflow: auto;
    padding: 50px 0;
}

    .overlay-menu.active {
        opacity: 1;
        top: 0;
        visibility: visible;
    }

    .overlay-menu .overlay-menu-inner {
        display: table-cell;
        height: 100%;
        text-align: center;
        vertical-align: middle;
        width: 100%;
    }

        .overlay-menu .overlay-menu-inner nav {
            display: block;
        }

.overlay-menu-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 290px;
    margin: auto;
}

.overlay-menu .overlay-menu-nav {
    opacity: 0.2;
    transform: translateY(-15%) rotateX(35deg);
    -moz-transform: translateY(-15%) rotateX(35deg);
    -ms-transform: translateY(-15%) rotateX(35deg);
    -o-transform: translateY(-15%) rotateX(35deg);
    -webkit-transform: translateY(-15%) rotateX(35deg);
    transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
    -moz-transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
    -o-transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
    -webkit-transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;
}

.overlay-menu.active .overlay-menu-nav {
    opacity: 1;
    transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    -ms-transform: rotateX(0deg);
    -o-transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
}


.overlay-menu-nav li {
    display: block;
}

    .overlay-menu-nav li a {
        color: #fff;
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 400;
        padding-top: 5px;
        padding-bottom: 5px;
        letter-spacing: 2px;
        display: block;
    }

    .overlay-menu-nav li:hover a {
        color: #17a697;
    }

.overlay-menu-close {
    color: #fff;
    height: 16px;
    line-height: 40px;
    position: absolute;
    right: 30px;
    text-align: center;
    top: 30px;
    width: 16px;
    transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    z-index: 1;
}

    .overlay-menu-close > span {
        position: absolute;
        top: 50%;
        display: block;
        width: 20px;
        height: 2px;
        background-color: #fff;
        -webkit-transition: -webkit-transform 0.3s, background 0.25s ease;
        -webkit-transition: background 0.25s ease, -webkit-transform 0.3s;
        transition: background 0.25s ease, -webkit-transform 0.3s;
        transition: transform 0.3s, background 0.25s ease;
        transition: transform 0.3s, background 0.25s ease, -webkit-transform 0.3s;
    }

        .overlay-menu-close > span:before,
        .overlay-menu-close > span:after {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
            -webkit-transition: -webkit-transform 0.3s, background 0.25s ease;
            -webkit-transition: background 0.25s ease, -webkit-transform 0.3s;
            transition: background 0.25s ease, -webkit-transform 0.3s;
            transition: transform 0.3s, background 0.25s ease;
            transition: transform 0.3s, background 0.25s ease, -webkit-transform 0.3s;
            transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
        }


    .overlay-menu-close:hover > span,
    .overlay-menu-close:hover > span:before,
    .overlay-menu-close:hover > span:after {
        background-color: #17a697;
    }

@media all and (max-width: 960px) {
    .overlay-menu-active .overlay-menu {
        position: absolute;
    }

    .overlay-menu-active .page-wrapper {
        position: fixed;
    }
}
</style>