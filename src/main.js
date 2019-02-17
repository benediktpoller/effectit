import Vue from 'vue'
import App from './App.vue'
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'

import Error404 from './components/content/common/Error404.vue'
import Tos from './components/content/common/Tos.vue'


Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Maintainence from "./components/Maintainence";
import Trading from "./components/Trading";
import Leasing from "./components/Leasing";
import FXF from "./components/FXF";
import IBMSaaS from "./components/IBMSaaS";
import Imprint from "./components/content/common/Imprint";

Vue.config.productionTip = false

Vue.use(VueI18Next)
Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        name: 'error404',
        component: Error404
    },
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/it-wartung',
        name: 'maintainence',
        component: Maintainence
    },
    {
        path: '/it-systemhandel',
        name: 'trading',
        component: Trading
    },
    {
        path: '/leasing',
        name: 'maintainence',
        component: Leasing
    },
    {
        path: '/5x5',
        name: '5x5',
        component: FXF
    },
    {
        path: '/ibm-saas',
        name: 'ibm-saas',
        component: IBMSaaS
    },
    {
        path: '/tos',
        name: 'tos',
        component: Tos
    },
    {
        path: '/imprint',
        name: 'imprint',
        component: Imprint
    }
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

const locales = {
    en: {
        tos: "Terms of Service",
        imprint: "Imprint",
        contact: "Contact",
        gdpr: "GDPR"
    },
    de: {
        tos: "AGB",
        imprint: "Impressum",
        contact: "Kontakt",
        gdpr: "Datenschutzerklärung"
    }
};

i18next.init({
    lng: 'de',
    resources: {
        en: {translation: locales.en},
        de: {translation: locales.de}
    }
});

const i18n = new VueI18Next(i18next);

new Vue({
    router,
    render: h => h(App),
    i18n: i18n,
}).$mount('#app')
