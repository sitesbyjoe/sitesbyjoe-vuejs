<template>
  <div class="blog">
    <div v-for="post in posts">

    <sub-header :heading="post.headline"></sub-header>

    <section class="section-padding">
      <!-- Post Single -->
      <div class="container">
        <div class="row">
          <!--Post Col-->
          <div class="col-md-8 offset-md-2">
            <!-- Post -->
              <div class="blog-post">

                <div v-html="post.story"></div>

                <div class="author">
                  <h3>About Joseph R. B. Taylor</h3>
                  <p>
                    <a href="https://plus.google.com/116958214073092235453" rel="author"><img src="http://mediacdn.disqus.com/uploads/users/664/7014/avatar92.jpg?1342110106" style="border-radius:100px;float:left;margin-right:20px;"></a>
                    <a href="https://plus.google.com/116958214073092235453" rel="author">Joseph R. B. Taylor</a> is a designer/developer who makes stuff for screens of all shapes and sizes.
                  </p>
                </div>

                <div class="comments">
                  <vue-disqus disqus-developer="1" :shortname="disqus.shortname" :identifier="disqus.identifier" :url="disqus.url"></vue-disqus>
                </div>


                <!--<div class="post-meta">
                  <span>by <a>John Doe</a>,</span>
                  <span class="post-date">06 Jan 2016</span>
                </div>
                        
                <div class="post-header">
                  <h2 class="alt-title">We denounce with righteous the indignation and dislike rerum facilis est et expedita distinctio.</h2>
                </div>
                        
                <div class="post-media">
                  <img alt="blog" src="img/blog/01.jpg">
                </div>

                <div class="post-entry">
                            <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                            <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. <b><a target="_blank" href="http://nileforest.com">nileforest</a></b> Et harum quidem rerum facilis est et expedita distinctio.</p>
                            <blockquote>
                                We're not leaving here without Buster, man. Leave no crash-test dummy behind nihil impedit quo minus id quod maxime placeat facere!
                            </blockquote>
                            <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                            <ul>
                                <li>Excepturi sint occaecati cupiditate</li>
                                <li>Molestias excepturi sint</li>
                                <li>Similique sunt in culpa qui officia</li>
                                <li>Deserunt mollitia animi</li>
                            </ul>
                            <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                </div>
                        
                <div class="post-tag">
                  <span><a href="#">Branding</a></span>
                  <span><a href="#">Design</a></span>
                  <span><a href="#">Photography</a></span>
                </div>

                <hr>
                        
                <div class="post-share">
                  <span>Share this Post:</span>
                  <div class="post-share-social">
                    <a target="_blank" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
                    <a target="_blank" href="https://www.twitter.com/"><i class="fa fa-twitter"></i></a>
                    <a target="_blank" href="https://www.dribbble.com/"><i class="fa fa-dribbble"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a>
                    <a target="_blank" href="https://plus.google.com/"><i class="fa fa-google-plus"></i></a>
                  </div>
                </div>

                <hr>

                <div class="post-author-panel">
                  <div class="post-author-hadding">
                    <h4>Posted by <span><a href="#">John Doe</a></span></h4>
                  </div>
                  <div class="post-author-body">
                      <div class="post-author-image">
                          <img src="img/user-av.jpg" alt="">
                      </div>
                      Eligendi et nobis neque minus mollitia sit repudiandae ad repellendus recusandae alias fugit accusantium laboriosam nisi reiciendis deleniti tenetur molestiae maxime id quaerat consequatur fugiat aliquam laborum nam aliquid. Consectetur, perferendis?
                  </div>
                </div>-->

                      

                    </div>
                    <!-- End Post -->

                </div>


            </div>
        </div>
        <!-- End Post Single-->


    </section>

    </div>

  </div>
</template>
    
<script>
import axios from 'axios'
import VueDisqus from 'vue-disqus/VueDisqus.vue'
import SubHeader from '../common/SubHeader.vue'

export default {
  data () {
    return {
      msg: 'Blog',
      posts: [],
      disqus: {
        shortname: '2017-sitesbyjoe-com',
        identifier: '',
        url: ''
      }
    }
  },

  created: function () {
    var api = 'https://sitesbyjoe.com/api/post_detail/' + this.$route.params.year + '/' + this.$route.params.month + '/' + this.$route.params.day + '/' + this.$route.params.slug
    axios({
      method: 'get',
      url: api
    }).then((response) => {
      this.posts = response.data
      if (this.posts.length > 0) {
        this.disqus.identifier = 'sitesbyjoe_post_id_' + this.posts[0].id
        this.disqus.url = 'http://2017.sitesbyjoe.com/blog/detail/' + this.$route.params.year + '/' + this.$route.params.month + '/' + this.$route.params.day + '/' + this.$route.params.slug
      }
    })
  },

  components: {
    VueDisqus,
    SubHeader
  }
}
</script>

<style lang="scss">

#blog-single .post-header {
    margin-bottom: 25px;
}

.post-author-image {
    float: left;
    height: 84px;
    margin-right: 15px;
    width: 84px;
}

    .post-author-image img {
        width: 100%;
    }

/*.post-author-panel {
}*/

.post-author-hadding {
    padding: 8px 20px;
    display: block;
    background: #eee;
}

.post-author-hadding a {
    color: #17a697;
}

.post-author-body {
    padding: 20px;
    border: 1px solid #eee;
    display: table;
}

.post-author-body p {
    margin-bottom: 0px;
}

.post-author-hadding h1,
.post-author-hadding h2,
.post-author-hadding h3,
.post-author-hadding h4,
.post-author-hadding h5,
.post-author-hadding h6 {
    margin-bottom: 0;
}

#blog-single .blog-post hr {
    margin-top: 30px !important;
    margin-bottom: 30px !important;
}

.blog-post .post-share {
    display: block;
    font-size: 16px;
    display: block;
}

    .blog-post .post-share span {
        text-align: right;
        font-weight: 600;
        display: inline-block;
        color: #222;
    }

.post-share .post-share-social {
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: right;
    float: right;
    display: inline-block;
}

    .post-share .post-share-social a {
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 18px;
    }

</style>