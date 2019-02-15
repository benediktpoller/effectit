<template>
    <footer>
        <nav class="my-2 my-md-0 mr-md-3">
            <router-link class="p-2" to="/agb">AGB</router-link>
            <router-link class="p-2" to="/impressum">Impressum</router-link>
            <router-link class="p-2" to="/kontakt">Kontakt</router-link>
            <router-link class="p-2" to="/datenschutz">Datenschutzerklärung</router-link>
        </nav>
        <span>&copy; 2019, effect IT GmbH. Alle Rechte vorbehalten.</span>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style>
    footer {
        text-align: center;
        background: #003c6b;
        color: #fff;
        padding: 2em;
        margin: 0 2em;
    }

    footer nav a {
        color: #fff;
        margin-bottom: 1em;
    }

    footer nav a:hover, footer nav a:focus {
        color: #fff;
    }
</style>
