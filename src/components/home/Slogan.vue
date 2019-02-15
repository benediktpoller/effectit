<template>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">we help you to stay competitive</h1>
        <p class="lead">Gemeinsam mit unseren Partnern sorgen wir für eine Reduktion Ihrer IT&#8209;Ausgaben.</p>
    </div>
</template>

<script>
    export default {
        name: 'Slogan',
        props: {
            msg: String
        }
    }
</script>

<style>
    html {
        font-size: 14px;
    }
    @media (min-width: 768px) {
        html {
            font-size: 16px;
        }
    }

    .container {
        max-width: 960px;
    }

    .pricing-header {
        max-width: 700px;
    }

    .card-deck .card {
        min-width: 220px;
    }

</style>
