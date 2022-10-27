var countDownDate = new Date("Oct 29, 2022, 21:45:00").getTime();

var x = setInterval(function(){


    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".countdown").innerHTML = (String(days).padStart(2, '0') + ':' + String(hours).padStart(2, '0') +':' + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0'));

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "BCD"
        

    }
}, 1000);