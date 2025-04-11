<script setup lang="ts">
const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  // 其他原生 NuxtLink props...
})

const { addLocalePrefix, shouldAddLocale } = useLocalizedPath()
const route = useRoute()

// 处理路由对象或字符串路径
const resolveLocalizedPath = (to: string | object): string => {
  if (typeof to === 'string') {
    return shouldAddLocale(to) ? addLocalePrefix(to) : to
  }

  // 处理路由对象
  if ('path' in to && typeof to.path === 'string') {
    return shouldAddLocale(to.path) ? addLocalePrefix(to.path) : to.path
  }

  // 处理命名路由
  const router = useRouter()
  const resolved = router.resolve(to)
  return shouldAddLocale(resolved.path) ? addLocalePrefix(resolved.path) : resolved.path
}

// 最终处理后的路径
const localizedTo = computed(() => {
  const path = resolveLocalizedPath(props.to)

  // 保持原有结构
  if (typeof props.to === 'object') {
    return {
      ...props.to,
      path: path,
    }
  }

  return path
})
</script>

<template>
  <NuxtLink :to="localizedTo" v-bind="$attrs">
    <slot />
  </NuxtLink>
</template>
