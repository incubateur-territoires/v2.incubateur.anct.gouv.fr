<template>
  <div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters">
      <section class="fr-col">
        <h3>Les services</h3>
        <div class="fr-grid-row fr-grid-row--gutters">
          <h6>Par échellon</h6>
          <ul class="fr-btns-group fr-btns-group--inline">
            <li v-for="decoupages_administratifs in facets_groups.decoupages_administratifs">
              <SelectButton
                @change="filter('decoupages_administratifs', decoupages_administratifs.id, $event)"
                :label="decoupages_administratifs.nom"
              />
            </li>
          </ul>
          <div class="fr-col-12 fr-col-lg-6" v-for="service in services">
            <Card
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
              <li v-for="thematique in facets_groups.thematiques">
                <SelectButton
                  @change="filter('thematiques', thematique.id, $event)"
                  :label="thematique.thematique"
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
  export default {
    created() {
      this.$store.dispatch('services/init')
    },

    computed: {
      services() {
        return this.$store.state.services.list
      },
      facets_groups() {
        return this.$store.state.services.facets_groups
      },
    },

    methods: {
      filter(name, value, active) {
        this.$store.dispatch('services/filter', { name, value, active })
      }
    }
  }
</script>
