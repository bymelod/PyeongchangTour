$(function(){
  $('.header').load('../inc/header.html')
  $('.footer').load('../inc/footer.html')
  $('.f-header').load('../inc/f-header.html')
  $('.head-theme').load('../inc/head-theme.html')


  
// popup 슬라이드
$('.popup .slide').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
		slidesToScroll: 1,
    prevArrow: $('.p-left'),
    nextArrow: $('.p-right')
  })

  // popup 체크
  $('.popup .checked').hide()
  $('.popup .check').click(function () {
    $('.popup .checked').toggle()
  })

  // popup 숨기기
  $('.popup .side i').click(function () {
    $('.popup').toggleClass('on')
  })

  

//  section01 슬라이드
  $('.section01 .slide').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.section01 .left'),
    nextArrow: $('.section01 .right')
  })
  
  .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slide-count').text(`${nextSlide + 1}`)
  })
     
  $('.section01 .control .xi-pause').click(function(){
    $('.section01 .slide').slick('slickPause')
    $('.section01 .control .xi-play').show()
    $('.section01 .control .xi-pause').hide()
  })
  $('.control .xi-play').click(function(){
    $('.section01 .slide').slick('slickPlay')
    $('.section01 .control .xi-pause').show()
    $('.section01 .control .xi-play').hide()
  })

  $('.bottom-slide').slick({
    vertical: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		verticalSwiping: true
  })


//  section04 슬라이드  
  $('.section04 .map').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.section04 .content-box'
  });
  
  $('.section04 .content-box').slick({
    prevArrow: $('.section04 .prev'),
    nextArrow: $('.section04 .next'),
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.section04 .map',
    focusOnSelect: true
  });


  // 테마여행 페이지 슬라이드
  $('.slide-theme').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.slider-theme .left'),
    nextArrow: $('.slider-theme .right')
  });

 // 테마여행 상세페이지 슬라이드
 $('.theme-detail-slide').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   prevArrow: $('.detail-arrow .detail-left'),
   nextArrow: $('.detail-arrow .detail-right')
  });
  
  // 테마여행 상세페이지 section02 탭
  $('.theme-section02 .tab-title h3').click(function(){
    $('.theme-section02 .tab-title h3').removeClass('on')
    $(this).addClass('on')

    $('.theme-section02 .tab-content div').css('display','none')
    $('.theme-section02 .tab-content div').eq($(this).index()).css('display','block')
});

  // 테마여행 상세페이지 section03 탭
  $('.theme-section03 .tab li').eq(0).addClass('on')
  $('.theme-section03 .tab-content').hide().eq(0).show()

  $('.theme-section03 .tab li').click(function () {
      $('.theme-section03 .tab li').removeClass('on')
      $(this).addClass('on')

      $('.theme-section03 .tab-content').hide()

      var idx = $(this).index()
      $('.theme-section03 .tab-content').eq(idx).show()
  });
     
 // 대표여행지 사이드 메뉴
 $('.f-menu .item').click(function () {
  $('.f-menu .item').toggleClass('on')
})


})
