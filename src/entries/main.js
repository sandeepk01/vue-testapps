import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from 'state/store';
import routes from 'routes/routes';
import App from 'components/app';
// Initializing VUE plugins
Vue.use(VueRouter);

// Router
const router = new VueRouter({ routes })
const spApp = new Vue({
    el: '#MAIN',
    store,
    router,
    template: '<App/>',
    components: { App },
    mounted () {
        this.$router.push({path: 'home'})
    }
})

