<template>
  <div class="code-example">
    <div class="code-example-source">
      <code v-html="renderedSource"></code>
    </div>
    <div class="code-example-preview">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'CodeExample',

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
.code-example {
  display: flex;
  align-items: flex-start;
}

.code-example > * {
  width: 50%;
  margin-right: 20px;
}

.code-example > *:first-child {
  overflow-x: auto;
}

.code-example-source code {
  white-space: pre;
  padding: 0;
  background: none;
}
</style>
