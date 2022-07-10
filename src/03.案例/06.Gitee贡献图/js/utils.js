function getLastYearToday(date) {
  let year = date.getFullYear() - 1;
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return new Date(`${ year }-${ month }-${ day }`);
}

function getPointsData(date) {
  let outcome = [];
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let end = day;
  for ( let m = 0; m < 12; m++ ) {
    let maxDayOfMonth = new Date(year, month, 0).getDate();
    for ( let d = day; d <= maxDayOfMonth; d++ ) {
      let count = Math.floor(Math.random() * 30);
      let date = `${ year }-${ month }-${ d }`;
      outcome.push({ date, count });
    }
    month++;
    day = 1;
    if ( month > 12 ) {
      month = 1;
      year++;
    }
  }

  for ( let d = 1; d <= end; d++ ) {
    let count = Math.floor(Math.random() * 30);
    let date = `${ year }-${ month }-${ d }`;
    outcome.push({ date, count });
  }
  return outcome;
}