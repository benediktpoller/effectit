<template>
    <div id="app">
        <NavBar></NavBar>

        <router-view/>

        <Footer></Footer>

    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            NavBar,
            Footer
        }
    }
</script>

<style>
    .navbar-dark .navbar-nav .nav-link {
        color: #3d3c3e !important;
    }

    .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
        color: #222746 !important;
        background: rgba(169, 169, 169, 0.24);
    }

    img {
        max-width: 100%;
        height: auto
    }

    .navbar-toggler {
        background-color: #7cbfea !important;
    }

    #app > .container {
        padding: 2em 0;
    }

    h2, h3 {
        margin: 0.75em 0 !important;
        color: rgb(121, 117, 117);
    }
</style>
