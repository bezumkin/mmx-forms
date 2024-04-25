<template>
  <div class="overflow-auto vh-100 p-3">
    <div class="d-flex align-items-center gap-1">
      <h4 class="m-0">{{ $t('menu_name') }}</h4>
      <Transition name="fade">
        <div v-if="current" class="small text-secondary">
          {{ current }}
          <sup v-if="available">{{ $t('version.available', {version: available}) }}</sup>
        </div>
      </Transition>
    </div>
    <div class="small text-secondary">{{ $t('menu_desc') }}</div>

    <BNav tabs class="justify-content-between justify-content-md-start mt-3">
      <BNavItem v-for="(section, idx) in sections" :key="idx" :to="{name: section.route}" active-class="active">
        {{ $t(section.title) }}
      </BNavItem>
    </BNav>
    <div class="main-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
const $t = useLexicon

const sections = [
  {title: 'models.form.title_many', route: 'index'},
  {title: 'models.submission.title_many', route: 'submissions'},
  {title: 'models.email.title_many', route: 'emails'},
]
const current = ref()
const available = ref()

onMounted(async () => {
  try {
    const data = await useGet('mgr/version')
    if (data.current) {
      current.value = data.current
    }
    if (data.available) {
      available.value = data.available
    }
  } catch (e) {}
})
</script>

<style scoped lang="scss">
.main-wrapper {
  border: 1px solid var(--bs-border-color);
  border-top: 0;
  border-radius: 0 0 var(--bs-border-radius) var(--bs-border-radius);
}
</style>
