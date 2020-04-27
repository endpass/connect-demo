<template>
  <tr class="row">
    <td>
      <v-button @click="onClick">
        {{ label }}
      </v-button>
    </td>
    <td>
      <span class="row-method">{{ method }}</span>
    </td>
    <td>
      <v-tag
        skin="green"
        class="row-path"
      >
        {{ path }}
      </v-tag>
    </td>
    <td>
      <span class="row-description">{{ description }}</span>
    </td>
  </tr>
</template>

<script>
import VButton from '@endpass/ui/kit/VButton';
import VTag from '@endpass/ui/kit/VTag';

export default {
  name: 'ButtonSection',

  props: {
    label: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: '',
    },

    method: {
      type: String,
      required: true,
    },

    path: {
      type: String,
      required: true,
    },
  },

  methods: {
    onClick() {
      this.$emit('click');
    },
  },

  components: {
    VButton,
    VTag,
  },
};
</script>

<style lang="scss">
.row {
}

.row td {
  box-shadow: inset 0 1px 0 var(--endpass-ui-color-grey-1);
  padding: 16px 0;
  vertical-align: middle;
}
.row td + td {
  padding-left: 16px;
}

.row-path {
  white-space: nowrap;
}

.row-method {
  font-size: 14px;
  font-weight: bold;
  color: var(--endpass-ui-color-grey-7);
}

.row-description {
  font-size: 12px;
  color: var(--endpass-ui-color-grey-7);
}
</style>
