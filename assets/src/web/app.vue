<template>
  <Transition mode="out-in" name="fade">
    <div v-if="msgAction" v-html="msgAction" />
    <Vueform v-else ref="form" v-model="record" v-bind="properties" />
  </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  schema: {
    type: Object as PropType<Record<string, any>>,
    default() {
      return {}
    },
  },
  locale: {
    type: String,
    default: 'en',
  },
  context: {
    type: String,
    default: 'web',
  },
})

const record = ref({})
const loading = ref(false)
const form = ref()
const formKey = ref(props.id)
const msgSuccess = useLexicon('success.form.submitted')
const msgAction = ref()

const properties = computed(() => {
  const data = {
    endpoint: false,
    formKey: formKey.value,
    locale: props.locale,
    loading,
    onSubmit,
  }

  return 'schema' in props.schema ? {...props.schema, ...data} : {...data, schema: props.schema}
})

async function onSubmit() {
  loading.value = true
  try {
    const data = await usePost('web/forms/' + formKey.value + '?context=' + props.context, record.value)
    form.value.reset()
    if (data.id) {
      formKey.value = data.id
    }
    if (data.action) {
      if (data.action.type === 'message' && data.action.value) {
        const re = /<script>(.*?)<\/script>/gs
        const matches = re.exec(data.action.value)
        if (matches) {
          msgAction.value = data.action.value.replace(matches[0], '')
          try {
            // eslint-disable-next-line no-eval
            eval(matches[1])
          } catch (e) {
            console.error(e)
          }
        } else {
          msgAction.value = data.action.value
        }
      } else if (data.action.type === 'redirect') {
        window.location = data.action.value
      } else if (data.action.type === 'reset' && data.action.value) {
        useToastSuccess(data.action.value)
      }
    } else if (msgSuccess.length > 0) {
      useToastSuccess(msgSuccess)
    }
  } catch (e) {
  } finally {
    loading.value = false
  }
}
</script>
