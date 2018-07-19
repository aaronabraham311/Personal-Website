$(function(){
  gridContainer = $('#shuffleContainer')
  var sizer = gridContainer.find('.shuffleItem')

  gridContainer.shuffle({
    sizer: sizer,
    speed: 500,
    easing: 'ease-out'
  })

  $('#all_button').on('click', function(){
    gridContainer.shuffle('shuffle', function($el, shuffle){
      return true;
    });
  });

  $('#swift_button').on('click', function(){
    gridContainer.shuffle('shuffle', function($el, shuffle){
      return $el.data('group') == "swift";
    });
  });

  $('#c++_button').on('click', function(){
    gridContainer.shuffle('shuffle', function($el, shuffle){
      return $el.data('group') == "c++";
    });
  });

  $('#freelancing_button').on('click', function(){
    gridContainer.shuffle('shuffle', function($el, shuffle){
      return $el.data('group') == "freelancing";
    });
  });

  $('#r_button').on('click', function(){
    gridContainer.shuffle('shuffle', function($el, shuffle){
      return $el.data('group') == "r";
    });
  });
});
