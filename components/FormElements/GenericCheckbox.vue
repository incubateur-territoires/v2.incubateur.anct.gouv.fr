<!-- As of 2/2/22 this is unused. -->
<template>
  <div>
    <div class="fr-checkbox-group">
      <input :id="`checkbox-${uid}`" type="checkbox" :checked="checked" :value="value" @change="$emit('change', $event.target.checked)">
      <label class="fr-label" :for="`checkbox-${uid}`">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true,
    },
    checked: {
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

  mounted () {
    this.uid = this._uid
  },

}
</script>
