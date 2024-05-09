<template>
            <section class="banner center">
            <div class="banner_info">
                <h1 class="banner_title">Articles & News</h1>
                <h3 class="banner_subtitle">Home / Blog</h3>
            </div>
        </section>
</template>

<script>
export default {
  name: 'BannerBlogComp'
}
</script>

<style scoped lang="scss">
@import "../scss/vars";
.banner {
    background-image: url('../../../assets/images/blogPage/banner.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.banner_info {
    position: absolute;
    border-radius: 37px 37px 0px 0px;
    background: rgb(255, 255, 255);
    padding: 41px 78px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.banner_title {
    color: $titles-color;
    font-family: $title-font-style;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: left;
}

.banner_subtitle {
    color: $text-color;
    font-family: $text-font-style;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
}
</style>
