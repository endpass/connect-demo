<template>
  <section>
    <v-card class="card-content examples-showcase">
      <section class="examples-code">
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
      <section class="examples-runtime">
        <example-component />
      </section>
    </v-card>
  </section>
</template>

<script>
import VCard from '@endpass/ui/kit/VCard';
import VTabs from '@endpass/ui/kit/VTabs';
import VTab from '@endpass/ui/kit/VTab';
import VCode from './modules/VCode';
import ExampleComponent from './modules/ExampleComponent.vue';

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
}

.examples-code {
  width: calc(100% - 300px);
}

.examples-runtime {
  width: 300px;
  padding-top: 40px;
  margin: 10px;
}
</style>
