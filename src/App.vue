<template>
    <div id="app">
        <NavBar></NavBar>

        <router-view/>

        <Footer></Footer>

    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    import Maintainence from './components/Maintainence.vue'
    import Footer from './components/Footer.vue'
    import Home from "./components/Home";

    export default {
        name: 'app',
        components: {
            Home,
            NavBar,
            Maintainence,
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
</style>
