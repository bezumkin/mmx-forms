<template>
  <div class="overflow-auto vh-100 p-3">
    <h4 class="m-0">{{ $t('menu_name') }}</h4>
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
</script>

<style scoped lang="scss">
.main-wrapper {
  border: 1px solid var(--bs-border-color);
  border-top: 0;
  border-radius: 0 0 var(--bs-border-radius) var(--bs-border-radius);
}
</style>
