<template>
  <div>
    <BFormGroup :label="$t('models.form.title')">
      <BFormInput v-model="record.title" required />
    </BFormGroup>

    <BFormGroup>
      <BFormCheckbox v-model="record.active">{{ $t('models.form.active') }}</BFormCheckbox>
    </BFormGroup>

    <BTabs content-class="pt-2 mb-3">
      <BTab :title="$t('models.form.schema')">
        <div class="form-control p-0 overflow-hidden">
          <Codemirror v-model="record.schema" :extensions="[javascript(), json()]" :style="{height: '400px'}" />
        </div>
      </BTab>
      <BTab :title="$t('models.form.preview')" :disabled="!canPreview" lazy>
        <div class="vueform-app bg-light p-3 border rounded">
          <AppVueform :schema="record.schema" disabled />
        </div>
      </BTab>
      <BTab :title="$t('models.form.help')">
        <div class="bg-light p-3 border rounded" v-html="$t('models.form.help_text')" />
      </BTab>
    </BTabs>

    <BFormGroup :label="$t('models.form.prepare_snippet')" :description="$t('models.form.prepare_snippet_desc')">
      <MmxInputComboBox v-model="record.prepare_id" url="mgr/elements/snippets" text-field="name">
        <template #default="{item}">
          <div v-if="item.category?.id" class="small text-secondary">{{ item.category.category }} /</div>
          {{ item.name }}
        </template>
      </MmxInputComboBox>
    </BFormGroup>

    <BFormGroup>
      <BFormCheckbox v-model="record.email">{{ $t('models.form.email') }}</BFormCheckbox>
      <FormsFormEmails v-if="record.email" v-model="record.emails" class="p-2 bg-light rounded" />
    </BFormGroup>

    <FormsFormAction v-model="record.action" />
  </div>
</template>

<script setup lang="ts">
import {Codemirror} from 'vue-codemirror'
import {javascript} from '@codemirror/lang-javascript'
import {json} from '@codemirror/lang-json'

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
    const value = props.modelValue
    if (value.schema) {
      // Convert old schema to JSON format
      try {
        JSON.parse(value.schema)
      } catch (e) {
        const schema = useCheckSchema(value.schema)
        if (schema) {
          value.schema = schema
        }
      }
    }
    return value
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})
const canPreview = computed(() => Boolean(useCheckSchema(record.value?.schema)))

function verify(values: Record<string, any>) {
  const schema = useCheckSchema(values.schema)
  return schema ? {...values, schema} : useLexicon('errors.form.schema')
}

defineExpose({verify})
</script>
