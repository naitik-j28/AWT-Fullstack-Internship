function funct1(){
    //$(element name).action()
    //JS alternative:-
    //document.getElementByTagName(element name)
    $("#div2").css("background-color","blue");
    $("#div3").css("background-color","green");
    $("#div1").css("background-color","red");
    //$("#p1").css('font-style','italic');

    //Jquery needs Id to be unique
    //can't change   css property of same ID
    //alternative way is to use class selectors

    //$(".para")..css("font-style","italic");
    //$("#div2,li").css("background-color","red");

    $("p:second").fadeToggle();

    //$("div > p").fadeToggle();
    //$("div p").fadeToggle();
    //$("p:first").fadeToggle();
    //$("p:second").fadeToggle();

    //$("li:even").fadeToggle();
    //$("li:even").fadeToggle();
}