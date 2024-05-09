<template>
    <div>
      <HeaderComponent></HeaderComponent>
      <TopGetStartedComp></TopGetStartedComp>
      <ProjectsNavComp></ProjectsNavComp>
      <StatisticsComp></StatisticsComp>
      <ArticlesNewsComp></ArticlesNewsComp>
      <FooterComponent></FooterComponent>
    </div>
  </template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import TopGetStartedComp from '../components/PagesComponents/MainPage/TopGetStartedComp.vue'
import ProjectsNavComp from '../components/PagesComponents/MainPage/ProjectsNavComp.vue'
import StatisticsComp from '../components/PagesComponents/MainPage/StatisticsComp.vue'
import ArticlesNewsComp from '../components/PagesComponents/MainPage/ArticlesNewsComp.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'MainPage',

  components: {
    HeaderComponent,
    TopGetStartedComp,
    ProjectsNavComp,
    StatisticsComp,
    ArticlesNewsComp,
    FooterComponent
  }
}
</script>
