<template>
  <div>
    <div v-if="emails.length" class="d-flex flex-column mb-2 gap-2">
      <div v-for="(row, idx) in emails" :key="idx" class="d-flex align-items-center">
        <BRow class="w-100">
          <BCol md="4">{{ $t('models.form.emails.to') }}: {{ row.to }}</BCol>
          <BCol md="5">{{ $t('models.form.emails.subject') }}: {{ row.subject }}</BCol>
          <BCol md="3">
            <template v-if="row.chunk">{{ $t('models.form.emails.chunk') }}: #{{ row.chunk }}</template>
          </BCol>
        </BRow>
        <div class="d-flex flex-column flex-md-row gap-1 gap-md-2">
          <BButton variant="outline-secondary" size="sm" @click="() => editEmail(idx)">
            <i class="icon icon-edit fa-fw" />
          </BButton>
          <BButton variant="outline-danger" size="sm" @click="() => removeEmail(idx)">
            <i class="icon icon-times fa-fw" />
          </BButton>
        </div>
      </div>
    </div>

    <BButton variant="outline-secondary" size="sm" @click="createEmail">{{ $t('models.form.emails.add') }}</BButton>

    <MmxModal v-if="modalVisible" ref="modal" @keydown="onKeydown" @shown="onShown" @hidden="modalVisible = false">
      <template #title>{{ $t('models.form.emails.add') }}</template>
      <BFormGroup :label="$t('models.form.emails.to')">
        <BFormInput ref="input" v-model="form.to" type="email" autofocus />
      </BFormGroup>
      <BFormGroup :label="$t('models.form.emails.subject')">
        <BFormInput v-model="form.subject" />
      </BFormGroup>
      <BFormGroup :label="$t('models.form.emails.chunk')">
        <MmxInputComboBox v-model="form.chunk" url="mgr/elements/chunks" text-field="name">
          <template #default="{item}">
            <div v-if="item.category?.id" class="small text-secondary">{{ item.category.category }} /</div>
            {{ item.name }}
          </template>
        </MmxInputComboBox>
      </BFormGroup>
      <BFormGroup>
        <BFormCheckbox v-model="form.skip_files">{{ $t('models.form.emails.skip_files') }}</BFormCheckbox>
      </BFormGroup>

      <BAlert :model-value="true" variant="light">
        <div v-html="$t('models.form.emails.desc')" />
      </BAlert>

      <template #footer="{hide}">
        <BButton @click="() => hide()">{{ $t('actions.cancel') }}</BButton>
        <BButton variant="primary" :disabled="!canAdd" @click="addEmail">{{ $t('actions.add') }}</BButton>
      </template>
    </MmxModal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Array as PropType<Record<string, any>[]>,
    required: true,
  },
})

const $t = useLexicon
const emit = defineEmits(['update:modelValue'])
const emails: Ref<Record<string, any>[]> = ref([])
const modalVisible = ref(false)
const form: Ref<Record<string, any>> = ref({})
const modal = ref()
const input = ref()

if (props.modelValue && props.modelValue.length > 0) {
  emails.value = props.modelValue
}

const canAdd = computed(() => {
  return (
    form.value &&
    Object.keys(form.value).length &&
    form.value.to &&
    (form.value.to.includes('@') || form.value.to.includes('[[+')) &&
    form.value.subject
  )
})

function createEmail() {
  form.value = {to: '', subject: '', chunk: 0, skip_files: false, idx: null}
  modalVisible.value = true
}

function editEmail(idx: number) {
  form.value = {...emails.value[idx], idx}
  modalVisible.value = true
}

function addEmail() {
  if (canAdd.value) {
    const {idx} = form.value
    delete form.value.idx
    if (idx === null) {
      emails.value.push(form.value)
    } else {
      emails.value[idx] = form.value
    }
    onHide()
  }
}

function removeEmail(idx: number) {
  emails.value.splice(idx, 1)
}

function onKeydown(e: KeyboardEvent) {
  if (e.code === 'Escape') {
    e.stopPropagation()
    e.preventDefault()
    onHide()
  } else if (e.code === 'Enter') {
    e.stopPropagation()
    e.preventDefault()
    addEmail()
  }
}

function onShown() {
  if (input.value) {
    input.value.$el.focus()
  }
}

function onHide() {
  if (modal.value) {
    modal.value.hide()
  } else {
    modalVisible.value = true
  }
}

watch(
  emails,
  (newValue) => {
    if (newValue.length > 0) {
      emit('update:modelValue', newValue)
    } else {
      emit('update:modelValue', null)
    }
  },
  {deep: true},
)

onMounted(() => {
  if (!emails.value.length) {
    createEmail()
  }
})
</script>
