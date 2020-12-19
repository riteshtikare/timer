var Daydiv = document.querySelector('#day');
var Hoursdiv = document.querySelector('#hours');
var Mintuesdiv = document.querySelector('#minutes');
var Secounddiv =document.querySelector('#secound');




function setter(){
    var currentDate = new Date();

    var  currentHours ,currentMinutes ,currentsecounds;
    currentHours = currentDate.getHours();
    currentMinutes = currentDate.getMinutes();
    currentsecounds = currentDate.getSeconds();

    Hoursdiv.textContent = currentHours;
    Mintuesdiv.textContent = currentMinutes;
    Secounddiv.textContent = currentsecounds;
    setDay(currentDate.getDay())
}

setter();

setInterval(function(){
    setter();       
}, 1000)

function setDay(day) {
    switch (day) {
        case 0:
            daysetter('sun');
            break;
        case 1:
            daysetter('mon');
            break;
        case 2:
            daysetter('tue');
            break;
        case 3:
            daysetter('wed');
            break;
        case 4:
            daysetter('thu');
            break;
        case 5:
            daysetter('fri');
            break;
        case 6:
            daysetter('sat');
            break;            

    }
}

function daysetter(day ){
    Daydiv.textContent = day;
}