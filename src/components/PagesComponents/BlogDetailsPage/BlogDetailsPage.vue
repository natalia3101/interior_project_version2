<template>
    <section class="blogDetails-page center">
        <article-components></article-components>
    </section>
</template>

<script>
export default {
  name: 'BlogDetailsPage',

  data () {
    return {
      findElement: '',
      contentArticles: [{
        title: 'Let’s Get Solution for Building Construction Work',
        img: 'article1.svg',
        tag: 'Kitchen',
        itemData: '26 December,2022'
      },
      {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        img: 'article2.svg',
        tag: 'Bedroom',
        itemData: '25 December,2022'

      },
      {
        title: 'Design sprints are great',
        img: 'article1.svg',
        tag: 'Architecture',
        itemData: '24 December,2022'

      },
      {
        title: 'Best For Any Office & Business Interior Solution',
        img: 'article2.svg',
        tag: 'Bedroom',
        itemData: '23 December,2022'

      }, {
        title: 'Low Cost Latest Invented Interior Designing Ideas',
        img: 'article1.svg',
        tag: 'Kitchen Planning',
        itemData: '22 December,2022'

      }
      ],
      tagList: [
        'Kitchen',
        'Building',
        'Architecture',
        'Bedroom',
        'Kitchen Planning'

      ]

    }
  },

  template: `
    <div class="blogDetails_container">
        <div class="blog_details">
            <div class="blog_details_article" v-for="(article, index) in filterArticle" :key="index">
                <h2 class="article__title">{{article.title}}</h2>
                <img class="article__img" :src="'../../../assets/images/blogDetailsPage/' + article.img" :alt="article.img">
                <div class="article__info">
                    <p class="article__info-date">{{article.itemData}}</p>
                    <p class="article__info-links">Interior / Home / Decore</p>
                </div>
                <p class="article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injecthumour, or randomised words which don't look even slightly believable.
                    <br>
                    <br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                </p>
                <div v-if="index === 0" class="quotation_block">
                    <p class="quotation_block-symbol"><img src="../../../assets/images/blogDetailsPage/quot.svg" alt="quot mark"></p>
                    <p class="quotation_block-text">The details are not the details. They make the design.</p>
                </div>
            </div>
        </div>
        
        <div class="tags">
            <div class="tags__buttons-container">
                <h2 class="tags__title">Tags</h2>
                <div class="tags__buttons">
                    <button @click="filterClick('All')" class="tags__buttons-item">All</button>
                    <button v-for="btn in tagList" @click="filterClick(btn)" class="tags__buttons-item">{{ btn }}</button>
                </div>
            </div>
        </div>
    </div>
    `,

  methods: {
    filterClick (item) {
      this.findElement = item
    }
  },
  computed: {
    filterArticle () {
      return this.findElement !== 'All' ? this.contentArticles.filter((el) => el.tag.includes(this.findElement)) : this.contentArticles
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/vars";
.blogDetails_container {
    display: flex;
    flex-direction: row;
    margin-bottom: 96px;
    margin-top: 160px;
    gap: 57px;
}

.blog_details_article {
    margin-bottom: 27px;
}

.article__title {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display';
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
}

.article__img {
    margin-top: 11px;
}

.article__info {
    margin-top: 45px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: rgb(77, 80, 83);
    font-family: 'Jost';
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
    text-transform: capitalize;
}

.article__text {
    margin-top: 45px;
    color: rgb(77, 80, 83);
    font-family: 'Jost';
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 1%;
    text-align: left;
}

.quotation_block {
    margin-top: 35px;
    border-radius: 50px;
    background: rgb(244, 240, 236);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 53px 227px 53px 227px;
}

.quotation_block-text {
    color: rgb(205, 162, 116);
    font-family: 'DM Serif Display';
    font-style: italic;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: center;
}

.tags__buttons-container {
    width: 345px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.tags__title {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display';
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: left;
}

.tags__buttons {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
}

.tags__buttons-item {
    cursor: pointer;
    background: #f4f0ec;
    padding: 9px 30px 9px 30px;
    border-radius: 10px;
    border: none;
    color: rgb(41, 47, 54);
    font-family: 'Jost';
    font-size: 18px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 2%;
    text-align: center;
    transition: 0.3s;
}

.tags__buttons-item:hover {
    background: rgb(41, 47, 54);
    color: rgb(255, 255, 255);
}
</style>
