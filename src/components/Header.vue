<template>
    <header>
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-1 bg-white border-bottom shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal">
                <router-link to="/">
                    <img alt="effect IT logo" src="../assets/effectit_logo.png">
                </router-link>
            </h5>

            <nav class="my-2 my-md-0 mr-md-3">
                <router-link class="p-2 text-dark" to="/it-wartung">IT Wartung</router-link>
                <router-link class="p-2 text-dark" to="/it-systemhandel">IT Systemhandel</router-link>
                <router-link class="p-2 text-dark" to="/leasing">Leasing</router-link>
                <router-link class="p-2 text-dark" to="/5x5">5x5</router-link>
                <router-link class="p-2 text-dark" to="/ibm-saas">IBM SaaS</router-link>
            </nav>

            <a class="btn btn-outline-primary" href="#">English</a>

        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            msg: String
        }
    }
</script>

<style>


    header img {
        width: 16em;
    }

    header ul {
        margin: 0;
        padding: 0;

    }

    header ul li {
        display: inline-block;
    }

    header ul li a {
        padding: 1em;
    }

    a {
        text-decoration: none;
    }

    ul a {
        color: inherit;
    }

    ul.top a {
        color: #0086d6;
    }

    a.router-link-active {
        font-weight: bold;
    }
</style>
