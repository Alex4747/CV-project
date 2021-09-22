<template>
    <div class="v-catalog-item">

        <!-- <v-popup2
            v-if="isInfoPopupVisible"
            rightBtnTitle="Add to cart"
            :popupTitle="product_data.name"
            @closePopup="closeInfoPopup"
            @rightBtnAction="addToCart"
            >
            <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image)"  alt="img">
            <div>
                <p class="v-catalog-item__name">{{product_data.name}}</p>
                <p class="v-catalog-item__price">{{product_data.price | toFix}} $</p>
                <p class="v-catalog-item__price">{{product_data.category}}</p>
            </div>
            </v-popup2> --> 

        <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image)"  alt="img">
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__price">{{product_data.price | toFix}} $</p>
        <router-link :to="{name: 'popup2', params: {}}">
        <button class="v-catalog-item__show-info"
        @click="showPopupInfo"
        >Show info
        </button>
        </router-link>
        <button 
        class="v-catalog-item__add_to_cart_btn btn" 
        @click="addToCart"
        >Add to cart</button>
    </div>
</template>

<script>
// import vPopup from './popup/v-popup'
import vPopup2 from './popup/v-popup2'
import toFix from '../filters/toFix'

export default {
    name: "v-catalog-item",
    // components: {
    //     vCatalogItem,
    // },
    components: {
        vPopup2,
    },
    props: {
        product_data: {
            type: Object,
            default() {
                return{}
            }
        }
    }, 
    data () {
        return {
            isInfoPopupVisible: false
        }
    },
    filters: {
        toFix
    },
    computed: {},
    methods: {
        showPopupInfo() {
            this.isInfoPopupVisible = true
        },
        closeInfoPopup () {
            this.isInfoPopupVisible = false;
        },
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
    },
    mounted() {
        this.$set(this.product_data, 'quantity', 1)
    }
}
</script>

<style scoped>
.v-catalog-item {
    flex-basis: 28%;
    box-shadow: 0 0 5px 0;
    padding: 8px;
    margin-bottom: 8px;
}
.v-catalog-item__image {
    width: 100px;
}

.v-catalog-item__show-info, .btn {
    padding: 8px 16px;
    background: #26ae68;
    color: white;
    border-radius: 5px; 
    border: none;
    font-weight: bold;
}

.v-catalog-item__show-info {
    background: grey;
}
</style>
