<template>
  <Transition mode="out-in" name="fade">
    <div v-if="msgAction" v-html="msgAction" />
    <Vueform v-else ref="form" v-model="record" :endpoint="false" :schema="schema" @submit="onSubmit" />
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
})

const loading = ref(false)
const record = ref({})
const form = ref()
const formId = ref(props.id)
const msgSuccess = useLexicon('success.form.submitted')
const msgAction = ref()

async function onSubmit() {
  loading.value = true
  try {
    const data = await usePost('web/forms/' + formId.value, record.value)
    form.value.reset()
    if (data.id) {
      formId.value = data.id
    }
    if (data.action) {
      if (data.action.type === 'message') {
        msgAction.value = data.action.value
      } else if (data.action.type === 'redirect') {
        window.location = data.action.value
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
