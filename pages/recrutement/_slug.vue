<template>
  <div>
    <h1>{{ offer.title.replace(/^\w/, (char) => char.toUpperCase()) }}</h1>
    <h2 class="it-primary fr-mb-6w">{{ subTitle }}</h2>

    <section class="fr-mb-8w" v-html="offer.content"/>

    <iframe
      class="airtable-embed airtable-dynamic-height"
      src="https://airtable.com/embed/shr5005Oj0lXyygN2?backgroundColor=yellow"
      width="100%"
      height="1072"
      style="background: transparent; border: 1px solid #ccc;"
    />
  </div>
</template>

<script>
export default {
  name: 'RecruitmentItem',

  async asyncData({ $axios, params }) {
    const { data } = await $axios.$get('/items/offres_emploi', {
      params: {
        fields: 'title,related_project,content',
        filter: { title: { _eq: params.slug.replace('_', ' ') } }
      }
    });

    const [offer] = data;

    return {
      offer
    }
  },

  computed: {
    subTitle() {
      if (this.offer.related_project) {
			  return `${this.offer.related_project} recrute :`;
			}

			return 'Nous recrutons :';
    }
  }
}
</script>
