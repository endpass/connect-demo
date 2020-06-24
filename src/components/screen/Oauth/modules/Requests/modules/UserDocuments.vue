<template>
  <div>
    <div class="subtitle">
      Documents:
    </div>
    <div class="content">
      <table>
        <tbody>
          <tr
            v-for="doc in data"
            :key="doc.id"
            data-test="endpass-oauth-documents-list"
          >
            <td>{{ doc.documentType }}</td>
            <td>{{ doc.id }}</td>
            <td>{{ doc.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDocuments',

  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
