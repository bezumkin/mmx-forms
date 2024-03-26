<template>
  <MmxModal :title="title" size="lg" cancel-title="actions.close">
    <div class="vueform-app bg-light p-3 rounded">
      <AppVueform :model-value="record.values" :schema="record.form.schema" disabled disabled-fields sync />
    </div>
  </MmxModal>
</template>

<script setup lang="ts">
const record: Ref<Record<string, any>> = ref({})
const url = 'mgr/submissions/' + useRoute().params.id
const title = computed(() => record.value?.form.title || '')

try {
  record.value = await useGet(url)
} catch (e) {
  useError()
}
</script>
