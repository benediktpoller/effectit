import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import Home from './components/Home.vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';

Vue.use(VueI18Next);
import Router from 'vue-router'
// Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '*',
            name: 'home',
            component: Home
        }
    ]
})

const locales = {
    en: {
        tos: "Term of Service",
        imprint: "Imprint",
        contact: "Contact",
        gdpr: "GDPR"
    },
    de: {
        tos: "AGB",
        imprint: "Impressum",
        contact: "Kontakt",
        gdpr: "DSGVO"
    }
};
i18next.init({
    lng: 'de',
    resources: {
        en: { translation: locales.en },
        de: { translation: locales.de }
    }
});

const i18n = new VueI18Next(i18next);

new Vue({
    render: h => h(App),
    i18n: i18n,
}).$mount('#app')
