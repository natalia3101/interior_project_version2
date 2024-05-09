<template>
        <footer class="footer center">
            <div class="info_footer">
                <div class="logos">
                    <a href="index.html"><img class="logo" src="../public/images/Logo.png" alt="logo"></a>
                    <a href="index.html" class="brand_name">Interno</a>
                </div>
                <p class="footer_description">It is a long established fact that a reader will be distracted lookings.</p>
            </div>
            <div class="nav_footer">
                <h3 class="nav_subtitle">Pages</h3>
                <nav class="nav_footer_links">
                    <a class="footer__link" href="#">Home</a>
                    <a class="footer__link" href="#">Project</a>
                    <a class="footer__link" href="#">Blog</a>
                </nav>
            </div>

            <div class="contact_info">
                <h2 class="contact_title">Contact</h2>
                <p class="contact_address">55 East Birchwood Ave. Brooklyn,
                    <br>New York 11201 </p>
                <p class="contact_email">contact@interno.com</p>
                <p class="contact_phone">(123) 456 - 7890</p>
            </div>
        </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped lang="scss">
@import "../scss/vars";
.footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-bottom: 130px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .footer_description {
        padding-top: 18px;
        max-width: 393px;
        margin: auto;
        color: rgb(77, 80, 83);
        font-family: 'Jost';
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 1%;
        text-align: left;
    }
    .nav_subtitle {
        color: rgb(41, 47, 54);
        font-family: 'DM Serif Display';
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        text-align: left;
    }
    .nav_footer_links {
        color: rgb(77, 80, 83);
        font-family: 'Jost';
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 1%;
        text-align: left;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 15px;
        margin-top: 15px;
    }
    .contact_info {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 15px;
    }
    .contact_title {
        color: rgb(41, 47, 54);
        font-family: DM Serif Display;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0%;
        text-align: left;
    }
    .contact_info p {
        color: rgb(77, 80, 83);
        font-family: 'Jost';
        font-size: 22px;
        font-weight: 400;
    }
    .contact_address {
        line-height: 1.5;
    }
}
.footer__link{
    color: #4d5053;
}
</style>
