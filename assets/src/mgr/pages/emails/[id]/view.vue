<template>
  <MmxModal :title="record.subject" size="lg" :cancel-title="$t('actions.close')">
    <BFormGroup :label="$t('models.email.body')">
      <iframe class="w-100 border-0" :srcdoc="record.body" @load="resizeIframe" />
    </BFormGroup>

    <BFormGroup v-if="record.error" :label="$t('models.email.error')">
      <pre style="white-space: pre-line" class="p-2 border rounded bg-light">{{ record.error }}</pre>
    </BFormGroup>
  </MmxModal>
</template>

<script setup lang="ts">
const record: Ref<Record<string, any>> = ref({})
const url = 'mgr/emails/' + useRoute().params.id
const $t = useLexicon

try {
  record.value = await useGet(url)
} catch (e) {
  useError()
}

function resizeIframe({target}: {target: HTMLIFrameElement}) {
  target.style.height = target.contentWindow?.document.body.scrollHeight + 'px'
}
</script>
