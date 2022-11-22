var due_date=new Date("Dec 5, 2022 23:59:59").getTime();

var x = setInterval(function() {
    var current_time = new Date().getTime();
    var countdown=due_date-current_time;
    var d=Math.floor(countdown/(1000*60*60*24));
    var h=Math.floor((countdown%(1000*60*60*24))/(1000*60*60));
    var m=Math.floor((countdown%(1000*60*60))/(1000*60));
    var s=Math.floor((countdown%(1000*60))/1000);
  
    document.getElementById("assembler_countdown").innerHTML=d+" days, "+h+" hours, "+m+" minutes, and "+s+ " seconds";
    if (countdown<0) {
      clearInterval(x);
      document.getElementById("assembler_countdown").innerHTML="already due!";
    }
  }, 1000);