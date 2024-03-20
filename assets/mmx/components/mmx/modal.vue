<template>
  <section class="mmx-modal">
    <BModal ref="modal" v-model="showModal" v-bind="modalProps">
      <template #default>
        <BOverlay :opacity="0.5" :show="loading">
          <BForm ref="form" @submit.prevent="submit" @keydown="onKeydown">
            <slot name="form-fields" v-bind="{record, loading, hide, submit}" />
            <input type="submit" class="d-none" />
          </BForm>
        </BOverlay>
      </template>
      <template #footer>
        <slot name="footer" v-bind="{record, loading, hide, submit, formSubmit}">
          <BButton :variant="props.cancelVariant" :disabled="loading" @click="hide">
            {{ useLexicon(cancelTitle) }}
          </BButton>
          <BButton v-if="url" :variant="props.okVariant" :disabled="loading" @click.prevent="formSubmit">
            {{ useLexicon(okTitle) }}
          </BButton>
        </slot>
      </template>
      <template v-for="slotName in Object.keys($slots)" #[slotName]="slotProps">
        <slot :name="slotName" v-bind="{...slotProps, record, loading, hide, submit, formSubmit}" />
      </template>
    </BModal>
  </section>
</template>

<script setup lang="ts">
import {computed, ref, onMounted, useAttrs} from 'vue'
import {BModal} from 'bootstrap-vue-next'
import {usePost, usePut, usePatch} from '../../utils/use-api'
import {useLexicon} from '../../utils/use-lexicon'
import {useToastError} from '../../utils/use-toast'

const emit = defineEmits(['update:modelValue', 'after-submit'])
const modal = ref()
const form = ref()
const router = useRouter()
const route = useRoute()

const loading = ref(false)
const record = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})

const props = defineProps({
  ...BModal.props,
  url: {
    type: String,
    default: '',
  },
  modelValue: {
    type: Object,
    default() {
      return {}
    },
  },
  method: {
    type: String,
    default: 'POST',
  },
  updateKey: {
    type: String,
    default: '',
  },
  show: {
    type: Boolean,
    default: true,
  },
  okTitle: {
    type: String,
    default: 'actions.submit',
  },
  cancelTitle: {
    type: String,
    default: 'actions.cancel',
  },
  beforeSubmit: {
    type: Function,
    default(record: any) {
      return record
    },
  },
  teleportDisabled: {
    type: Boolean,
    default: true,
  },
})

const showModal = ref(false)
const modalProps = computed(() => {
  const values = {...useAttrs(), ...props}
  delete values.modelValue
  delete values.show
  delete values.url
  delete values.method
  delete values.beforeSubmit

  if (!values.onHidden) {
    values.onHidden = goBack
  }

  if (!values.onShown) {
    values.onShown = focusField
  }

  return values
})

const updateKey = props.updateKey || props.url?.split('/').join('-')

function formSubmit() {
  if (form.value && form.value.$el) {
    const submit = form.value.$el.querySelector('[type="submit"]')
    if (submit) {
      submit.click()
    } else {
      submit()
    }
  } else {
    submit()
  }
}

async function submit() {
  if (!props.url) {
    return
  }
  try {
    const values = props.beforeSubmit(JSON.parse(JSON.stringify(record.value)))
    if (values) {
      if (typeof values === 'string') {
        useToastError(values)
      } else {
        loading.value = true
        const method = props.method.toLowerCase()
        const methods = {put: usePut, patch: usePatch}
        const useMethod = method in methods ? methods[method] : usePost
        const data = await useMethod(props.url, values)
        emit('after-submit', data)
        hide()
        refreshTable(updateKey)
      }
    }
  } catch (e) {
  } finally {
    loading.value = false
  }
}

function hide() {
  modal.value.$emit('hide')
  showModal.value = false
}

function goBack() {
  const idx = route.matched.findIndex((item) => item.name === route.name)
  if (idx > 0 && route.matched[idx - 1]) {
    router.push({name: route.matched[idx - 1].name})
  } else {
    router.go(-1)
  }
}

function focusField() {
  if (form.value && form.value.$el) {
    const input = form.value.$el.querySelector('input:not(:disabled)')
    if (input) {
      input.focus()
    }
  }
}

function onKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.code === 'KeyS') {
    e.preventDefault()
    formSubmit()
  }
}

onMounted(() => {
  if (props.show) {
    showModal.value = true
  }
})

defineExpose({hide, submit, formSubmit})

const refreshTable = inject('refreshTable') || function (_key) {}
</script>
