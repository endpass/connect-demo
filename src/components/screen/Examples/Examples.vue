<template>
  <section class="section">
    <v-card class="card-content">
      <h2 class="v-h3">
        Basic usage with email requesting
      </h2>
      <code-example :source="examples.RawOauth.source">
        <component :is="examples.RawOauth.component" />
      </code-example>
    </v-card>
  </section>
</template>

<script>
import VCard from '@endpass/ui/kit/VCard';
import CodeExample from '@/components/common/CodeExample';
import Oauth from './Oauth.vue';
// eslint-disable-next-line
import RawOauth from '!!raw-loader!./Oauth.vue';

const applyEnvToSources = source =>
  Object.keys(ENV).reduce(
    (acc, key) => acc.replace(new RegExp(`ENV.${key}`, 'im'), `'${ENV[key]}'`),
    source,
  );

export default {
  data: () => ({
    examples: {
      RawOauth: {
        source: applyEnvToSources(RawOauth),
        component: Oauth,
      },
    },
  }),

  components: {
    VCard,
    CodeExample,
    Oauth,
  },
};
</script>
