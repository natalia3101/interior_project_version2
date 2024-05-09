<template>
    <div>
      <HeaderComponent></HeaderComponent>
      <BannerBlogComp></BannerBlogComp>
      <LatestPostComp></LatestPostComp>
      <ArticlesBlogComp></ArticlesBlogComp>
      <FooterComponent></FooterComponent>
    </div>
  </template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import BannerBlogComp from '../components/PagesComponents/BlogPage/BannerBlogComp.vue'
import LatestPostComp from '../components/PagesComponents/BlogPage/LatestPostComp.vue'
import ArticlesBlogComp from '../components/PagesComponents/BlogPage/ArticlesBlogComp.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'BlogPage',

  components: {
    HeaderComponent,
    BannerBlogComp,
    LatestPostComp,
    ArticlesBlogComp,
    FooterComponent
  }

}

</script>
