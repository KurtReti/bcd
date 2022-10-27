var countDownDate = new Date("Oct 27, 2022, 21:17:55").getTime();

var x = setInterval(async function(){


    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".countdown").innerHTML = (String(days).padStart(2, '0') + ':' + String(hours).padStart(2, '0') +':' + String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0'));

    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").style = "display: none"

        setTimeout(function(){
            document.querySelector(".big-wrapper").style = "opacity: 1"

        }, 1000)

        setTimeout(function(){
            document.querySelector(".cocks-wrapper").style = "opacity: 1"

        }, 2000)

        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 1"

        }, 3000)

        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 0"

        }, 3500)

        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 1"

        }, 4000)

        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 0"

        }, 4500)

        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 1"

        }, 5000)

        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 0"

        }, 5500)

        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 1"

        }, 5750)

        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 0"

        }, 6000)


        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 1"

        }, 6250)

    
    
        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 1"

        }, 6250)
        
        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 0"

        }, 6500)
        
        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 1"

        }, 6750)
        
        setTimeout(function(){
            document.querySelector(".divided-wrapper").style = "opacity: 0"

        }, 7000)


         setTimeout(function(){
            document.querySelector(".divided-wrapper").innerHTML = "DIVIDED"
            document.querySelector(".divided-wrapper").style = "opacity: 1"

        }, 9000)

      

      
      
     


        // setTimeout(function(){
        //     document.querySelector(".divided-wrapper").innerHTML = "DIVIDED"
        //     document.querySelector(".divided-wrapper").style ="opacity: 1";

        // }, 6000)



    }
}, 1000);