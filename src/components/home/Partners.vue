<template>
    <div class="partners">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Unsere Partner</h1>
            <p class="lead">Gemeinsam mit unseren Partnern sorgen wir für eine Reduktion Ihrer IT&#8209;Ausgaben.</p>

            <router-link class="p-4 text-dark" to="/agb">
                <img src="../../assets/partners/am.png">
            </router-link>
            <router-link class="p-4 text-dark" to="/agb">
                <img src="../../assets/partners/12552_arrow.jpg">
            </router-link>
            <router-link class="p-4 text-dark" to="/agb">
                <img src="../../assets/partners/grenke.jpg">
            </router-link>
            <router-link class="p-4 text-dark" to="/agb">
                <img src="../../assets/partners/Logo_TechData.svg_.png">
            </router-link>
            <router-link class="p-4 text-dark" to="/agb">
                <img src="../../assets/partners/novarion.jpg">
            </router-link>
            <router-link class="p-4 text-dark" to="/agb">
                <img src="../../assets/partners/pixxio_logo.jpg">
            </router-link>
            <router-link class="p-4 text-dark" to="/agb">
                <img src="../../assets/partners/RadarServices-Logo_web.png">
            </router-link>

            <router-link class="p-4 text-dark" to="/agb">
                <img src="../../assets/partners/ibm-business-partner.jpg">
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Partners',
        props: {
            msg: String
        }
    }
</script>

<style>

    .partners {

    }

    .partners img {
        max-width: 10em;
        margin-bottom: 2em;
    }
</style>
