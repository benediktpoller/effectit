<template>
    <div id="app">

        <Header></Header>
        <main>
            <router-link to="/">Start</router-link> / Aktuelle Seite
            <router-view></router-view>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            Header,
            Footer
        }
    }
</script>

<style>

    body {
        background: #646363;
        font-size: 18px;
        width: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .logo {
        background: #fff;
    }

    h2 {
        margin: 1.3em 0 1em 0;
    }

    h3 {
        margin-top: 1em;
    }

    main {
        background: #fff;
        margin: 0 2em;
        padding: 2em;
    }

    .uppercase {
        text-transform: uppercase;
    }


    p {
        line-height: 1.8;
    }

    a {
        color: #003c6b;
    }

    a:hover, a:focus {
        text-decoration: underline;
    }

    img {
        max-width: 100%;

    }

    ul li {
        margin-bottom: 0.5em;
    }

    .contact-box {
        padding: 1em; border: 2px solid #42d800; background-color: #aaf9a4; margin-top: 2em;
    }

    .contact-box a {
        font-weight: bold;
    }
</style>
