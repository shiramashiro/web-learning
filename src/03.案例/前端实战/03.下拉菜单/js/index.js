$(".dropdown")
  .mouseenter(function () {
    let $items = $(this).find("div.items");
    $(this).css({ "--items-height": `${ $items.height() }px` });
    $items.addClass("show-items");
  })
  .mouseleave(function () {
    let $items = $(this).find("div.items");
    $items.removeClass("show-items");
  });