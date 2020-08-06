<template>
    <div>
        <Hero />
       

        <!-- Blog Section -->
        <!-- <div class="w-full pt-12 lg:pt-40 px-6 m-auto lg:flex block mb-4"> 
         
                 <Blog />
                 <Blog />
                 <Blog />
                 <Blog />
                 <Blog />
       
        </div> -->
        
    </div>
 

</template>



<script>
import Hero from '../components/Hero/Hero.vue';
import Card from '../components/Card/card.vue';
import Blog from '../components/Blog/Blog.vue';
import ThemeToggler from '../components/ThemeToggler/ThemeToggler.vue'

export default {
  components: { 
    Hero,
    Card,
    Blog,
    ThemeToggler
  },
  // Watch for $route.query.page to call Component methods (asyncData, fetch, validate, layout, etc.)
  watchQuery: ['page'],
  // Key for <NuxtChild> (transitions)
  key: to => to.fullPath,
  // Called to know which transition to apply
  transition (to, from) {
    if (!from) { return 'slide-left' }
    return 'slide-right' 
  },
}
</script>

<style >
  .adtalk_banner{
    background: url('../assets/images/adtalk_banner.png') no-repeat;
    background-position: center;
    background-size: cover;
  }

   .cribsandspaces{
    background: url('../assets/images/cribsandspaces.png') no-repeat;
    background-position: center;
    background-size: cover;
  }

   .outlierz{
    background: url('../assets/images/outlierz.png') no-repeat;
    background-position: center;
    background-size: cover;
  }

</style>
