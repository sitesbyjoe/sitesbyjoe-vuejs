<template>
  <footer id="footer" class="footer">
    <div class="container text-center">
      <ul class="social mb-60 wow fadeInUp" data-wow-duration="1.5s" style="visibility: visible; animation-duration: 1.5s; animation-name: fadeInUp;">
        <li><a target="_blank" href="https://github.com/sitesbyjoe"><i class="fa fa-github icon-2x"></i></a></li>
        <li><a target="_blank" href="https://www.linkedin.com/sitesbyjoe"><i class="fa fa-linkedin icon-2x"></i></a></li>
        <li><a target="_blank" href="https://www.twitter.com/sitesbyjoe"><i class="fa fa-twitter icon-2x"></i></a></li>
        <li><a target="_blank" href="http://instagram.com/sitesbyjoe"><i class="fa fa-camera-retro icon-2x"></i></a></li>
      </ul>
      <p class="copyright">&copy;2017 Sites by Joe, LLC. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footerComponent'
  }
</script>

<style type="scss" lang="scss" rel="stylesheet/scss" scoped>
  footer {
    background: rgba(59, 25, 25, 0.05);
    padding-top: 120px;
    padding-bottom: 120px;

    .social {
      border: 3px solid lime;
      list-style: outside none none;
      padding: 0;
    }
  }

  .footer .social li {
    display: inline-block;
    list-style: outside none none;
    margin: 0 8px;
  }

  .footer .social li a {
    background: rgba(0,0,0,0.2);
    color: rgba(255,255,255,0.6);
    border: none;
    display: block;
    font-size: 24px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    width: 60px;
    transition: all 0.3s ease;
    border-radius: 99px;
  }

  .footer .social li a:hover {
    background: rgba(0,0,0,0.5);
    color: rgba(255,255,255,0.8);
  }
</style>