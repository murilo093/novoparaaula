// TEMPO DO CAROUSEL
$('.carousel').carousel({
  interval: 3500
});
// FIM - TEMPO DO CAROUSEL


// ROLAGEM PARA O TOPO
function scrollToTop(scrollDuration) {
  var scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = setInterval(function(){
          if ( window.scrollY != 0 ) {
              window.scrollBy( 0, scrollStep );
          }
          else clearInterval(scrollInterval); 
      },0);
}
// FIM - ROLAGEM PARA O TOPO