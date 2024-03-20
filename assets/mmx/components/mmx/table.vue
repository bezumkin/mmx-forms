<template>
  <section class="mmx-table">
    <slot name="header">
      <BRow class="align-items-center mb-3">
        <BCol md="4">
          <slot name="header-start">
            <BButton
              v-for="(action, idx) in headerActions"
              :key="idx"
              :size="action.size || 'md'"
              :variant="action.variant || 'secondary'"
              :class="action.class || (!idx ? 'col-12 col-md-auto' : 'col-12 col-md-auto ms-md-2 mt-2 mt-md-0')"
              :to="action.route"
              @click="onClick(action)"
            >
              <i v-if="action.icon" :class="`icon icon-${action.icon} fa-fw`" /> {{ action.title }}
            </BButton>
          </slot>
        </BCol>

        <BCol md="4">
          <slot name="header-middle"></slot>
        </BCol>

        <BCol md="4" class="mt-2 mt-md-0">
          <slot name="header-end">
            <BInputGroup v-if="hasQuery">
              <template #append>
                <BButton :disabled="!tFilters.query" @click="tFilters.query = null">
                  <i class="icon icon-times fa-fw" />
                </BButton>
              </template>
              <BFormInput v-model="tFilters.query" :placeholder="$t('components.query')" />
            </BInputGroup>
          </slot>
        </BCol>
      </BRow>
    </slot>

    <BOverlay :show="loading" opacity="0.25">
      <BTable
        :items="items"
        :fields="tFields"
        :class="tableClass"
        :per-page="tLimit"
        :sort-by="tSort"
        :sort-desc="tDir === 'desc'"
        :empty-text="$t(emptyText)"
        :empty-filtered-text="$t(emptyFilteredText)"
        :stacked="stacked"
        :responsive="responsive"
        :show-empty="showEmpty"
        :sort-internal="false"
        :tbody-tr-class="rowClass"
        @sorted="onSort"
      >
        <template #cell(actions)="{item}">
          <template v-for="(action, idx) in tableActions">
            <BButton
              v-if="typeof action.isActive !== 'function' || action.isActive(item) === true"
              :key="idx"
              :size="action.size || 'sm'"
              :variant="action.variant || 'secondary'"
              :class="action.class"
              v-bind="action.route ? {to: mapRouteParams(action, item)} : {}"
              @click="onClick(action, item)"
            >
              <i v-if="action.icon" :class="`icon icon-${action.icon} fa-fw`" />
              <template v-else>{{ action.title }}</template>
            </BButton>
          </template>
        </template>

        <template v-for="slotName in Object.keys($slots)" #[slotName]="slotProps">
          <slot v-if="slotName !== 'default'" :name="slotName" v-bind="slotProps" />
        </template>
      </BTable>
    </BOverlay>

    <slot name="footer" v-bind="{refresh, total, page: tPage, limit, loading}">
      <BRow class="mt-5 align-items-center justify-content-center justify-content-md-start" no-gutters>
        <BCol cols="12" md="auto" class="d-flex justify-content-center">
          <slot name="pagination" v-bind="{refresh, total, page: tPage, limit, loading}">
            <BPagination
              v-if="total > limit"
              v-model="tPage"
              :total-rows="total"
              :per-page="limit"
              :limit="pageLimit"
              class="mb-md-0 me-md-3"
            />
          </slot>
        </BCol>
        <BCol cols="12" md="auto" class="d-flex align-items-center justify-content-center gap-2">
          <slot name="pagination-data" v-bind="{refresh, total, page: tPage, limit, loading}">
            <BButton class="border-0" @click="() => refresh()">
              <BSpinner v-if="loading" :small="true" />
              <i v-else class="icon icon-repeat fa-fw" />
            </BButton>
            {{ $t('components.records', {total}, total) }}
          </slot>
        </BCol>
      </BRow>
    </slot>

    <Suspense>
      <slot name="default" />
    </Suspense>

    <slot name="delete" v-bind="deleteProps">
      <MmxConfirm
        v-if="deleteVisible"
        :title="deleteTitle"
        :on-ok="deleteItem"
        ok-title="actions.delete"
        @hidden="onDeleteCancel"
      >
        <BOverlay :opacity="0.5" :show="deleteLoading">
          <div v-html="$t(deleteText)" />
        </BOverlay>
      </MmxConfirm>
    </slot>
  </section>
</template>

<script setup lang="ts">
import {computed, type PropType, type Ref, ref, watch} from 'vue'
import type {Breakpoint, TableField, TableItem} from 'bootstrap-vue-next'
import type {RouteLocationRaw} from 'vue-router'
import type {MmxTableAction, MmxTableOnLoad} from '../../types'
import {useGet, useDelete} from '../../utils/use-api'
import {useLexicon} from '../../utils/use-lexicon'
import {useConfig} from '../../utils/use-config'

const emit = defineEmits(['update:modelValue', 'update:sort', 'update:dir', 'update:limit', 'update:filters', 'delete'])
const props = defineProps({
  modelValue: {
    type: Number,
    default: null,
  },
  url: {
    type: String,
    required: true,
    default: '',
  },
  fields: {
    type: Array as PropType<TableField[]>,
    default() {
      return []
    },
  },
  filters: {
    type: Object as PropType<Record<string, any>>,
    default() {
      return {}
    },
  },
  updateKey: {
    type: String,
    default: '',
  },
  primaryKey: {
    type: [String, Array],
    default: 'id',
  },
  sort: {
    type: String,
    default: null,
  },
  dir: {
    type: String,
    default: 'asc',
  },
  limit: {
    type: Number,
    default: Number(useConfig('default_per_page')) || 20,
  },
  stacked: {
    type: String as PropType<Breakpoint>,
    default: undefined,
  },
  responsive: {
    type: Boolean,
    default: true,
  },
  showEmpty: {
    type: Boolean,
    default: true,
  },
  headerActions: {
    type: Array as PropType<MmxTableAction[]>,
    default() {
      return []
    },
  },
  tableActions: {
    type: Array as PropType<MmxTableAction[]>,
    default() {
      return []
    },
  },
  rowClass: {
    type: Function as PropType<(item: TableItem | null, type: string) => string | any[] | null | undefined>,
    default() {
      return ''
    },
  },
  tableClass: {
    type: [String, Array, Object],
    default: 'mt-3 mt-md-0',
  },
  pageLimit: {
    type: Number,
    default: 7,
  },
  onLoad: {
    type: Function as PropType<MmxTableOnLoad>,
    default(data: any) {
      return data
    },
  },
  emptyText: {
    type: String,
    default: 'components.no_data',
  },
  emptyFilteredText: {
    type: String,
    default: 'components.no_results',
  },
  deleteTitle: {
    type: String,
    default: 'components.delete.title',
  },
  deleteText: {
    type: String,
    default: 'components.delete.confirm',
  },
})

const $t = useLexicon
const internalValue = ref(1)
const tSort = ref(props.sort)
const tDir = ref(props.dir)
const tLimit = ref(props.limit)
const tFilters: Ref<Record<string, any>> = ref(props.filters)
const tPage = computed({
  get() {
    return props.modelValue === null ? internalValue.value : props.modelValue
  },
  set(newValue) {
    internalValue.value = Number(newValue)
    emit('update:modelValue', newValue)
  },
})
const tFields = computed(() => {
  const fields = [...props.fields]
  if (props.tableActions.length && fields.findIndex((item) => item.key === 'actions') === -1) {
    fields.push({key: 'actions', label: '', class: 'table-actions'})
  }
  return fields
})
const hasQuery = computed(() => {
  return Object.keys(tFilters.value).includes('query')
})

const loading = ref(false)
const total = ref(0)
const items = ref([])

const deleteVisible = ref(false)
const deleteLoading = ref(false)
const deleting: Ref<Record<any, any>> = ref({})
const deleteProps = {item: deleting, visible: deleteVisible, loading: deleteLoading, deleteItem}

const params = computed(() => {
  return {
    limit: props.limit,
    page: tPage.value,
    ...getParams(true),
  }
})

function onSort(field: string, desc: boolean) {
  tSort.value = field
  tDir.value = desc ? 'desc' : 'asc'
  refresh()
}

function mapRouteParams(action: MmxTableAction, item: Record<string, any>): RouteLocationRaw | undefined {
  if (!action.route) {
    return undefined
  }
  if (!action.map) {
    action.map = {}
    if (Array.isArray(props.primaryKey)) {
      props.primaryKey.forEach((i: any) => {
        // @ts-ignore
        action.map[i] = i
      })
    } else {
      action.map[props.primaryKey] = props.primaryKey
    }
  }
  const params: Record<string, any> = {}
  for (const key of Object.keys(action.map)) {
    const val = action.map[key]
    if (/\./.test(val)) {
      const keys = val.split('.')
      let local = {...item}
      for (const i of keys) {
        local = local[i]
      }
      params[key] = local
    } else {
      params[key] = item[val]
    }
  }
  return {...action.route, params}
}

function onClick(action: MmxTableAction, item: Record<string, any> | undefined = undefined) {
  if (action.function) {
    if (typeof action.function === 'function') {
      if (item) {
        action.function(JSON.parse(JSON.stringify(item)))
      } else {
        action.function()
      }
    }
  }
}

function getParams(asObject = false) {
  const params: Record<string, any> = {}
  Object.keys(props.filters).forEach((i) => {
    if (props.filters[i] !== '' && props.filters[i] !== null) {
      params[i] =
        typeof props.filters[i] === 'object' && !asObject ? JSON.stringify(props.filters[i]) : props.filters[i]
    }
  })
  if (tSort.value) {
    params.sort = tSort.value
    params.dir = tDir.value
  }

  return asObject ? JSON.parse(JSON.stringify(params)) : new URLSearchParams(params).toString()
}

function onDelete(item: any) {
  deleteVisible.value = true
  deleting.value = item
}

function onDeleteCancel() {
  deleteVisible.value = false
  deleting.value = {}
}

async function deleteItem() {
  deleteLoading.value = true
  const item = deleting.value
  try {
    if (Array.isArray(props.primaryKey)) {
      const params: Record<string, any> = {}
      props.primaryKey.forEach((i: any) => {
        params[i] = item[i]
      })
      await useDelete(props.url, params)
    } else if (item[props.primaryKey]) {
      await useDelete(props.url + '/' + item[props.primaryKey])
    } else {
      await useDelete(props.url, item)
    }
    deleteVisible.value = false
    await refresh()
  } catch (e) {
  } finally {
    deleteLoading.value = false
  }
}

defineExpose({getParams, page: tPage, sort: tSort, dir: tDir, loading, delete: onDelete, refresh, items})

watch(tPage, () => {
  refresh()
})
watch(
  tFilters,
  () => {
    if (tPage.value !== 1) {
      tPage.value = 1
    }
    refresh()
  },
  {deep: true},
)

async function refresh() {
  if (loading.value) {
    return
  }
  try {
    loading.value = true
    const data = props.onLoad(await useGet(props.url, params.value))
    items.value = data.rows || []
    total.value = data.total || 0
  } catch (e) {
  } finally {
    loading.value = false
  }
}

refresh()

const updateKey = props.updateKey || props.url.split('/').join('-')
provide('refreshTable', (key: string) => {
  if (updateKey === key) {
    refresh()
  }
})
</script>
