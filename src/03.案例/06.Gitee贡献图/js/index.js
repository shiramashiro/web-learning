function drawChartGrid() {
  let pointIndex = 0;
  let $el = $("#cb-chart .bottom .right-side");
  $el.css({ "--point-size": `${ $el.height() / 7 }px` });
  for ( let horizontal = 0; horizontal < 54; horizontal++ ) {
    for ( let vertical = 0; vertical < 7; vertical++ ) {
      $el.append(`<div class="point" serial="${ pointIndex }"></div>`);
      pointIndex++;
    }
  }
  traverseDiamonds();
}

function drawDiamonds(index, points, monitor) {
  if ( index === 0 ) {
    $(`#cb-chart .bottom .right-side div.point[serial=5]`).nextAll().each((i, el) => {
      if ( points[i] ) {
        $(el).attr("data-content", () => `${ points[i].number }个贡献：${ points[i].date }`);
        setDiamondColor(el, points[i].number);
        monitor(i, el);
      }
    });
  } else if ( index === 1 ) {
    $(`#cb-chart .bottom .right-side div.point[serial=0]`).each((i, el) => {
      if ( points[i] ) {
        $(el).attr("data-content", () => `${ points[i].number }个贡献：${ points[i].date }`);
        setDiamondColor(el, points[i].number);
        monitor(i, el);
      }
    });
  } else {
    $(`#cb-chart .bottom .right-side div.point[serial=${ index - 2 }]`).nextAll().each((i, el) => {
      if ( points[i] ) {
        $(el).attr("data-content", () => `${ points[i].number }个贡献：${ points[i].date }`);
        setDiamondColor(el, points[i].number);
        monitor(i, el);
      }
    });
  }
}

function traverseDiamonds() {
  let nowDate = new Date();
  let oldDate = getLastYearToday(nowDate);
  let oldWeekIndex = oldDate.getDay();
  let points = getPointsData(oldDate);
  drawMonths(oldDate);
  drawDiamonds(oldWeekIndex, points, function (i, el) {
    $(el).on({
      "mouseenter": () => {
        showDiamondPopup(points[i], el);
        $(el).addClass("point-hover")
             .next(".point-popup")
             .addClass("show-popup")
             .removeClass("close-popup");
      },
      "mouseleave": () => {
        $(el).removeClass("point-hover")
             .next(".point-popup")
             .addClass("close-popup")
             .removeClass("show-popup");
      }
    });
  });
}

function setDiamondColor(diamondDom, number) {
  if ( number > 1 && number <= 5 ) {
    $(diamondDom).addClass("a");
  } else if ( number > 5 && number <= 10 ) {
    $(diamondDom).addClass("b");
  } else if ( number > 10 && number <= 15 ) {
    $(diamondDom).addClass("c");
  } else if ( number > 15 && number <= 20 ) {
    $(diamondDom).addClass("d");
  } else {
    $(diamondDom).addClass("e");
  }
}

function showDiamondPopup(data, el) {
  $(el).after(`
    <div class="point-popup close-popup" style="top: ${ el.offsetTop }px; left: ${ el.offsetLeft + el.clientWidth * 1.5 }px;">
      <div>${ data.number }个贡献：${ data.date }</div>
    </div>
  `);
}

function drawMonths(oldDate) {
  let oldDateMonthIndex = oldDate.getMonth();
  for ( let i = 0; i < 12; i++ ) {
    if ( oldDateMonthIndex === 12 ) {
      oldDateMonthIndex = 0;
    }
    $("#cb-chart .top-bar .months").append(`
      <div class="month">${ months[oldDateMonthIndex] }</div>
    `);
    oldDateMonthIndex++;
  }
}