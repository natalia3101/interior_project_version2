<template>
    <section class="articles center">
            <h1 class="articles__title">Articles & News</h1>

            <div class="articles__items">
                <div v-for="(article, index) in articles" :key="index" class="article_item">
                    <div class="articles__items-image">
                        <img :src="'../../../assets/images/blogPage/' + article.image" :alt="article.image">
                        <p class="blog__img-text">{{article.imgText}}</p>
                    </div>
                    <div class="articles__items_info">
                        <h2 class="articles__items-title">{{article.itemTitle}}</h2>
                        <div class="articles__items-text">
                            <p>{{article.itemData}}</p>
                            <button class="beige_button beige_button_small"><img src="../../../assets/images/beige_button_arrow.svg" alt=""></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page_count">

                <div class="count__page-wrap">
                    <a href="#" class="count__page-number">
                        <p class="count__page-number-text">01</p>
                    </a>
                    <a href="#" class="count__page-number">
                        <p class="count__page-number-text">02</p>
                    </a>
                    <a href="#" class="count__page-number">
                        <p class="count__page-number-text">03</p>
                    </a>
                    <a href="#">
                        <svg class="count__page-svg" xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                             <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
                             <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                    </a>
                </div>

            </div>
        </section>

</template>

<script>
export default {
  name: 'ArticlesBlogComp',

  data () {
    return {
      articles: [{
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
      },
      {
        image: 'article4.svg',
        imgText: 'Kitchan Design',
        itemTitle: 'Let’s Get Solution For Building Construction Work',
        itemData: '26 December,2022'
      },
      {
        image: 'article5.svg',
        imgText: 'Living Design',
        itemTitle: 'Low Cost Latest Invented Interior Designing Ideas.',
        itemData: '22 December,2022'
      },
      {
        image: 'article6.svg',
        imgText: 'Interior Design',
        itemTitle: 'Best For Any Office & Business Interior Solution',
        itemData: '25 December,2022'
      }
      ]

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
.articles {
    margin-top: 150px;
    &__title {
        color: $title-font-style;
        font-family: $title-font-style;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
    }
}

.articles__items {
    margin-top: 30px;
}

.page_count {
    margin-top: 51px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
}

.count__page-wrap {
    display: flex;
    gap: 20px;
}

.count__page-number {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px #cda274 solid;
    width: 52px;
    height: 52px;
    border-radius: 52px;
}

.count__page-number-text {
    color: #292f36;
    font-family: "Jost";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
}

.count__page-number:hover {
    background: #f4f0ec;
    border: none;
    width: 54px;
    height: 54px;
}

.count__page-svg:hover {
    fill: #f4f0ec;
}

.count__page-svg:hover circle {
    stroke: none;
}
</style>
