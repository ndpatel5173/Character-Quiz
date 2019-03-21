$("button").click(function() {
    var person=$("#personality").val();
if (   person==="stubborn yet brave"      ){
    $("p").text("You are America Singer!");
}else if ( person==="carefree yet prim and proper"        ){
    $("p").text("You are Marlee Tames!");
}else if(person==="polite and easy-going"){
    $("p").text("You are Prince Maxon Schreave!");
}else if(person==="strict and bossy"){
    $("p").text("You are King Clarkson Schreave!");
}
});