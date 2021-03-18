
function show(){
  $(".hamburger-menu").show();
  // $(".hamburger-menu").toggle();
}

function hide(){

  $(".hamburger-menu").hide();
}

function init(){

  $(".fas.fa-bars").click(show);
  $(".fas.fa-times").click(hide);
}

init();
