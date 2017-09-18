<template>
  <section id="testimonials" class="section-padding bg-image pos-section">
    <div class="container">
      <div style="text-align: center;">
        <div class="page-icon-sm dark"><i class="icon-quote"></i></div>
        <h2>Recommendations</h2>
      </div>
      <div class="owl-carousel testimonial-carousel nf-carousel-theme">
        <div class="item" v-for="item in testimonials">
          <div class="testimonial text-center max-width-700">
            <p class="lead-lg">{{item.content}}</p>
            <h6 class="quote-author alt-title">{{item.from}} <span class="text-regular">( {{item.role}} )</span></h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data: function () {
      return {
        testimonials: [{
          content: 'There is NO ONE better, more able, with more talent than Joe. His work speaks VOLUMES for himself. Words are cheap, actions speak volumes. Joe is Honest, Hardworking, incredibly and uniquely talented, and has an amazing creative mind.',
          from: 'Mark Marroletti',
          role: 'Broker / Sales Associate at Long &amp; Foster Real Estate'
        }, {
          content: 'I\'ve worked with Joe on a number of projects, and he\'s always done a great job listening to what I want and delivering a great-looking, functional product. I would recommend him to anyone, and have!',
          from: 'Karl Haas',
          role: 'Assistant Professor at Berklee College of Music'
        }, {
          content: 'Joseph Taylor is an absolute pleasure to work with. He brought the website I imagined to life. It\'s his eye for the little details that really made our experience so good.',
          from: 'John Milone',
          role: 'President of North Star Traffic Service, Inc.'
        }, {
          content: 'I constantly get compliments on the website that Joe created for my Fine Art Conservation business. I consider what he does to be a true Art.',
          from: 'Jason Crafts',
          role: 'Owner/Proprietor at The Gilt Complex'
        }, {
          content: 'Joe is your archetypal self-learned technologist: excited to pick up new skills, strongly self-motivated and pragmatic, with no shortage of talent.',
          from: 'Mike Edmister',
          role: 'Software Engineer at Valore, Inc.'
        }]
      }
    }
  }
</script>