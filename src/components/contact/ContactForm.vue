<template>
  <div class="container">
    
    <form v-show="!success" v-on:submit.prevent="send">
      <div class="form-group" v-bind:class="{ 'has-danger': errors.has('name') }">
        <label>Name</label>
        <input name="name" v-model="name" v-validate data-vv-rules="required" class="form-control">
        <span v-show="errors.has('name')" class="form-control-feedback">{{ errors.first('name') }}</span>
      </div>

      <div class="form-group" v-bind:class="{ 'has-danger': errors.has('email') }">
        <label>Email</label>
        <input name="email" v-model="email" v-validate data-vv-rules="required|email" class="form-control">
        <span v-show="errors.has('email')" class="help text-danger">{{ errors.first('email') }}</span>
      </div>

      <div class="form-group" v-bind:class="{ 'has-danger': errors.has('comments') }">
        <label>Comments</label>
        <textarea name="comments" v-model="comments" v-validate data-vv-rules="required" class="form-control"></textarea>
        <span v-show="errors.has('comments')" class="help text-danger">{{ errors.first('comments') }}</span>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Send</button>
      </div>
    </form>

    <div v-show="progress" class="bg-warning">In progress...</div>

    <div v-show="success" class="bg-success">You succeeded. <button class="btn btn-primary" v-on:click="resetForm()">Send another inquiry?</button></div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        name: null,
        email: null,
        comments: null,
        success: false,
        error: false,
        progress: false
      }
    },

    methods: {

      send () {
        this.inProgress = true
        this.$validator.validateAll().then(function (result) {
          if (result) {
            let post = ''
            let url = 'https://sitesbyjoe.com/contact/api'
            let config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded' // axios needs this to avoid the whole OPTIONS thing
              }
            }
            let data = {
              'name': this.name,
              'email': this.email,
              'comments': this.comments
            }

            for (let key in data) {
              console.log('key', key)
              post += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&'
            }
            console.log(post)

            axios.post(url, post, config).then(function (resp) {
              console.log('RESPONSE', resp, this)
              if (resp.data.success) {
                this.showSuccess()
              }
            }.bind(this))
          }
          return false
        }.bind(this))
      },

      resetForm () {
        console.log('resetForm')
        this.name = null
        this.email = null
        this.comments = null
        this.success = false
        this.error = false
        this.progress = false
      },

      showSuccess () {
        console.log('showSuccess')
        this.progress = false
        this.error = false
        this.success = true
        console.log('before timeout', new Date())
        // setTimeout(this.hideSuccess(), 3000)
        setTimeout(() => {
          this.hideSuccess()
        }, 3000)
      },

      hideSuccess () {
        console.log('handleSuccess', new Date())
        this.resetForm()
      }

    }
  }
</script>

<style lang="scss">

</style>