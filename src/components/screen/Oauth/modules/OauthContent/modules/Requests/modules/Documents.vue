<template>
  <div>
    <div class="subtitle">
      Documents:
    </div>
    <div class="content">
      <ul
        v-for="doc in data"
        :key="doc.id"
        data-test="endpass-oauth-documents-list"
      >
        <li class="subtitle">
          {{ doc.id }}: {{ doc.documentType }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Documents',

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
