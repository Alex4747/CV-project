<template>
    <div class="v-main-wrapper">
        <v-header></v-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import vHeader from '../components/layouts/v-header'

export default {
    name: 'v-main-wrapper',
    
    components: {
        vHeader
    },
    props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
    methods: {},
    watch: {},
}
</script>

<style scoped>
.v-main-wrapper {
    max-width: 1100px;
    margin: 0 auto;
;
}
</style>
