import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
dayjs.extend(weekOfYear);

/**
 * 获取两个日期之间的周
 * @startDate 开始日期
 * @endDate 结束日期
 */
export function getWeeksByDay(startDate, endDate) {
  const startWeek = dayjs(startDate).week();
  const endWeek = dayjs(endDate).week();
  if (endDate - startDate <= 1)
    return [
      {
        key: dayjs(dayjs().week(startWeek)).format('YYYYMMDD'),
        week: startWeek,
      },
      {
        key: dayjs(dayjs().week(endWeek)).format('YYYYMMDD'),
        week: endWeek,
      },
    ];
  let result = [];
  for (let i = startWeek; i < endWeek; i++) {
    const record = {
      key: dayjs(dayjs().week(i)).format('YYYYMMDD'),
      week: i
    }
    result.push(record);
  }
  return result;
}

/**
 * 生成key值
 */
function createDayKey(day) {
  return;
}
