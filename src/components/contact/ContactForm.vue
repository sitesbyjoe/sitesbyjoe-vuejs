<template>
  <form class="container">
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
      <textarea name="comments" v-validate data-vv-rules="required" class="form-control"></textarea>
      <span v-show="errors.has('comments')" class="help text-danger">{{ errors.first('comments') }}</span>
    </div>

    <div class="form-group">
      <button class="btn btn-primary" v-on:click="send()">Send</button>
    </div>

  </form>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        email: null,
        comments: ''
      }
    },

    methods: {
      send: function () {
        console.log(this.$validator.errorBag)
        if (this.$validator.errorBag.errors.length > 0) {
          console.log(this.$validator.errorBag.errors[0].msg)
        }
        // console.log('send form stuff', this.errors)
      }
    }
  }
</script>

<style lang="scss">

</style>