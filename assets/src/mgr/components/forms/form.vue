<template>
  <div>
    <BFormGroup :label="$t('models.form.title')">
      <BFormInput v-model="record.title" required />
    </BFormGroup>

    <BFormGroup>
      <BFormCheckbox v-model="record.active">{{ $t('models.form.active') }}</BFormCheckbox>
    </BFormGroup>

    <BTabs content-class="pt-2">
      <BTab :title="$t('models.form.schema')">
        <div class="form-control p-0 overflow-hidden">
          <Codemirror v-model="record.schema" :extensions="[javascript()]" :style="{height: '400px'}" />
        </div>
      </BTab>
      <BTab :title="$t('models.form.preview')" :disabled="!canPreview" lazy>
        <div class="vueform-app bg-light p-3 border rounded">
          <Vueform v-bind="properties" />
        </div>
      </BTab>
      <BTab :title="$t('models.form.help')">
        <div class="bg-light p-3 border rounded" v-html="$t('models.form.help_text')" />
      </BTab>
    </BTabs>

    <BFormGroup class="mt-4">
      <BFormCheckbox v-model="record.email">{{ $t('models.form.email') }}</BFormCheckbox>
      <FormsFormEmails v-if="record.email" v-model="record.emails" class="p-2 bg-light rounded" />
    </BFormGroup>

    <FormsFormAction v-model="record.action" />
  </div>
</template>

<script setup lang="ts">
import {Codemirror} from 'vue-codemirror'
import {javascript} from '@codemirror/lang-javascript'

const props = defineProps({
  modelValue: {
    type: Object as PropType<Record<string, any>>,
    required: true,
  },
})

const $t = useLexicon
const emit = defineEmits(['update:modelValue'])
const record: WritableComputedRef<Record<string, any>> = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})
const canPreview = computed(() => Boolean(checkSchema(record.value)))

function checkSchema(values: Record<string, any>) {
  try {
    // eslint-disable-next-line no-eval
    const obj = eval('(' + values.schema + ')')
    if (obj) {
      return obj
    }
  } catch (e) {
    return false
  }
}

function verify(values: Record<string, any>) {
  return checkSchema(values) ? values : useLexicon('errors.form.schema')
}

const properties = computed(() => {
  const data = {disabled: true}
  const schema = checkSchema(record.value)
  if (schema) {
    return 'schema' in schema ? {...schema, ...data} : {...data, schema}
  }
  return data
})

defineExpose({verify})
</script>
