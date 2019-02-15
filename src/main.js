import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Start from "./components/Start";
import Error404 from "./components/Error404";
import Impressum from "./components/Impressum";
import AGB from "./components/AGB";
import Kontakt from "./components/Kontakt";
import Landingpage from "./components/Landingpage";


import Wartung from "./components/Wartung";
import Systemhandel from "./components/Systemhandel";
import Leasing from "./components/Leasing";

import Fxf from "./components/Fxf";
import Saas from "./components/Saas";

Vue.use(VueRouter);

const defaultOptions = {
    allowedTags: ['h1', 'h2', 'h3', 'p', 'b'],
    allowedAttributes: {
        'a': ['href']
    }
};

Vue.use(defaultOptions);

/*
Router configuration
 */
const router = new VueRouter({
    mode: 'history',
    /*
    We just add one route
     */
    routes: [
        {
            // Wildcard path
            path: '/',
            // Specify the component to be rendered for this route
            component: Start,
            // Inject  props based on route.query values (our query parameters!)
            props: (route) => ({
                locale: route.query.locale
            })
        },
        {
            path: '/agb',
            component: AGB
        },
        {
            path: '/impressum',
            component: Impressum
        },
        {
            path: '/kontakt',
            component: Kontakt
        },
        {
            path: '/it-wartung',
            component: Wartung
        },

        {
            path: '/it-systemhandel',
            component: Systemhandel
        },
        {
            path: '/leasing',
            component: Leasing
        },
        {
            path: '/5x5',
            component: Fxf
        },
        {
            path: '/ibm-saas',
            component: Saas
        },
        {
            path: '/landingpage',
            component: Landingpage
        },
        {
            path: '*',
            // Specify the component to be rendered for this route
            component: Error404,
            // Inject  props based on route.query values (our query parameters!)
            props: (route) => ({
                locale: route.query.locale
            })
        }
    ]
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
