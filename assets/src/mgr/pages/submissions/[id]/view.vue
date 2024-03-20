<template>
  <MmxModal :title="title" size="lg" :cancel-title="$t('actions.close')">
    <div class="vueform-app bg-light p-3 rounded">
      <Vueform v-if="schema" v-model="record.values" :schema="schema" sync disabled />
    </div>
  </MmxModal>
</template>

<script setup lang="ts">
const record: Ref<Record<string, any>> = ref({})
const url = 'mgr/submissions/' + useRoute().params.id
const $t = useLexicon
const title = computed(() => record.value?.form.title || '')

const schema = computed(() => {
  try {
    // eslint-disable-next-line no-eval
    const obj = eval('(' + record.value.form.schema + ')')
    if (obj) {
      return obj
    }
  } catch (e) {
    return false
  }
})

try {
  record.value = await useGet(url)
} catch (e) {
  useError()
}
</script>
