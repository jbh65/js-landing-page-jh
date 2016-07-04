$(document).ready(function(){

  $('.readless-hide').hide();

  $('.readmore').on('click',function(){

    event.preventDefault();

    if($('#show-this-on-click').is(':hidden')){
      $('#show-this-on-click').slideDown('slow');
      $('.readmore').hide();

    }

      else {
        $('#show-this-on-click').hide('slow');
        }

        if($('.readmore').is(':hidden')){
          $('.readless-hide').show();
        }
  });

  $('.readless-hide').on('click',function(){

    event.preventDefault();

    if($('.readmore').is(':hidden')){
      $('#show-this-on-click').slideUp('fast');
      $('.readless-hide').hide();
      $('.readmore').show('fast');
    }
  });

  $('.learnmore').on('click',function(){

    event.preventDefault();

    if($('.hide').is(':hidden')){
      $('#learnmoretext').slideDown('slow');
      $('.learnmore').hide();

    }


  });




});
