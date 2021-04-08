var day = $(' #day ');
var timedisplay = $(' #time ');


setInterval(function(){
    var today = new Date();
    var date = today.getDate()'-'+(today.getMonth()+1)+'-'+today.getFullYear()+;
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}, 100);

setInterval(function(){
    day.html(date);
    timedisplay.html(time);
}, 1000);