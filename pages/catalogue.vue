<template>
  <div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters">
      <section class="fr-col">
        <h3>Les services</h3>
        <div class="fr-grid-row fr-grid-row--gutters">
          <h6>Par échelon</h6>
          <ul class="fr-btns-group fr-btns-group--inline">
            <li v-for="(decoupages_administratifs, index) in facets_groups.decoupages_administratifs" :key="`administative-parts${index}`">
              <SelectButton
                :label="decoupages_administratifs.nom"
                @change="filter('decoupages_administratifs', decoupages_administratifs.id, $event)"
              />
            </li>
          </ul>
          <div v-for="(service, index) in services" :key="`services-parts${index}`" class="fr-col-12 fr-col-lg-6">
            <BasicCard
              :title="service.nom"
              :description="service.description"
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WXUbigVrd4W8p067r5e6ggAAAA%26pid%3DApi&f=1"
            />
          </div>
        </div>
      </section>
      <aside class="fr-col">
        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col">
            <h4>Par domaine</h4>
            <ul class="fr-btns-group fr-btns-group--inline">
              <li v-for="(thematique, index) in facets_groups.thematiques" :key="`theme-groups${index}`">
                <SelectButton
                  :label="thematique.thematique"
                  @change="filter('thematiques', thematique.id, $event)"
                />
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import BasicCard from '~/components/Cards/BasicCard';

export default {
  components: {
    BasicCard
  },
  computed: {
    services() {
      return this.$store.state.services.list;
    },
    facets_groups() {
      return this.$store.state.services.facets_groups;
    },
  },

  created() {
    this.$store.dispatch('services/init');
  },

  methods: {
    filter(name, value, active) {
      this.$store.dispatch('services/filter', { name, value, active });
    },
  },
};
</script>
