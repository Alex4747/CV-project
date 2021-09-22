<template>
    <div class="v-cart-item">
       <img class="v-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image)" alt="">
       <div class="v-cart-item__info">
           <p>{{cart_item_data.name}}</p>
           <p>{{cart_item_data.price | toFix}}</p>
           <p>{{cart_item_data.article}}</p>
       </div>
       <div class="vcart-item__quantity">
           <p>Qty</p>
           <span>
               <span class="quantity__btn" @click="decrementItem">-</span>
               {{cart_item_data.quantity}}
               <span class="quantity__btn" @click="incrementItem">+</span>
               </span>
           </div>
       <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
import toFix from '../filters/toFix'

export default {
    name: "v-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return{}
            }
        }
    },
    data () {
        return {}
    },
    filters: {
        toFix
    },
    computed: {},
    methods: {
        decrementItem() {
            this.$emit('decrement')
        },
        incrementItem() {
            this.$emit('increment')
        },
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
    mounted() {
        // this.$set(this.cart_item_data, 'quantity', 1)
    }
}
</script>

<style> 
.v-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 3px 0;
    padding: 8px;
    margin-bottom: 8px;

}

.v-cart-item__image {
    max-width: 50px;;
}

.quantity__btn {
    cursor: pointer;
}
</style>
