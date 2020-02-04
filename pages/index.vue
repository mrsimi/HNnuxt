<template>
  <div class="container-centre">
     <news-component v-for="(news, index) in newscontent" :key="index"
      :url="news.url"
      :title ="news.title"
      :time="news.time"
      :by="news.by"
      :kids="news.kids"
      :score="news.score">
     </news-component>
          
  </div>
</template>



<script>
import NewsComponent from '~/components/NewsComponent.vue';

export default {
  components:{
    NewsComponent
  },

  data(){
    return{
      newsIds:[],
      newscontent:[]
    }
  },  

  async beforeMount(){
    const response = await this.$axios.$get("https://hacker-news.firebaseio.com/v0/topstories.json");
    this.newsIds = response;

    for(let i = 0; i < 10; i++){
      const content = await this.$axios.$get('https://hacker-news.firebaseio.com/v0/item/'+this.newsIds[i]+'.json');
      this.newscontent.push(content);
    }

    console.log(this.newscontent);
  },

}
</script>


<style>
.container-centre{
  width: 100%;
  margin: 0 auto;
}

@media screen and (min-width: 600px) {
    .container-centre{
    width: 70%;
    margin: 0 auto;
  }
}

@media screen and (min-width: 992px) {
    .container-centre{
    width: 50%;
    margin: 0 auto;
  }
}

</style>
