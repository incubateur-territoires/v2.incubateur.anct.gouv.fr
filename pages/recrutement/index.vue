<template>
  <div>
    <div class="fr-mb-5w">
      <h1 class="fr-text-title-blue-france">
			  Recrutement
      </h1>
      <p>
        Nous accompagnons les territoires vers leur transition numérique le plus simplement
        possible.
      </p>
      <a class="it-primary" href="https://beta.gouv.fr/recrutement" target="_blank" rel="noopener" >
        Consulter toutes les offres de la communauté Beta.gouv.fr
      </a>
    </div>

    <HorizontalCard
      v-for="(card, index) in cards"
      :key="`recruitment-card${index}`"
      class="fr-mt-2w"
      :title="card.title"
      :link-to="card.linkTo"
      :description="card.description"
      :detail="card.detail"
    />
  </div>
</template>

<script>
import HorizontalCard from '~/components/Cards/HorizontalCard';

export default {
  name: 'RecruitmentPage',

  components: {
    HorizontalCard,
  },


  async asyncData({ $axios }) {
    const { data: offers } = await $axios.$get('/items/offres_emploi', {
      params: {
        fields: 'title,related_project,contract_type,date_created',
        filter: { status: { _eq: 'published' } }

      }
    });

    const cards = offers.map(({ title, related_project, contract_type, date_created }) => {
      const elapsedTime = Math.abs(new Date() - new Date(date_created));
      const elapsedDays = Math.floor(elapsedTime / (1000 * 3600 * 24));

      let creationDurationToDisplay;

      if (elapsedDays < 1) {
        creationDurationToDisplay = 'Aujourd\'hui';
      } else if (elapsedDays === 1) {
        creationDurationToDisplay = 'Hier';
      } else if (elapsedDays <= 30) {
        creationDurationToDisplay = `Il y a ${elapsedDays} jours`;
      } else {
        creationDurationToDisplay = `Il y a ${elapsedDays % 30} mois`;
      }

      return {
        title: title.replace(/^\w/, (char) => char.toUpperCase()),
        linkTo: { name: 'recrutement-slug', params: { slug: title.toLowerCase().replace(' ', '_') } },
        detail: related_project,
        description: `${creationDurationToDisplay} · ${contract_type}`
      }
    });

    return {
      cards
    }
  },

  data() {
    return {
      cards: []
    };
  },

  head() {
    return {
      title: 'Incubateur des territoires - Recrutement',
    };
  },
};
</script>
