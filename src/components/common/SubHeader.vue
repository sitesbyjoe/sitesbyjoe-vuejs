<template>
  <section class="subheader">
    <div class="container">
      <h1>{{heading}}</h1>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['heading']
  }
</script>

<style lang="scss" scoped>
  .subheader {
    background: #272931;
    color: #fff;
    padding: 2rem 0;

    h1 {
      color: #fff;
      text-align: center;

      span {
        color: #923f3f;
      }
    }
  }
</style>