$(function () {

  if ($(window).width() < 768) {
    $('.wireframing__row-2,.wireframing__row-3').children().unwrap().wrapAll("<div class = 'wireframing__row'></div>")
  }
  if ($(window).width() < 992) {
    $('.flight-search--flex').removeClass('container').addClass('container-fluid')
  }
  $(window).on('resize', () => {
    if ($(window).width() < 768) {
      $('.wireframing__row-2,.wireframing__row-3').children().unwrap().wrapAll("<div class = 'wireframing__row'></div>")
    } else {
      $('.wireframing__row>.col-auto:lt(5)').wrapAll("<div class = 'wireframing__row-2 row-reverse row justify-content-between'></div>")
      $('.wireframing__row>.col-auto').wrapAll("<div class = 'wireframing__row-3 row-reverse row justify-content-between'></div>")
      $('.wireframing__row>.col-auto').unwrap('.wireframing__row')
    }
    if ($(window).width() < 992) {
      $('.flight-search--flex').removeClass('container').addClass('container-fluid')
    } else {
      $('.flight-search--flex').removeClass('container-fluid').addClass('container')
    }
  })
  //   let $arrowLeft = $('.wireframing__arrow-left').html()
  //   console.log($arrowLeft)
  // $('.wireframing__row .wireframe:nth-child(2n+1)').after($arrowLeft)
  // $('.wireframing__row>picture').wrap("<div class = 'wireframing__arrow-left'></div>")

});