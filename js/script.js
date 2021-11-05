   /* eslint-env jquery */
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
            $(".logo-name--left").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".logo-name--left").removeClass("active");
        }
    });
});

$(function() {
    $(".header__btn").click(function() {
        if($(".header__btn").hasClass("test__btn")) {
            $(".header__btn").removeClass("test__btn");
        } else {
            $(".header__btn").addClass("test__btn");
        }
    });
});
$(function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log('entry.IsIntersecting');
                }
            });
    }, {
        threshold: 0.7,
    });

    document.querySelectorAll(".section").forEach(
        (section) => observer.observe(section),
    );
});


// $(function() {
//     const getId = (link) => link.getAttribute('href').replace("#", "");

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if(entry.isIntersecting) {
//                 document.querySelectorAll(".nav--link").forEach((link) => {
//                     link.classList.toggle(
//                         "active__hover",
//                         getId(link) === entry.target.id
//                     );
//                 });
//             }
//         });
//     }, {
//         threshold: 0.7,
//     });

//     document.querySelectorAll(".section").forEach(
//         (section) => observer.observe(section),
//     );

//     document.querySelector(".list__box").addEventListener("click", (event) => {
//         if(event.target.classList.contains("nav--link")) {
//             event.preventDefault();

//             window.scrollTo({
//                 top: document.getElementById(getId(event.target)).offsetTop,
//                 behavior: "smooth",
//             });
//         }
//     });
// });

// $(function() {
//     jQuery(window).scroll(function(){
//             var $sections = $('section');
//         $sections.each(function(i,el){            
 
//             var top  = $(el).offset().top-100;            

//             var bottom = top +$(el).height();
//             var scroll = $(window).scrollTop();
//             var id = $(el).attr('id');   
//             var id4 = "block4";
//             var id5 = "block5";
//             if(id = id4){
//                 top = $(el).offset().top-500;
//             }
//             if(id - id5){
//                 top = $(el).offset().top-500;
//             }
//             if( scroll > top && scroll < bottom){
//                 alert("1");
//                 $('a.active').removeClass('active');
//                 $('a[href="#'+id+'"]').addClass('active');
//             }
//             $(".span1").text(top)
//             $(".span2").text(bottom)
//             $(".span3").text(scroll)
//             $(".span4").text(id)


//         })
//     });

//     $("nav").on("click","a", function (event) {
//         // исключаем стандартную реакцию браузера
//         event.preventDefault();

//         // получем идентификатор блока из атрибута href
//         var id  = $(this).attr('href'),

//         // находим высоту, на которой расположен блок
//             top = $(id).offset().top-300;
//                 $(".span5").text(id)
//                 $(".span6").text(top)
//         // анимируем переход к блоку, время: 800 мс
//         $('body,html').animate({scrollTop: top}, 800);

//     });
// });



jQuery(document).ready(function($) {
    $('.popup-content').magnificPopup({
        type: 'inline'
    });
});


// Initialize popup as usual
$('.popup-link').magnificPopup({
    // Delay in milliseconds before popup is removed
    removalDelay: 300,
  
    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
//    zoom = 1.5 // set a start value to coords.zoom  
//    $('.image').bind('mousewheel', function(e){
//    if(e.originalEvent.wheelDelta > 0){ 

//        zoom = zoom + 0.1;
//        if (zoom>3){zoom = 3} // 3 is the max value of coords.zoom
//        $("#zoom").text(zoom);

//    } else {

//        zoom = zoom - 0.1;
//        if (zoom<1.2){zoom = 1.2} // 1.2 is the min value of coords.zoom
//        $("#zoom").text(zoom);
//     }
//   });