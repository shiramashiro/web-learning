function strToBool(str) {
  return str !== "false";
}

function boolToStr(bool) {
  return bool === false ? "false" : "true";
}

function rendTreeOcx(data, enableFold) {
  let template = `<ul class="tree-ocx-ul">`;
  if ( enableFold ) template = `<ul class="tree-ocx-ul tree-ocx-ul-enable-fold">`;

  for ( let i = 0; i < data.length; i++ ) {
    if ( data[i].child ) {
      template += `
          <li class="tree-ocx-li tree-ocx-li-enable-fold" data-is-folded="false">
            <div class="tree-ocx-tip">${ data[i].tip }</div>
            ${ rendTreeOcx(data[i].child, true) }
        `;
    } else {
      template += `
          <li class="tree-ocx-li">
            <div class="tree-ocx-tip">${ data[i].tip }</div>
        `;
    }
    template += `</li>`;
  }
  template += `</ul>`;
  return template;
}

function foldOrUnFoldTree() {
  $(".tree-ocx-li").on("click", function (e) {
    e.stopPropagation();

    let isFolded = strToBool($(this)[0].dataset.isFolded);
    if ( isFolded === false ) {
      $(this).css({
        "--tree-ocx-tip-height": `${ $(this).children(".tree-ocx-tip").height() }px`,
        "--tree-ocx-li-height": `${ $(this).children(".tree-ocx-ul-enable-fold").height() }px`
      });
      $(this).addClass("tree-ocx-li-enable-fold-active");
      $(this).children(".tree-ocx-ul-enable-fold").addClass("tree-ocx-ul-enable-fold-active");
    } else {
      $(this).removeClass("tree-ocx-li-enable-fold-active");
      $(this).children(".tree-ocx-ul-enable-fold").removeClass("tree-ocx-ul-enable-fold-active");
    }
    $(this)[0].dataset.isFolded = boolToStr(!isFolded);
  });
}