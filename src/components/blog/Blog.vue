<template>
  <div class="blog">
  
    <sub-header heading="Blog"></sub-header>
  
    <!-- Blog Section -->
    <section class="section-padding">
      <div class="container">
        <div class="row">

          <!--Post Col-->
          <div class="col-md-4 col-sm-6 mb-45" v-for="post in posts">
            <!-- Post -->
            <div class="blog-post">
              <div class="post-media" style="background:rgba(0,0,0,0.1);">
                <img alt="blog" src="http://sitesbyjoe.com/assets/images/button-dead-site.png">
              </div>
              
              <div class="post-meta">
                <span>by <a>Joseph R. B. Taylor</a>,</span>
                <span class="post-date">{{post.date}}</span>
              </div>
                
              <div class="post-header">
                <h4 class="alt-title"><router-link :to="'blog/detail/' + post.dateArray.year + '/' + post.dateArray.month + '/' + post.dateArray.day + '/' + post.slug" title="">{{post.headline}}</router-link></h4>
              </div>
                
              <!--<div class="post-entry" v-html="post.story"></div>-->
                
              <!--<div class="post-tag">
                <span><a href="#">Branding</a></span>
                <span><a href="#">Design</a></span>
              </div>-->

            </div>
            <!-- End Post -->
          </div>

        </div>
      </div>
    </section>
    <!-- End Blog Section -->

  
    </div>
</template>
    
<script>
import axios from 'axios'
import SubHeader from '../common/SubHeader.vue'
// /posts/detail/2014/12/31/leasetool-building-a-vacation-rental-management-product

export default {
  data () {
    return {
      msg: 'Blog',
      posts: []
    }
  },

  created: function () {
    var api = 'https://sitesbyjoe.com/api/post_list'
    axios({
      method: 'get',
      url: api
    }).then((response) => {
      this.posts = []

      for (var i in response.data) {
        console.log('post', response.data[i])
        var post = response.data[i]
        post.date = this.mySqlDateFix(post.datestamp).toDateString()
        post.dateArray = this.getDateArray(post.datestamp)
        this.posts.push(post)
      }
    })
  },

  methods: {
    // Just a quick method to split the mysql date pieces for reuse
    getDateArray (postDate) {
      var t = postDate.split(/[- :]/)
      return {
        year: t[0],
        month: t[1],
        day: t[2]
      }
    },

    mySqlDateFix (mysqlDate) {
      // console.log('mysqlDate', mysqlDate, typeof mysqlDate)
      if (typeof mysqlDate === 'string') {
        var t = mysqlDate.split(/[- :]/)
        var d = new Date(Date.UTC(t[0], t[1] - 1, t[2]))
        return d
      } else {
        return mysqlDate
      }
    }
  },

  components: {
    SubHeader
  }
}
</script>
  
<style lang="scss">
.blog-post {
  display: inline-block;
  width: 100%;

  .post-media {
    margin-bottom: 1rem;
    overflow: hidden;
    position: relative;
    background: rgba(0,0,0,0.1);

    img {
      width: 100%;
      opacity: 0.1;
    }
  }

  .post-tag {
    span {
      display: inline-block;
      background: #f0f0f0;
      /*color:#222;*/
      padding: 5px 10px;
    }
  }

  .post-meta {
    font-size: 0.88rem;
    text-transform: uppercase;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.4);
    font-family: "Lato", sans-serif;

    span {
      margin-right: 3px;
    }
  }

  .post-header {
    .alt-title {
      margin-top: 0;
    }
  }

  blockquote {
    border-left: medium none;
    color: inherit;
    font-size: 17px;
    font-weight: 300;
    margin: 0;
    padding: 25px;
    margin-bottom: 15px;
  }
}


.post-entry {
    margin-bottom: 25px;
}




    .blog-post blockquote::before {
        content: "";
        font-family: FontAwesome;
        font-size: 12px;
        padding-right: 7px;
    }

    .blog-post blockquote::after {
        content: "";
        font-family: FontAwesome;
        font-size: 12px;
        padding-left: 7px;
    }

.blog-post ul {
    margin-bottom: 15px;
}

</style>