<template>
  <Vueform v-bind="properties" />
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
  schema: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  sync: {
    type: Boolean,
    default: false,
  },
})

const properties = computed(() => {
  const data: Record<string, any> = {...props}
  delete data.schema
  const schema = useCheckSchema({schema: props.schema})
  if (schema) {
    return 'schema' in schema ? {...schema, ...data} : {...data, schema}
  }
  return {...data, schema: {}}
})
</script>
