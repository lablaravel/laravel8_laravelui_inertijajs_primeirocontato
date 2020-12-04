import { App, plugin } from '@inertiajs/inertia-vue'
import BootstrapVue from 'bootstrap-vue' //Importing
import Vue from 'vue'

Vue.use(plugin)
Vue.use(BootstrapVue)

const el = document.getElementById('app')

new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
        },
    }),
}).$mount(el)

