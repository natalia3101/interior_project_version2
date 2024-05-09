<template>
  <div class="banner_projectPage center">
            <div class="banner_info_prjectPage">
                <h1 class="banner_title_projectPage">Our Project</h1>
                <h3 class="banner_subtitle_projectPage">Home / Project</h3>
            </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scss/vars";
.banner_projectPage {
    background-image: url('../project/images/projectPage/Banner.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.banner_info_prjectPage {
    position: absolute;
    border-radius: 37px 37px 0px 0px;
    background: rgb(255, 255, 255);
    padding: 41px 125px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.banner_title_projectPage {
    color: #292F36;
    font-family: 'DM Serif Display';
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: left;
}

.banner_subtitle_projectPage {
    color: #4D5053;
    font-family: 'Jost';
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
}

</style>