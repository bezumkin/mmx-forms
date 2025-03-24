<template>
  <MmxTable
    ref="table"
    :url="url"
    :table-actions="tableActions"
    :fields="fields"
    :filters="filters"
    sort="id"
    dir="desc"
  >
    <template #header-start>
      <div class="d-flex gap-2 mb-2 mb-md-0">
        <MmxInputComboBox
          v-model="filters.form_id"
          url="mgr/forms"
          :placeholder="$t('models.submission.export_placeholder')"
        />
        <BButton :disabled="!filters.form_id" @click="() => onExport()">{{ $t('actions.export') }}</BButton>
      </div>
    </template>
    <template #header-middle>
      <MmxInputDatePicker v-model="filters.date" />
    </template>

    <RouterView />

    <MmxConfirm v-if="generating > 0" ok-variant="warning" :on-ok="generateEmails" @hidden="generating = 0">
      <div v-html="$t('models.submission.confirm_generate')" />
    </MmxConfirm>
  </MmxTable>
</template>

<script setup lang="ts">
const $t = useLexicon
const table = ref()

const url = 'mgr/submissions'
const fields = computed(() => {
  return [
    {key: 'id', label: $t('models.submission.id'), sortable: true},
    {key: 'form.title', label: $t('models.form.title_one')},
    {key: 'emails_count', label: $t('models.email.title_many'), sortable: true},
    {key: 'submitted_at', label: $t('models.submission.submitted_at'), sortable: true, formatter: useDatetime},
  ]
})
const tableActions = computed(() => {
  return [
    {route: {name: 'submissions-id-view'}, icon: 'eye', title: $t('actions.view')},
    {function: onGenerate, icon: 'sync', title: $t('actions.generate')},
    {function: table.value?.delete, icon: 'times', title: $t('actions.delete'), variant: 'danger'},
  ]
})

const filters = ref({query: '', date: [], form_id: null})
const generating = ref(0)

function onGenerate(item: Record<string, any>) {
  generating.value = item.id
}

function onExport() {
  const params = table.value.getParams()
  // console.log(params)
  window.open('/' + getNamespace() + '/' + url + '/export?' + params)
}

async function generateEmails() {
  try {
    await usePost(url + '/' + generating.value)
    table.value.refresh()
  } catch (e) {}
}
</script>
