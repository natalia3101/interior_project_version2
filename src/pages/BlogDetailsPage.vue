<template>
    <div>
      <HeaderComponent></HeaderComponent>
      <BannerBlogDetails></BannerBlogDetails>
      <BlogDetailsPage></BlogDetailsPage>
      <FooterComponent></FooterComponent>
    </div>
  </template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import BannerBlogDetails from '../components/PagesComponents/BlogDetailsPage/BannerBlogDetails.vue'
import BlogDetailsPage from '../components/PagesComponents/BlogDetailsPage/BlogDetailsPage.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'BlogDetailsPage',

  components: {
    HeaderComponent,
    BannerBlogDetails,
    BlogDetailsPage,
    FooterComponent
  }

}
</script>
