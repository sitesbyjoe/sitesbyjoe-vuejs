<template>
  <div class="page">
    <div v-for="page in pages">
      
      <sub-header :heading="page.title"></sub-header>

      <section class="section-padding">
        
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div v-html="page.content"></div>
            </div>
          </div>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SubHeader from '../common/SubHeader.vue'

export default {

  data () {
    return {
      pages: [],
      test: 'test'
    }
  },

  created: function () {
    var api = 'https://sitesbyjoe.com/api/page_detail/' + this.$route.params.slug
    axios({
      method: 'get',
      url: api
    }).then((response) => {
      this.pages = response.data
    })
  },

  components: {
    SubHeader
  }
}
</script>
