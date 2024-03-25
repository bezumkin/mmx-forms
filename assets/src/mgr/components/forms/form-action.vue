<template>
  <div>
    <BFormGroup :label="$t('models.form.action')" :description="$t('models.form.action_desc')">
      <BFormSelect v-model="action" @change="onSelect">
        <BFormSelectOption v-for="option in actionTypes" :key="option" :value="option">
          {{ $t('models.form.actions.' + option) }}
        </BFormSelectOption>
      </BFormSelect>
    </BFormGroup>

    <BFormText v-if="action === 'reset'">{{ $t('models.form.actions.reset_desc') }}</BFormText>

    <BFormGroup v-else-if="action === 'redirect'" :description="$t('models.form.actions.redirect_desc')">
      <BFormInput v-model="redirectValue" autofocus required @update:model-value="onInput" />
    </BFormGroup>

    <BFormGroup v-else-if="action === 'message'" :description="$t('models.form.actions.message_desc')">
      <Codemirror
        v-model="messageValue"
        :extensions="[html()]"
        :style="{height: '200px'}"
        autofocus
        required
        @change="onInput"
      />
    </BFormGroup>

    <BFormGroup v-else-if="action === 'snippet'" :description="$t('models.form.actions.snippet_desc')">
      <MmxInputComboBox
        v-model="snippetValue"
        url="mgr/elements/snippets"
        text-field="name"
        autofocus
        required
        @update:model-value="onInput"
      >
        <template #default="{item}">
          <div v-if="item.category?.id" class="small text-secondary">{{ item.category.category }} /</div>
          {{ item.name }}
        </template>
      </MmxInputComboBox>
    </BFormGroup>
  </div>
</template>

<script setup lang="ts">
import {html} from '@codemirror/lang-html'
import {Codemirror} from 'vue-codemirror'

const props = defineProps({
  modelValue: {
    type: Object as PropType<Record<string, any>>,
    required: true,
  },
})

const $t = useLexicon
const emit = defineEmits(['update:modelValue'])

const action = ref()
const redirectValue = ref()
const messageValue = ref()
const snippetValue = ref()
const actionTypes = ['reset', 'message', 'redirect', 'snippet']

if (!props.modelValue) {
  action.value = 'reset'
} else {
  action.value = props.modelValue.type
  if (action.value === 'message') {
    messageValue.value = props.modelValue.value
  } else if (action.value === 'redirect') {
    redirectValue.value = props.modelValue.value
  } else {
    snippetValue.value = props.modelValue.value
  }
}

function onInput(value: string | number | null) {
  if (!value) {
    emit('update:modelValue', null)
  } else {
    emit('update:modelValue', {type: action, value})
  }
}

function onSelect() {
  emit('update:modelValue', null)
}
</script>
