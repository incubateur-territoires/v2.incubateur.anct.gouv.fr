<template>
  <button :class="`fr-btn ${selected ? '' : 'fr-btn--secondary'}`" :selected="selected" @click="toggle">{{ label }}</button>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
      selected: {
        type: Boolean,
        default: false,
      },
    },

    emits: ['change'],

    data() {
      return {
        uid: 0
      }
    },

    methods: {
      toggle() {
        this.$emit('change', this.selected)
      }
    },

  }
</script>
