<template>
  <MmxTable
    ref="table"
    :url="url"
    :header-actions="headerActions"
    :table-actions="tableActions"
    :fields="fields"
    :filters="filters"
    :row-class="rowClass"
    sort="id"
    dir="desc"
  >
    <RouterView />
  </MmxTable>
</template>

<script setup lang="ts">
const $t = useLexicon
const table = ref()

const url = 'mgr/forms'
const headerActions = computed(() => {
  return [{route: {name: 'index-create'}, icon: 'plus', title: $t('actions.create')}]
})
const fields = computed(() => {
  return [
    {key: 'id', label: $t('models.form.id'), sortable: true},
    {key: 'title', label: $t('models.form.title'), sortable: true},
    {key: 'submissions_count', label: $t('models.submission.title_many'), sortable: true},
    {key: 'emails_count', label: $t('models.email.title_many'), sortable: true},
  ]
})
const tableActions = computed(() => {
  return [
    {route: {name: 'index-id-edit'}, icon: 'edit', title: $t('actions.edit')},
    {function: table.value?.delete, icon: 'times', title: $t('actions.delete'), variant: 'danger'},
  ]
})

const filters = ref({query: ''})

function rowClass(item: any) {
  if (item) {
    const cls = []
    if (!item.active) {
      cls.push('inactive')
    }
    return cls
  }
}
</script>
