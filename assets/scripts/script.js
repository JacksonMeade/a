$(document).keydown(function(e){
    if(e.which === 123){
 
       return false;
 
    }
 
});

function load() {
var today = new Date();
var curHr = today.getHours();
var text = "";

if (curHr < 12) {
  text="Good Morning";
} else if (curHr < 18) {
  text="Good Afternoon";
} else {
  text="Good Evening";
}
document.getElementById("text").innerHtml=text;
}
