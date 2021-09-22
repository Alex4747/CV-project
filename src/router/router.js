import Vue from 'vue'
import Router from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import vMainPage from '../components/main-page/v-main-page'
// import vCatalogItem from '../components/v-catalog-item'
import vPopup2 from '../components/popup/v-popup2'

Vue.use(Router);

let router = new Router ({
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: vMainPage,

        },
        {
            path: '/catalog',
            name: 'catalog',
            component: vCatalog,
        },   
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true,
        },
        {
            path: '/popup2',
            name: 'popup2',
            component: vPopup2,
            props: true,
        }
    ]
})
 
export default router;