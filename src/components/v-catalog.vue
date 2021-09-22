<template>
    <div class="v-catalog">
      <router-link :to="{name: 'cart', params: {cart_data: CART}}">
        <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
      </router-link>
      <probka
        @search='addText'
      ></probka>
      <h1>Catalog</h1>
      <div class="filters">
      <v-select 
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
        
      />
      <div class="range-slider">
        <input type="range" min="0" max="1000" step="10"
        v-model.number="minPrice"
        @change="setRangeSlider">
        <input type="range" min="0" max="1000" step="10"
        v-model.number="maxPrice"
        @change="setRangeSlider">
      </div>
      <div class="range-values">
        <p>Min:{{minPrice}}</p>
        <p>Max:{{maxPrice}}</p>
      </div>
      </div>
        <div class="v-catalog__list">
            <v-catalog-item 
            v-for="product in filteredProducts"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import {mapActions, mapGetters} from 'vuex';
import vSelect from './v-select.vue'
import probka from './probka.vue'

export default {
    name: "v-catalog",
    components: {
        vCatalogItem,
        vSelect,
        probka,
    },
    props: {},
    data () {
        return {
          categories: [
            {name: 'Все', value: 'ALL'},
            {name: 'Мужские', value: 'м'},
            {name: 'Женские', value: 'ж'},     
          ],
          selected: 'Все  ',
          sortedProducts: [],
          minPrice: 0,
          maxPrice: 1000,
        }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        "CART",
        'IS_MOBILE',
        "IS_DESKTOP",
        "SEARCH_VALUE",
      ]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      }
    },
    methods: {
      addText(val) {
          alert('Load products: ' + val)
      },
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      setRangeSlider() {
        if(this.minPrice > this.maxPrice) {
          let tmp = this.maxPrice;
          this.maxPrice = this.minPrice;
          this.minPrice = tmp;
        }
        this.sortByCategories()
      },
      sortByCategories(category) {
        let vm = this;
        this.sortedProducts = [...this.PRODUCTS],
        this.sortedProducts = this.sortedProducts.filter(function(item) {
          return item.price >= vm.minPrice && item.price <= vm.maxPrice
        })
        if (category) {
          this.sortedProducts = this.sortedProducts.filter(function(e) {
            vm.selected === category.name
          return e.category === category.name
        })
        }
      },
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
        sortProductsBySearchValue(value) {
          this.sortedProducts = [...this.PRODUCTS]
          if (value) {
            this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
          } else {
            this.sortedProducts = this.PRODUCTS;
          }
        }
    },
    watch: {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((responce) => {
        if(responce.data) {
          this.sortByCategories()
          this.sortProductsBySearchValue(this.SEARCH_VALUE)
        }
      })
    }
}
</script>

<style scoped>
.v-catalog__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.v-catalog__link_to_cart {
  position: fixed;
  top: 100px;
  right: 10px;
  padding: 13px;
  color: white;
  background-color: rgb(172, 240, 172);

}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

.input[type=range]::-webkit-slider-thumb{
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}

/* .range-slider input {
  background-color: ;
} */

</style>
