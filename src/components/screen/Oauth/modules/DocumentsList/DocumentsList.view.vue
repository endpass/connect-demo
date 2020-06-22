<template>
  <div>
    <div class="subtitle">
      Documents:
    </div>
    <div class="content">
      <ul
        v-for="doc in documentsList"
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
  name: 'DocumentsListView',

  props: {
    documentsList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
