function getLastYearToday(date) {
  let year = date.getFullYear() - 1;
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return new Date(`${ year }-${ month }-${ day }`);
}