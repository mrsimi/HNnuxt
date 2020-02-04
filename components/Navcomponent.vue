<template>
  <div class="flex justify-center items-center bg-blue-800 py-3 text-white shadow">
    
            <div><nuxt-link to="/" class="mx-5 font-bold ">HN </nuxt-link></div>
            <div><nuxt-link to="/newest" prefetch class="mx-5">Newest</nuxt-link></div>
            <div><nuxt-link to="/ask" prefetch class="mx-5">Ask</nuxt-link></div>
            <div><nuxt-link to="/job" prefetch >Job</nuxt-link></div>
    
   
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>