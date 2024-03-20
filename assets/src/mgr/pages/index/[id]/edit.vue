<template>
  <MmxModal v-model="record" v-bind="properties">
    <template #form-fields>
      <FormsForm ref="form" v-model="record" />
    </template>
  </MmxModal>
</template>

<script setup lang="ts">
const record = ref({})
const form = ref()

const properties = {
  url: 'mgr/forms/' + useRoute().params.id,
  beforeSubmit(values: any) {
    return form.value?.verify(values)
  },
  title: useLexicon('models.form.title_one'),
  updateKey: 'mgr-forms',
  method: 'patch',
  size: 'lg',
}

try {
  record.value = await useGet(properties.url)
} catch (e) {
  useError()
}
</script>
