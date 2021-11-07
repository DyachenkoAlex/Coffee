   /* eslint-env jquery */
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 150) {
            $(".header, .logo--name--left").addClass("active");
        } else {
           $(".header, .logo--name--left").removeClass("active");
        }
    });
});

$(function() {
    $(".header__btn").click(function() {
        if($(".header__btn").hasClass("active")) {
            $(".header__btn, .navigation__cover").removeClass("active");
        } else {
            $(".header__btn, .navigation__cover").addClass("active");
        }
    });
    $(".nav--link").click(function() {
        if($(".navigation__cover").hasClass("active")) {
            if($(".header__btn").hasClass("active")) {
                $(".header__btn").removeClass("active");
            }
            $(".navigation__cover").removeClass("active");
        } else {
            $(".navigation__cover").addClass("active");
        }
    });
});

$(function() {
    $(document).ready(function(){
        $(".nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1200);
        });
    });
})

// $(function() {
//         jQuery(window).scroll(function(){

//             var $sections = $('section');

//             $sections.each(function(i,el){ 

//                 var id = $(el).attr('id'); 

//                 $(id).on('inview', function(event, isInView) {
//                     if (isInView) {
//                         $(".span1").text(id);
//                         $('a[href="#'+id+'"]').addClass('active');  
//                     } else {
//                         $(".span2").text(id)
//                         $('a.active').removeClass('active');
//                     }
//                 });
//             })
//         });
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 console.log('entry.IsIntersecting');
    //             }
    //         });
    // }, {
    //     threshold: 0.7,
    // });

    // document.querySelectorAll(".section").forEach(
    //     (section) => observer.observe(section),
    // );
// });


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


$(function() {
    jQuery(document).ready(function($) {
        $('.popup-content').magnificPopup({
            type: 'inline'
        });
    });

$('.popup-link').magnificPopup({
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
})