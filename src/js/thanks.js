/* CSS */
require('../css/public.css');
require('../css/thanks.css');
require('../css/animate.css');
/* JS */
setTimeout(()=>{
    $(".pointer").addClass("animated fadeInUp").css("display","flex");
    $(".pointer").click(function(){
        $(".bg").addClass("animated fadeOutUp");
        $(".card").css({
            "display":"flex",
            "z-index":'12'
        });
        $(".pointer").removeClass("fadeInUp").addClass("fadeOutDown");
        setTimeout(()=>{
            $(".mosk").addClass("animated fadeIn").css({
                "display":"flex",
                "z-index":'10'
            });
            $("#get_gift").addClass("animated fadeInUp").css({
                "display":"flex",
                "z-index":'12'
            });
        },2000)
    })
},1000)
