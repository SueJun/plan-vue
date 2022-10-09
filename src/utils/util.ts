import dayjs from "dayjs";

/**
 * 获取两个日期之间的周
 * @startDate 开始日期
 * @endDate 结束日期
 */
export function getWeeksByDay(startDate, endDate) {
  const startWeek = dayjs(startDate).isoWeek();
  const endWeek = dayjs(endDate).isoWeek();
  if (endDate - startDate <= 1)
    return [
      {
        key: dayjs(dayjs().isoWeek(startWeek)).format("YYYYMMDD"),
        week: startWeek,
      },
      {
        key: dayjs(dayjs().isoWeek(endWeek)).format("YYYYMMDD"),
        week: endWeek,
      },
    ];
  let result = [];
  for (let i = startWeek; i < endWeek; i++) {
    const record = {
      key: dayjs(dayjs().isoWeek(i)).format("YYYYMMDD"),
      week: i,
    };
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

/**
 * 获取周的日期范围
 * @startDate 开始日期
 */
export function getWeekDays(startDate) {
  console.log(startDate, 'startDate---111')
  const result = [];
  for (let i = 0; i <7; i++) {
    const date = dayjs(startDate).subtract(i, "day").format("MM-DD");
    result.unshift(date);
  }
  console.log(result, "result");
  return result;
}
