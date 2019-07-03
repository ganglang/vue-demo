import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './component/app.vue';
Vue.use(VueRouter);
Vue.use(Vuex);

var router=new VueRouter({
    model:history,
    routes:[]
})

var store=new Vuex.Store({
    state:{},
    mutations:{},
    getters:{},
    actions:{}
})

var app=new Vue({
    el:'#app',
    router:router,
    store:store,
    render:h=>h(App)
})