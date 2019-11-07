<template>
    <div>
        <Hero />
        <div class="w-full max-w-screen-xl pt-32  lg:pt-40 mx-auto px-6 sm:pr-20 sm:pl-20  lg:pr-32 lg:pl-32 block mb-4 "> 
          <div class="block lg:flex">
              <div class="block h-64 w-full lg:w-2/3">     
                <Card class="block bg-blue-700">
                    <div class="flex content-end flex-wrap">
                         <div class="bg-transparent  text-white font-Montserrat text-xs font-normal hover:text-white py-2 px-4 border border-blue-500  rounded-full m-5 bg-white-800 pr-6 pl-6"> UI Design</div>
                         
                          <div> -></div>
                    </div>
                </Card>
              </div>
              <div class="block h-64 w-full lg:w-1/3">     
                <Card class="flex bg-blue-700"/>
              </div>

          </div>
        </div>
        
    </div>
 

</template>

<script>
import Hero from '../components/Hero/Hero.vue';
import Card from '../components/Card/card.vue';

export default {
  components: { 
    Hero,
    Card 
  }
}
</script>

<style>


</style>
