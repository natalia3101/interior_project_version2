<template>
        <section class="top_get_started center">
            <div class="banner_box">
                <div class="banner_content">
                    <h1 class="banner_content_heading">Let Your Home<br> Be Unique</h1>
                    <p class="banner_content_text">There are many variations of the passages of<br> lorem Ipsum fromavailable, majority.</p>
                    <button class="banner_content_button">Get Started <img class="button_arrow" src="../public/images/button_arrow.svg" alt=""></button></div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'TopGetStartedComp',
}
</script>

<style lang="scss" scoped>
.banner_img {
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.banner_box {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 758px;
    background-image: url("../public/images/Banner.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 62px;
}

.banner_content {
    position: absolute;
}

.banner_content_heading {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display';
    font-size: 65px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0%;
    text-align: left;
    padding-left: 52px;
    padding-top: 215px;
}

.banner_content_text {
    padding-left: 52px;
    padding-top: 18px;
    color: rgb(77, 80, 83);
    font-family: 'Jost';
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
}

.banner_content_button {
    width: 220.14px;
    height: 75px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 26px 49px 26px 48px;
    border-radius: 18px;
    -webkit-box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: rgb(41, 47, 54);
    margin-left: 52px;
    margin-top: 21px;
    color: rgb(255, 255, 255);
    font-family: 'Jost';
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: center;
}

.button_arrow {
    width: 15.14px;
    height: 13.18px;
}

</style>
