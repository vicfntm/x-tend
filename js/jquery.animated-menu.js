$(document).ready(function(){

//When mouse rolls over
$("#ds").mouseover(function(){
$(this).stop().animate({height:'500px'},{queue:false, duration:600, easing: 'easeOutBounce'})
});

//When mouse is removed
$("#ds").mouseout(function(){
$(this).stop().animate({height:'50px'},{queue:false, duration:600, easing: 'easeOutBounce'})
});

});