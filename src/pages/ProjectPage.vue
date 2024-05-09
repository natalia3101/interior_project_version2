<template>
    <div>
      <HeaderComponent></HeaderComponent>
      <BannerComponent></BannerComponent>
      <CategoriesComponent></CategoriesComponent>
      <FooterComponent></FooterComponent>
    </div>
  </template>
  
  <script>
import HeaderComponent from '../components/HeaderComponent.vue'
import BannerComponent from '../components/PagesComponents/ProjectPage/BannerComponent.vue'
import CategoriesComponent from '../components/PagesComponents/ProjectPage/CategoriesComponent.vue'

import FooterComponent from '../components/FooterComponent.vue'
  
  export default {
    name: 'ProjectPage',

    components: {
      HeaderComponent,
      BannerComponent,
      CategoriesComponent,
      FooterComponent
    }
  }
  </script>
  
  <style lang="scss" scoped>
  </style>