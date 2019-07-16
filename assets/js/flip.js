(function() {
  const flipUp = {
    f: this,
    init: function() {
      $('.flip-up-btn').on(
        'click',
        this.clickHandler
      );
    },
    clickHandler: function() {
      const flip = $('.flip');
      const flipState = $('.flip').attr('data-state');

      if(flipState === 'flipped-up') {
        $('.flip').removeClass('flip-up').attr('data-state', 'flipped-down');
      } else {
        $('.flip').addClass('flip-up').attr('data-state', 'flipped-up');
      }
    }
  }

  flipUp.init();
})();