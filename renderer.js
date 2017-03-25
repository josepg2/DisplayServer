// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

$('#toggle').click(function(){
    $('.right-col').toggleClass('expanded');
    $('.main-col').toggleClass('reducemain');
});


$('#addnew').click(function(){

  if($('.right-col').width() !== 0){
    $('.right-col').removeClass('expanded');
    $('.main-col').removeClass('reducemain');
    setTimeout(function(){
      $('.green-col').toggleClass('expanded');
    	$('.main-col').toggleClass('reducemain');
    }, 900);
  }
  else if($('.green-col').width() !== 0){
    $('.green-col').removeClass('expanded');
    $('.main-col').removeClass('reducemain');
    setTimeout(function(){
      $('.right-col').toggleClass('expanded');
    	$('.main-col').toggleClass('reducemain');
    }, 900);
  }

});
