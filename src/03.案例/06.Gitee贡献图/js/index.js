function drawChartGrid() {
  let indexOfPoint = 0;
  let $el = $("#cb-chart .bottom .right-side");
  $el.css({ "--point-size": `${ $el.height() / 7 }px` });
  for ( let horizontal = 0; horizontal < 54; horizontal++ ) {
    for ( let vertical = 0; vertical < 7; vertical++ ) {
      $el.append(`<div class="point" serial="${ indexOfPoint }"></div>`);
      indexOfPoint++;
    }
  }
  traverseDiamonds();
}

function drawDiamonds(index, data) {
  let start = index - 1 < 0 ? 6 : index - 1;
  let end = start === 6 ? 372 : 365 + index;

  $(`#cb-chart .bottom .right-side .point`).slice(start, end).each((i, el) => {
    $(el).attr("data-content", () => `${ data[i].number }个贡献：${ data[i].date }`);
    setDiamondColor(el, data[i].number);
    $(el).on({
      "mouseenter": () => {
        showDiamondPopup(data[i], el);
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

function traverseDiamonds() {
  let nowDate = new Date();
  let year = nowDate.getFullYear();
  let month = nowDate.getMonth();
  let day = nowDate.getDate();
  let oldDate = new Date(`${ year - 1 }-${ month + 1 }-${ day }`);
  drawMonths(oldDate);
  drawDiamonds(oldDate.getDay(), getPointsData(oldDate));
}

function setDiamondColor(el, number) {
  if ( number > 0 && number <= 5 ) {
    $(el).addClass("a");
  } else if ( number > 5 && number <= 10 ) {
    $(el).addClass("b");
  } else if ( number > 10 && number <= 15 ) {
    $(el).addClass("c");
  } else if ( number > 15 ) {
    $(el).addClass("d");
  } else {
    $(el).addClass("e");
  }
}

function showDiamondPopup(data, el) {
  $(el).after(`
    <div class="point-popup close-popup" style="top: ${ el.offsetTop }px; left: ${ el.offsetLeft + el.clientWidth * 1.5 }px;">
      <div>${ data.number }个贡献：${ data.date }</div>
    </div>
  `);
}

function drawMonths(date) {
  let indexOfMonth = date.getMonth();
  for ( let m = 0; m < 12; m++ ) {
    if ( indexOfMonth === 12 ) indexOfMonth = 0;
    $("#cb-chart .top-bar .months").append(`
      <div class="month">${ months[indexOfMonth] }</div>
    `);
    indexOfMonth++;
  }
}