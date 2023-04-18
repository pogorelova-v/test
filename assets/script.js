$('.btn-container').on('click', 'button', function() {
    $('.section_wrap').slideUp();
    $($('.section_wrap')[$(this).index()]).slideDown();
  });

