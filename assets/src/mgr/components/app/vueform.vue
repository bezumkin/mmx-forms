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
  disabledFields: {
    type: Boolean,
    default: false,
  },
  sync: {
    type: Boolean,
    default: false,
  },
  locale: {
    type: String,
    // @ts-ignore
    default: window.mmxForms?.locale || 'en',
  },
})

const properties = computed(() => {
  const data: Record<string, any> = {...props}
  delete data.disabledFields
  const parsed = useCheckSchema({schema: props.schema})
  if (parsed) {
    if ('schema' in parsed) {
      const schema = prepareSchema(parsed.schema)
      return {...parsed, ...data, schema}
    } else {
      const schema = prepareSchema(parsed)
      return {...data, schema}
    }
  }
  return {...data, schema: {}}
})

const apiUrl = '/' + getNamespace() + '/'

function prepareSchema(source: Record<string, any>) {
  const target: Record<string, any> = {}
  for (const key in source) {
    if (typeof source[key] === 'object') {
      const value = source[key]
      if ('type' in value) {
        if (props.disabledFields) {
          value.disabled = true
        }
        if (['file', 'multifile'].includes(value.type)) {
          value.url = apiUrl + 'mgr/file/'
          value.previewUrl = apiUrl + 'mgr/image/'
        }
      }
      target[key] = 'schema' in value ? {...value, schema: prepareSchema(value.schema)} : {...value}
    }
  }
  return target
}
</script>
