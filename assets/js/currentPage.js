(function() {
  const page = window.location.pathname;
  const pageLinks = $('#site-header #site-navigation #site-links li a');
  let i = 0;


  for(i; i < pageLinks.length; i++) {
    var parent = $(pageLinks[i]).parent('li');

    if( page === $(pageLinks[i]).attr('href')) {
      $(parent).addClass('active');
    } else {
      $(parent).removeClass('active');
    }
  }

  console.log('pagded')
})();