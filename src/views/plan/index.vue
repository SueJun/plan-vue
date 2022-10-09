<script lang="ts" setup>
import dayjs from 'dayjs'
import { computed, ref } from 'vue'
import { NTabs, NTabPane } from 'naive-ui'
import { MONTH_MAP } from '@/constants'
import { getWeeksByDay } from '@/utils/util'

const activeWeek = ref('')

// 当前月份
const currentMonth = computed(() => {
  const month = parseFloat(dayjs().format('M'))
  return MONTH_MAP.get(month).zh
})

// 当前选中月份的周
const monthWeek = computed(() => {
  const startMonth = dayjs().startOf('month')
  const endMonth = dayjs().endOf('month')
  return getWeeksByDay(startMonth, endMonth)
})

// 更改当前周
const changeActiveWeek = (weekKey: string) => {
  activeWeek.value = weekKey
}


</script>
<template>
  <div>
    <div>{{currentMonth}}</div>
    <n-tabs type="card" size="small">
      <n-tab-pane v-for="item in monthWeek" :name="item.key" :tab="`${item.week}周`" :key="item.key">

      </n-tab-pane>
    </n-tabs>
    <div>
      拖拽面板
    </div>

  </div>
</template>
<style lang="scss" scoped>
</style>