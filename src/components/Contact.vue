<template>
  <div class="contact">

    <sub-header heading="Contact"></sub-header>

    <contact-form></contact-form>
  </div>
</template>
  
<script>
import SubHeader from './common/SubHeader.vue'
import ContactForm from './contact/ContactForm.vue'

export default {
  data () {
    return {
      heading: 'Contact'
    }
  },
  components: {
    SubHeader,
    ContactForm
  }
}
</script>