<template>
    <section class="statistics center">
            <div class="statistics_block">
                <div class="statistics_number">12</div>
                <div class="statistics_text">Years Of Experiance</div>
            </div>
            <div class="statistics_block">
                <div class="statistics_number">85</div>
                <div class="statistics_text">Success Project</div>
            </div>
            <div class="statistics_block">
                <div class="statistics_number">15</div>
                <div class="statistics_text">Active Project</div>
            </div>
            <div class="statistics_block">
                <div class="statistics_number">95</div>
                <div class="statistics_text">Happy CUstomers</div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'StatisticsComp',
}
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.statistics {
    margin-top: 96px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding-top: 150px;
    padding-bottom: 150px;
    background-color: rgb(244, 240, 236);
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    position: relative;
}

.statistics_block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
    position: relative;
}

.statistics_block:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -50px;
    /* Регулируйте здесь положение вертикальной черты */
    width: 1px;
    /* Ширина черты */
    background-color: rgb(205, 162, 116);
}

.statistics_number {
    color: rgb(205, 162, 116);
    font-family: 'DM Serif Display';
    font-size: 85px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
}

.statistics_text {
    color: rgb(77, 80, 83);
    font-family: 'Jost';
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
}
</style>
