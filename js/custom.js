
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});


$(document).ready(function(){
    $(".toggle-password").click(function() {

        if($(this).hasClass('fa-eye-slash')){
           
            $(this).removeClass('fa-eye-slash');
            
            $(this).addClass('fa-eye');
            
            $('#pwd').attr('type','text');
            $('#con_pwd').attr('type','text');
              
        } else {
            $(this).removeClass('fa-eye');
          
            $(this).addClass('fa-eye-slash');  
            
            $('#pwd').attr('type','password');
            $('#con_pwd').attr('type','password');
        }
      });
});



