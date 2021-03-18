
function show(){
  $(".hamburger-menu").show();

}

function hide(){

  $(".hamburger-menu").hide();
}



function init(){

  $(".fas.fa-bars").click(show);
  $(".fas.fa-times").click(hide);
}

init();
