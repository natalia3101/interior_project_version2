<template>
            <section class="projects_nav center">
            <h2 class="projects_title">Follow Our Projects</h2>

            <div class="projects_text_box">
                <p class="projects_text">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
            </div>
            <div class="projects_section">

                <div class="project_box">
                    <div class="image_box_1">
                        <img class="project_img_1" src=".../public/images/project1.svg" alt="project1">
                    </div>
                    <div class="project_description">
                        <div class="project_info">
                            <h3 class="project_subtitle">Modern Kitchan</h3>
                            <p class="project_category">Decor / Artchitecture</p>
                        </div>
                        <button class="beige_button"><img src="../public/images/beige_button_arrow.svg" alt=""></button>
                    </div>
                </div>

                <div class="project_box">
                    <div class="image_box_2">
                        <img class="project_img_2" src="../public/images/project2.svg" alt="project2">
                    </div>
                    <div class="project_description">
                        <div class="project_info">
                            <h3 class="project_subtitle">Modern Kitchan</h3>
                            <p class="project_category">Decor / Artchitecture</p>
                        </div>
                        <button class="beige_button"><img src=".../public/images/beige_button_arrow.svg" alt=""></button>
                    </div>
                </div>

                <div class="project_box">
                    <div class="image_box_3">
                        <img class="project_img_3" src="../public/images/project3.svg" alt="project3">
                    </div>
                    <div class="project_description">
                        <div class="project_info">
                            <h3 class="project_subtitle">Modern Kitchan</h3>
                            <p class="project_category">Decor / Artchitecture</p>
                        </div>
                        <button class="beige_button"><img src="../public/images/beige_button_arrow.svg" alt=""></button>
                    </div>
                </div>

                <div class="project_box">
                    <div class="image_box_4">
                        <img class="project_img_4" src="../public/images/project4.png" alt="project4">
                    </div>
                    <div class="project_description">
                        <div class="project_info">
                            <h3 class="project_subtitle">Modern Kitchan</h3>
                            <p class="project_category">Decor / Artchitecture</p>
                        </div>
                        <button class="beige_button"><img src="../public/images/beige_button_arrow.svg" alt=""></button>
                    </div>
                </div>

            </div>

        </section>
</template>

<script>
export default {
  name: 'ProjectsNavComp',
}
</script>

<style lang="scss" scoped>
@import "../scss/vars";
.projects_nav {
    margin-top: 100px;
}

.projects_title {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display';
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: center;
}

.projects_text_box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.projects_text {
    margin-top: 8px;
    color: rgb(77, 80, 83);
    font-family: 'Jost';
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    max-width: 737px;
    text-align: center;
}

.projects_section {
    margin-top: 100px;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 548px 104px 548px;
    grid-template-columns: repeat(2, 548px);
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-column-gap: 104px;
    -moz-column-gap: 104px;
    column-gap: 104px;
    row-gap: 56px;
}

.image_box_1 {
    width: 548px;
    height: 548px;
    overflow: hidden;
    border-top-right-radius: 62px;
}

.project_img_1 {
    position: relative;
    top: -251px;
}

.image_box_2 {
    width: 548px;
    height: 548px;
    overflow: hidden;
    border-top-left-radius: 62px;
}

.project_img_2 {
    position: relative;
    top: -410px;
    right: 55px;
}

.image_box_3 {
    width: 548px;
    height: 548px;
    overflow: hidden;
    border-bottom-right-radius: 62px;
}

.project_img_3 {
    position: relative;
    top: -160px;
    right: 82px;
}

.image_box_4 {
    width: 548px;
    height: 548px;
    overflow: hidden;
    border-bottom-left-radius: 62px;
}

.project_img_4 {
    position: relative;
    top: -251px;
    right: 144px;
}

.project_description {
    margin-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.beige_button {
    background: rgb(244, 240, 236);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: transparent;
}

.project_subtitle {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display';
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
}

.project_category {
    padding-top: 4px;
    color: rgb(77, 80, 83);
    font-family: 'Jost';
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
}
</style>
