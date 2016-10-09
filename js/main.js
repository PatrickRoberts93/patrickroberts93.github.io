$( document ).ready(function() {
    console.log( "ready!" + "hello");
    (function ready2() {
      console.log( "ready!" + "ready2");


    })();

    $(".jumbotron__button").click(function(){
      $(".jumbotron h1").animate({
        opacity: "0"
      },500);
      if ($(this).hasClass("newclass")){
        $(this).removeClass("newclass");

      } else {
        $(this).addClass("newclass");
      }






    })

    /*
     * Counting menu items
     */
    console.log($(".nav li").length);


});
