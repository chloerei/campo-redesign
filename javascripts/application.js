(function() {
  $.fn.inputCounter = function() {
    return this.each(function() {
      var count, counter, input, limit;
      input = $(this);
      limit = input.data('counter');
      count = input.find('input, textarea').val().length;
      counter = $("<div class='input-counter'>" + count + " / " + limit + "</div>");
      input.append(counter);
      return input.on('input', 'input, textarea', function() {
        count = input.find('input, textarea').val().length;
        counter.text("" + count + " / " + limit);
        return input.toggleClass('error', count > limit);
      });
    });
  };

}).call(this);
(function() {
  $(document).on('click', '.left-nav .left-nav-toggle', function() {
    $(this).closest('.left-nav').addClass('active');
    return $('body').addClass('noscroll');
  }).on('click', '.left-nav .left-nav-mask', function() {
    $(this).closest('.left-nav').removeClass('active');
    return $('body').removeClass('noscroll');
  });

}).call(this);
(function() {


}).call(this);