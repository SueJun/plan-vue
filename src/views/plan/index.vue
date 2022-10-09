<script lang="ts" setup>
import dayjs from 'dayjs'
import { computed, ref, watch } from 'vue'
import { NTabs, NTabPane } from 'naive-ui'
import { MONTH_MAP } from '@/constants'
import { getWeeksByDay, getWeekDays, getWeek } from '@/utils/util'

const activeWeek = ref('')

// 当前月份
const currentMonth = computed(() => {
  const month = parseFloat(dayjs().format('M'))
  return MONTH_MAP.get(month).zh
})

// 当前选中月份的周
const monthWeek = computed(() => {
  const startMonth = dayjs().startOf('month').format('YYYY-MM-DD')
  const endMonth = dayjs().endOf('month').format('YYYY-MM-DD')
  return getWeeksByDay(startMonth, endMonth)
})

const dateList = ref([])

// 更改当前周
const changeActiveWeek = (weekKey: string) => {
  console.log(weekKey, 'weekKey')
  activeWeek.value = weekKey
}

watch(activeWeek, (val) => {
  dateList.value = getWeekDays(val)
})


</script>
<template>
  <div>
    <div>{{currentMonth}}</div>
    <n-tabs type="card" size="small" @update:value="changeActiveWeek">
      <n-tab-pane v-for="item in monthWeek" :name="item.key" :tab="`${item.week}周`" :key="item.key">
      </n-tab-pane>
    </n-tabs>
    <ul class="week-day-wrapper">
      <li v-for="item in dateList" :key="item">{{item}}</li>
    </ul>
    <div>
      拖拽面板
    </div>

  </div>
</template>
<style lang="scss" scoped>
ul.week-day-wrapper {
  margin: 0;
  padding: 6px 0;
  display: flex;
  gap: 12px;
  list-style-type: none;
  li {
    flex: 1;
    cursor: pointer;
  }
}
</style>