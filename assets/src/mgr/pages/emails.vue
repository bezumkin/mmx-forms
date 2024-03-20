<template>
  <MmxTable
    ref="table"
    :url="url"
    :table-actions="tableActions"
    :header-actions="headerActions"
    :fields="fields"
    :filters="filters"
    sort="id"
    dir="desc"
  >
    <template #cell(sent)="{value}">
      <i v-if="value === false" class="icon icon-times fa-fw text-danger" />
      <i v-else-if="value === true" class="icon icon-check fa-fw text-success" />
      <i v-else class="icon icon-hourglass-half text-secondary fa-fw" />
    </template>

    <RouterView />

    <MmxConfirm v-if="confirm" :on-ok="deleteUnsent" @hidden="confirm = false">
      <div v-html="$t('models.email.confirm_delete_unsent')" />
    </MmxConfirm>
  </MmxTable>
</template>

<script setup lang="ts">
const $t = useLexicon
const table = ref()

const url = 'mgr/emails'
const fields = computed(() => {
  return [
    {key: 'id', label: $t('models.submission.id'), sortable: true},
    {key: 'form.title', label: $t('models.form.title_one'), sortable: true},
    {key: 'to', label: $t('models.email.to'), sortable: true},
    {key: 'subject', label: $t('models.email.subject'), sortable: true},
    {key: 'sent', label: $t('models.email.sent'), sortable: true},
    {key: 'sent_at', label: $t('models.email.sent_at'), sortable: true, formatter: useDatetime},
  ]
})
const headerActions = computed(() => {
  return [{function: onDeleteUnsent, icon: 'trash', title: $t('actions.delete_unsent'), variant: 'danger'}]
})
const tableActions = computed(() => {
  return [
    {function: onSend, icon: 'paper-plane', title: $t('actions.send'), isActive: canSend},
    {route: {name: 'emails-id-view'}, icon: 'eye', title: $t('actions.view')},
    {function: table.value?.delete, icon: 'times', title: $t('actions.delete'), variant: 'danger'},
  ]
})

const filters = ref({query: ''})
const confirm = ref(false)

function canSend(item: Record<string, any>) {
  return item && !item.sent
}

async function onSend(item: Record<string, any>) {
  table.value.loading = true
  try {
    await usePost(url + '/' + item.id)
  } catch (e) {
  } finally {
    table.value.loading = false
    table.value.refresh()
  }
}

function onDeleteUnsent() {
  confirm.value = true
}

async function deleteUnsent() {
  table.value.loading = true
  try {
    await useDelete(url)
  } catch (e) {
  } finally {
    table.value.loading = false
    table.value.refresh()
  }
}
</script>
