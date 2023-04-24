$(document).on('click', '.btn-topic_nav', function() {
    $('.section_wrap').hide();
    $($('.section_wrap')[$(this).index()]).slideDown(500);
  });
