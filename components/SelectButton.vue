<template>
  <button :class="`fr-btn ${selected ? '' : 'fr-btn--secondary'}`" @click="toggle" :selected="selected">{{ label }}</button>
</template>

<script>
  export default {
    props: {
      label: String,
      value: String,
      selected: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        uid: 0
      }
    },

    methods: {
      toggle(event) {
        this.selected = !this.selected
        this.$emit('change', this.selected)
      }
    },

    emits: ['change'],

  }
</script>
