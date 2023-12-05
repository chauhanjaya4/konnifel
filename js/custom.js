
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