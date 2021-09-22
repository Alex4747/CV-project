<template>
  <div class="probka">
    <input type="text"
        v-model="val"
    >
    <button
        @click="$emit('search', val)"
    >Button</button>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, minLength, email} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  name: 'probka',
  data() {
      return {
          val: '',
      }
  },
  methods: { 
      
  },
  validations: {
    form: {
      login: {required, minLength: minLength(5)},
      email: {required, email},
    }
  }
}
</script>

<style scoped>

</style>
