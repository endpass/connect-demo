<template>
  <section>
    <v-card class="card-content examples-showcase">
      <section>
        <v-tabs>
          <v-tab label="Vanilla JS">
            <v-code :source="VanillaSources" />
          </v-tab>
          <v-tab label="Vue.js">
            <v-code :source="VueSources" />
          </v-tab>
          <v-tab label="React.js">
            <v-code :source="ReactSources" />
          </v-tab>
        </v-tabs>
      </section>
      <section>
        <example-component />
      </section>
    </v-card>
  </section>
</template>

<script>
import VCard from '@endpass/ui/kit/VCard';
import VTabs from '@endpass/ui/kit/VTabs';
import VTab from '@endpass/ui/kit/VTab';
import VCode from '@/components/common/VCode';

import ExampleComponent from './ExampleComponent.vue';
/* eslint-disable */
import VueSources from '!!raw-loader!./raws/VueSources.vue';
import ReactSources from '!!raw-loader!./raws/ReactSources.jsx';
import VanillaSources from '!!raw-loader!./raws/VanillaSources.html';
/* eslint-enable */

const applyEnvToSources = source =>
  Object.keys(ENV).reduce(
    (acc, key) => acc.replace(new RegExp(`ENV.${key}`, 'img'), `'${ENV[key]}'`),
    source,
  );

export default {
  data: () => ({
    VueSources: applyEnvToSources(VueSources),
    ReactSources: applyEnvToSources(ReactSources),
    VanillaSources: applyEnvToSources(VanillaSources),
  }),

  components: {
    VCard,
    VCode,
    VTabs,
    VTab,
    ExampleComponent,
  },
};
</script>

<style lang="scss">
.examples-showcase {
  display: flex;
  align-items: flex-start;
}

.examples-showcase > section {
  flex: 0 0 auto;
  width: calc(50% - 10px);
}

.examples-showcase > section:first-child {
  margin-right: 20px;
}

.examples-showcase > section:nth-child(2) {
  padding-top: 92px;
}
</style>
