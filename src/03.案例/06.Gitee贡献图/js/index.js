function drawChartGrid() {
  let $rightSide = $("#cb-chart .bottom .right-side");
  let diamondSize = $rightSide.height() / 7;
  let index = 0;
  for ( let horizontal = 0; horizontal < 53; horizontal++ ) {
    for ( let vertical = 0; vertical < 7; vertical++ ) {
      $rightSide.css({ "--diamond-size": `${ diamondSize }px` });
      $rightSide.append(`<div class="diamond" data-index="${ index }"></div>`);
      index++;
    }
  }
  drawRealDiamond();
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
          <div class="diamond-popup close-popup" style="top: ${ el.offsetTop }px; left: ${ el.offsetLeft + el.clientWidth * 1.5 }px;">
            <div>
              ${ detailData.num }个贡献：${ detailData.date }
            </div>
          </div>
        `);
  }
}

function traverseDiamonds(validate, dayGap) {
  $(`#cb-chart .bottom .right-side .diamond`).each((i, el) => {
    if ( validate(i) ) {
      if ( i === 365 + dayGap ) {
        return false;
      } else {
        // 这个 if 判断只是临时的，避免报错，每天不管有没有贡献度都有数据对应
        if ( diamonds[i] ) {
          $(el).attr("data-content", () => `${ diamonds[i].num }个贡献：${ diamonds[i].date }`);
          setDiamondColor(el, diamonds[i].num);
        } else {
          $(el).addClass("e");
        }

        $(el).on({
          "mouseenter": () => {
            showDiamondPopup(diamonds[i], el);
            $(el).addClass("diamond-hover")
                 .next(".diamond-popup")
                 .addClass("show-popup")
                 .removeClass("close-popup");
          },
          "mouseleave": () => {
            $(el).removeClass("diamond-hover")
                 .next(".diamond-popup")
                 .addClass("close-popup")
                 .removeClass("show-popup");
          }
        });
      }
    }
  });
}

function drawMonths(oldDate) {
  const months = [
    "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
  ];
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

function drawRealDiamond() {
  let nowDate = new Date();
  let oldDate = getLastYearToday(nowDate);
  let weekIndex = oldDate.getDay();
  let nowWeekIndex = nowDate.getDay() - 1;
  if ( weekIndex === 0 ) {
    traverseDiamonds((i) => i > 5, nowWeekIndex);
  } else if ( weekIndex === 1 ) {
    traverseDiamonds(() => true, nowWeekIndex);
  } else if ( weekIndex >= 2 ) {
    traverseDiamonds((i) => i > weekIndex - 2, nowWeekIndex);
  }

  drawMonths(oldDate);
}