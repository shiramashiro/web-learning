$(window).on("load", function () {
  $("html").css({
    "--window-height": `${ $(this).height() }px`,
    "--window-width": `${ $(this).width() } px`
  });
});
$(window).on("resize", function () {
  $("html").css({
    "--window-height": `${ $(this).height() }px`,
    "--window-width": `${ $(this).width() } px`
  });
});