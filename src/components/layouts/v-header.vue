<template>
    <div class="v-header">
        <router-link :to="{name: 'mainPage'}">
        <img src="../../assets/images/logo.png" alt="">
        </router-link>
        <div class="search-fieled">
            <input 
                type="text"
                class="search-filed"
                v-model="searchValue"
            >
            <button class="search_btn">
                <i class="material-icons" @click="search(searchValue)">search</i>
            </button>
            <button class="search_btn btn-2">
                <i class="material-icons" @click="clearSearchField">
                    cancel
                </i>
            </button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
    export default {
        data() {
            return {
                searchValue: ''
            }
        },
        computed: {
            ...mapGetters([
                'SEARCH_VALUE'
            ])
        },
        methods: {
            ...mapActions([
                'GET_SEARCH_VALUE_TO_VUEX'
            ]),
            ...mapMutations([
                'SET_SEARCH_VALUE_TO_VUEX'
            ]),
            search(value) {
                this.SET_SEARCH_VALUE_TO_VUEX(value);
                if(this.$route.path !== '/catalog') {
                this.$router.push('/catalog')
                }
            },
            clearSearchField() {
                this.searchValue = ''
                this.SET_SEARCH_VALUE_TO_VUEX();
                if(this.$route.path !== '/catalog') {
                this.$router.push('/catalog')
                }
            }
        }
    }
</script>

<style> 
.v-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #26ae68;
    padding: 16px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
}

.v-header img {
    width: 50px;
}

.search-filed {
    padding: 15px;
    position: relative;
    margin-top: 10px;
    right: 30px;
    border-radius: 10px;
    border: none;
}

.search_btn {
    margin-right: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: white;
}
.btn-2 {
    margin-right: 30px;
}
</style>
