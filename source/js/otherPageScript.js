$(document).ready(function(){
  $('.other-nav__list li>ul').css('display','none');
  $('.other-nav__link').click(function(){
    if($(this).parent().hasClass('active')){
    $(this).addClass('active');
      if($(this).children('ul').hasClass('active')){
        $(this).children('ul').removeClass('active');
        $(this).removeClass('active');
        $(this).children('ul').css('display','none');
      } else{
        $(this).children('ul').addClass('active');
        $(this).children('ul').css('display','flex');
      }
      return false;
    } else{
      if($(this).hasClass('active')){
        $('.other-nav__list li>ul').css('display','none');
        $('*').removeClass('active');
      }else{
        $('.other-nav__list li>ul').css('display','none');
        $('*').removeClass('active');
        $(this).addClass('active');
        $(this).children('ul').addClass('active');
        $(this).children('ul').css('display','flex');
        console.log('no');
        return false;
        }
    }
  });
});