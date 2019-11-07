<template>
  <div class="code">
    <code v-html="renderedSource" />
  </div>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'Code',

  props: {
    source: {
      type: String,
      required: true,
    },
  },

  computed: {
    renderedSource() {
      return Prism.highlight(
        this.source,
        Prism.languages.javascript,
        'javascript',
      );
    },
  },
};
</script>

<style lang="scss">
.code {
  width: 100%;
  overflow-x: auto;
}

.code code {
  white-space: pre;
  padding: 0;
  background: none;
}
</style>
