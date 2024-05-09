<template>
    <section class="banner_blogDetails center"></section>
</template>

<script>
export default {
  name: 'BannerBlogDetails',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style scoped lang="scss">
@import "../scss/vars";
.banner_blogDetails {
    background-image: url('../../../assets/images/blogDetailsPage/Banner.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 351px;
}
</style>
