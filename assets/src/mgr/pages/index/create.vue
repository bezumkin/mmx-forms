<template>
  <MmxModal v-model="record" v-bind="properties">
    <template #form-fields>
      <FormsForm ref="form" v-model="record" />
    </template>
  </MmxModal>
</template>

<script setup lang="ts">
const form = ref()
const record = ref({
  title: '',
  schema: '',
  active: true,
})

const properties = {
  url: 'mgr/forms',
  beforeSubmit(values: any) {
    return form.value?.verify(values)
  },
  title: useLexicon('models.form.title_one'),
  method: 'put',
  size: 'lg',
}
</script>
