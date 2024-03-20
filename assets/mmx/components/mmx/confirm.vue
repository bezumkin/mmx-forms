<template>
  <section class="mmx-modal mmx-confirm">
    <BModal ref="modal" :model-value="showModal" v-bind="modalProps" :title="$t(title)">
      <template #footer>
        <slot ref="footer" name="footer" v-bind="{hide}">
          <BButton name="cancel" :variant="props.cancelVariant" @click="hide">
            {{ $t(cancelTitle) }}
          </BButton>
          <BButton name="ok" :variant="props.okVariant" @click="ok">
            {{ $t(okTitle) }}
          </BButton>
        </slot>
      </template>
      <template v-for="slotName in Object.keys($slots)" #[slotName]="slotProps">
        <slot :name="slotName" v-bind="slotProps" />
      </template>
    </BModal>
  </section>
</template>

<script setup lang="ts">
import {computed, ref, onMounted, useAttrs} from 'vue'
import {BModal} from 'bootstrap-vue-next'

const $t = useLexicon
const modal = ref()
const props = defineProps({
  ...BModal.props,
  onOk: {
    type: Function,
    default: () => {},
  },
  show: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: 'components.delete.title',
  },
  centered: {
    type: Boolean,
    default: false,
  },
  okVariant: {
    type: String,
    default: 'danger',
  },
  okTitle: {
    type: String,
    default: 'actions.ok',
  },
  cancelTitle: {
    type: String,
    default: 'actions.cancel',
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

  if (!values.onShown) {
    values.onShown = focusButton
  }

  return values
})

function hide() {
  modal.value.$emit('hide')
  showModal.value = false
}

function ok() {
  hide()
  props.onOk()
}

function focusButton() {
  const button: HTMLButtonElement | undefined = document.querySelector('.mmx-confirm button[name="ok"]')
  if (button) {
    button.focus()
  }
}

onMounted(() => {
  if (props.show) {
    showModal.value = true
  }
})

defineExpose({hide, ok})
</script>
