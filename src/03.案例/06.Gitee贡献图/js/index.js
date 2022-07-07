function drawChartGrid() {
  let pointIndex = 0;
  let $el = $("#cb-chart .bottom .right-side");
  $el.css({ "--point-size": `${ $el.height() / 7 }px` });
  for ( let horizontal = 0; horizontal < 53; horizontal++ ) {
    for ( let vertical = 0; vertical < 7; vertical++ ) {
      $el.append(`<div class="point" data-index="${ pointIndex }"></div>`);
      pointIndex++;
    }
  }
  drawRealDiamond();
}

function drawRealDiamond() {
  let nowDate = new Date();
  let oldDate = getLastYearToday(nowDate);
  let nowWeekIndex = nowDate.getDay() - 1;
  let oldWeekIndex = oldDate.getDay();
  let points = getPointsData(oldDate);
  if ( oldWeekIndex === 0 ) {
    traverseDiamonds((i) => i > 5, nowWeekIndex, points);
  } else if ( oldWeekIndex === 1 ) {
    traverseDiamonds(() => true, nowWeekIndex, points);
  } else if ( oldWeekIndex >= 2 ) {
    traverseDiamonds((i) => i > oldWeekIndex - 2, nowWeekIndex, points);
  }
  drawMonths(oldDate);
}

function traverseDiamonds(valid, gap, points) {
  $(`#cb-chart .bottom .right-side .point`).each((i, el) => {
    if ( valid(i) ) {
      if ( i === 365 + gap ) {
        return false;
      } else {
        // 这个 if 判断只是临时的，避免报错，每天不管有没有贡献度都有数据对应
        if ( points[i] ) {
          $(el).attr("data-content", () => `${ points[i].num }个贡献：${ points[i].date }`);
          setDiamondColor(el, points[i].num);
        } else {
          $(el).addClass("e");
        }

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
      }
    }
  });
}

function setDiamondColor(diamondDom, times) {
  if ( times > 1 && times <= 5 ) {
    $(diamondDom).addClass("a");
  } else if ( times > 5 && times <= 10 ) {
    $(diamondDom).addClass("b");
  } else if ( times > 10 && times <= 15 ) {
    $(diamondDom).addClass("c");
  } else if ( times > 15 && times <= 20 ) {
    $(diamondDom).addClass("d");
  } else {
    $(diamondDom).addClass("e");
  }
}

function showDiamondPopup(detailData, el) {
  // 这个 if 判断只是临时的，避免报错，每天不管有没有贡献度都有数据对应
  if ( detailData ) {
    $(el).after(`
      <div class="point-popup close-popup" style="top: ${ el.offsetTop }px; left: ${ el.offsetLeft + el.clientWidth * 1.5 }px;">
        <div>${ detailData.num }个贡献：${ detailData.date }</div>
      </div>
    `);
  }
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