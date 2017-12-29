<template>
  <div class="page-list">
    <div v-for="page in pages">
      <h1>{{page.title}}</h1>
      <p>{{page.description}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import SubHeader from '../common/SubHeader'

  export default {

    data () {
      return {
        test: 'test',
        pages: []
      }
    },

    created: function () {
      var api = 'http://sitesbyjoe.com/api/page_list'
      axios({
        method: 'get',
        url: api
      }).then((response) => {
        this.pages = response.data
        console.log('get api data', this.pages)
      })
    },

    components: {
      SubHeader
    }
  }
</script>