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

    <BFormGroup v-if="action === 'redirect'" :description="$t('models.form.actions.redirect_desc')">
      <BFormInput v-model="redirectValue" autofocus required @update:model-value="onInput" />
    </BFormGroup>

    <BFormGroup v-if="action === 'message'" :description="$t('models.form.actions.message_desc')">
      <Codemirror
        v-model="messageValue"
        :extensions="[html()]"
        :style="{height: '200px'}"
        autofocus
        required
        @change="onInput"
      />
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
const actionTypes = ['reset', 'message', 'redirect']

if (!props.modelValue) {
  action.value = 'reset'
} else {
  action.value = props.modelValue.type
  if (action.value === 'message') {
    messageValue.value = props.modelValue.value
  } else {
    redirectValue.value = props.modelValue.value
  }
}

function onInput(value: string) {
  if (value.length > 0) {
    emit('update:modelValue', {type: action, value})
  } else {
    emit('update:modelValue', null)
  }
}

function onSelect() {
  emit('update:modelValue', null)
}
</script>
