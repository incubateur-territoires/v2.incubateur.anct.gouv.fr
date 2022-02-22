<template>
  <div class="fr-card fr-card--horizontal fr-enlarge-link">
    <div class="fr-card__body">
      <h4 class="fr-card__title">
        <nuxt-link :to="linkTo" class="fr-card__link">{{ title }}</nuxt-link>
      </h4>

      <p v-if="description" class="fr-card__desc">{{ description }}</p>
      <p v-if="detail" class="fr-card__detail">{{ detail }}</p>
    </div>

    <div v-if="imagePath" class="fr-card__img">
      <img :src="imagePath" class="fr-responsive-img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalCard',

  props: {
    title: {
      type: String,
      required: true,
    },
    linkTo: {
      type: Object,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    detail: {
      type: String,
      default: null,
    },
    imagePath: {
      type: String,
      default: null,
    },

  }
}
</script>
