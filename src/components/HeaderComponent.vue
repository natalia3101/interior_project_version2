<template>
    <header class="header center">
        <div class="logos">
            <a href="index.html"><img class="logo" src="../public/images/Logo.png" alt="logo"></a>
            <a href="index.html" class="brand_name">Interno</a>
        </div>
        <nav class="nav_right-side">
            <a class="header__link" href="#">Home</a>
            <a class="header__link" href="#">Project</a>
            <a class="header__link" href="#">Blog</a>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped lang="scss">
@import "../scss/vars";
.header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-top: 44px;
    margin-bottom: 44px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-line-pack: center;
    align-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.logos {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.logo {
    width: 34px;
    height: 34px;
    margin-right: 8px;
}

.brand_name {
    color: rgb(41, 47, 54);
    font-family: 'DM Serif Display';
    font-size: 40px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
}

.nav_right-side {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 40px;
    font-family: 'Jost';
    font-weight: 400;
    font-size: 20px;
    color: rgb(77, 80, 83);
}
.header__link {
    color: #292f36;
  }
</style>
