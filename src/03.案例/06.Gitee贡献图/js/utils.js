function getLastYearToday(date) {
  let year = date.getFullYear() - 1;
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return new Date(`${ year }-${ month }-${ day }`);
}

function getPointsData(date) {
  let result = [];
  let startYear = date.getFullYear();
  let startMonth = date.getMonth();
  let resultIndex = 0;
  for ( let i = 0; i < 12; i++ ) {
    let days = new Date(startYear, startMonth, 0).getDate();
    for ( let d = 0; d < days; d++ ) {
      result.push({
        date: `${ startYear }-${ startMonth + 1 }-${ d + 1 }`,
        num: Math.floor(Math.random() * 30)
      });
      resultIndex++;
    }
    startMonth++;
    if ( startMonth >= 12 ) {
      startMonth = 0;
      startYear++;
    }
  }
  return result;
}