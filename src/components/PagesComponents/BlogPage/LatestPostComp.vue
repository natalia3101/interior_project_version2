<template>

    <section class="latest_post center">
            <h1 class="latest_post_title">Latest Post</h1>
            <div class="latest_post_block">
                <img src="../../../assets/images/blogPage/latestPost.svg" alt="latest post">
                <div class="latest_post_content">
                    <h3 class="latest_post_subtitle">Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p class="latest_post_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. <br><br>Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                    <div class="latest_post_bottomInfo">
                        <p class="latest_post_date">26 December,2022</p>
                        <button class="beige_button beige_button_small"><img src="../../../assets/images/beige_button_arrow.svg" alt=""></button>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'LatestPostComp',

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

<style lang="scss" scoped>
@import "../scss/vars";
.latest_post {
    margin-top: 200px;
}

.latest_post_title {
    color: $titles-color;
    font-family: $title-font-style;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
}

.latest_post_block {
    margin-top: 27px;
    box-sizing: border-box;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    display: flex;
    gap: 62px;
    padding: 22px;
    align-items: center;
}

.latest_post_content {
    max-width: 469px;
}

.latest_post_subtitle {
    color: $titles-color;
    font-family: $title-font-style;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
}

.latest_post_text {
    margin-top: 22px;
    color: $text-color;
    font-family: $text-font-style;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
}

.latest_post_bottomInfo {
    margin-top: 41px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.latest_post_date {
    color: $text-color;
    font-family: $text-font-style;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
    text-transform: capitalize;
}

.beige_button img {
    vertical-align: middle;
}
</style>
