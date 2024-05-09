<template>
    <section class="articles_news center">
            <h2 class="articles_news_title">Articles & News</h2>
            <p class="articles_news_description">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>

            <div class="articles__items articles__items-main">
                <div v-for="(article, index) in articlesMain" :key="index" class="article_item">
                    <div class="articles__items-image">
                        <img :src="'../public/images/' + article.image" :alt="article.image">
                        <p class="blog__img-text">{{article.imgText}}</p>
                    </div>
                    <div class="articles__items_info">
                        <h2 class="articles__items-title">{{article.itemTitle}}</h2>
                        <div class="articles__items-text">
                            <p>{{article.itemData}}</p>
                            <button class="beige_button beige_button_small"><img src="../public/images/beige_button_arrow.svg" alt=""></button>
                        </div>
                    </div>

                </div>
            </div>

        </section>

</template>

<script>
export default {
  name: 'ArticlesNewsComp',

  data () {
    return {
      articlesMain: [{
        image: 'article1.svg',
        imgText: 'Kitchan Design',
        itemTitle: 'Let’s Get Solution For Building Construction Work',
        itemData: '26 December,2022'
      },
      {
        image: 'article2.svg',
        imgText: 'Living Design',
        itemTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
        itemData: '22 December,2022'
      },
      {
        image: 'article3.svg',
        imgText: 'Interior Design',
        itemTitle: 'Best For Any Office & Business Interior Solution',
        itemData: '25 December,2022'
      }

      ]
    }
  },

}
</script>

<style lang="scss" scoped>
@import "../scss/vars";

.articles_news {
    margin-top: 96px;
    margin-bottom: 96px;
}

.articles_news_title {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display';
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
}

.articles_news_description {
    color: rgb(77, 80, 83);
    font-family: 'Jost';
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: center;
    margin-top: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 811px;
    margin: auto;
}

.articles__items-main {
    margin-top: 52px;
}

.articles__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* Три столбца одинаковой ширины */
    grid-auto-rows: auto;
    /* Автоматическая высота строк */
    gap: 28px;
}

.article_item {
    padding: 21px;
    box-sizing: border-box;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.article_item:hover {
    background: rgb(244, 240, 236);
}

.beige_button_small {
    width: 52px;
    height: 52px;
}

.beige_button_small:hover {
    background-color: rgb(255, 255, 255);
    border: solid 1px rgb(244, 240, 236);
}

.article_item:hover .beige_button_small {
    background-color: rgb(255, 255, 255);
}

.articles__items-image {
    width: 340px;
    height: 295px;
    overflow: hidden;
    position: relative;
    border-top-left-radius: 62px;
    border-top-right-radius: 62px;
}

.articles__items-image img {
    position: relative;
}

.articles__items-image p {
    position: absolute;
    top: 228px;
    left: 20px;
    border-radius: 8px 8px 8px 0px;
    background: #fff;
    padding: 4px 10px 8px 11px;
    color: #4d5053;
    font-family: "Jost";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.articles__items-title {
    padding-top: 8px;
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display';
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
    max-width: 305px;
}

.articles__items_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 165px;
}

.articles__items-text {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.articles__items-text p {
    color: rgb(77, 80, 83);
    font-family: 'Jost';
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
    text-transform: capitalize;
}
</style>
