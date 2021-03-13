$('.addLike').on('click', function() {
    var spot = $(this).find('.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0');
    var main = $(this).hasClass('main');
    if( main ) spot = $(this).parent().prev().find('.main-like')
    $.ajax({
      type: 'POST',
      url: window.location.href,
      data: 'like=1&id=' + $(this).data('id'),
      success: function(data) {
        if(data) {
          spot.html(data)
        }
      },
      cache: false
    });
    //alert($(this).data('id'));
  })
  $('.addRepost').on('click', function() {
    var spot = $(this).find('.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0');
    var main = $(this).hasClass('main');
    if( main ) spot = $(this).parent().prev().find('.main-repost')
    $.ajax({
      type: 'POST',
      url: window.location.href,
      data: 'repost=1&id=' + $(this).data('id'),
      success: function(data) {
        if(data) {
          spot.html(data)
        }
      },
      cache: false
    });
    //alert($(this).data('id'));
  })