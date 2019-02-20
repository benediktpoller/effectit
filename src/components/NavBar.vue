<template>
    <b-navbar toggleable="lg" type="dark" variant="light" sticky="true">
        <b-navbar-brand to="/">
            <img src="@/assets/img/effectit_logo.png" class="logo" style="max-height: 50px" alt="effectIT GmbH">
        </b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
                <b-nav-item to="/it-wartung">Wartung</b-nav-item>
                <b-nav-item to="/it-systemhandel">Systemhandel</b-nav-item>
                <b-nav-item-dropdown text="Security">
                    <b-dropdown-item to="/radar-smart-solution">RadarServices</b-dropdown-item>
                    <b-dropdown-item to="/radar-smart-solution">Radar Smart Solution</b-dropdown-item>


                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="NAME FEHLT">
                    <b-dropdown-item to="/iso-zertifizierung">ISO-Zertifizierung</b-dropdown-item>


                </b-nav-item-dropdown>

                <b-nav-item to="/leasing">Leasing</b-nav-item>
                <b-nav-item to="/5x5">5x5</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!--
                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
                -->

                <b-nav-item-dropdown text="Language" right>
                    <b-dropdown-item href="#english" @click="changeLanguage('en')">English</b-dropdown-item>
                    <b-dropdown-item href="#deutsch" @click="changeLanguage('de')">Deutsch</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {
            msg: String
        },
        methods: {
            changeLanguage(lang) {
                this.$i18n.i18next.changeLanguage(lang);
            }
        }
    }
</script>
