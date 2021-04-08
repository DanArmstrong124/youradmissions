var day = $(' #day ');
var timedisplay = $(' #time ');

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

setInterval(function(){
    day.html(today);
    timedisplay.html(time);
}, 1000);