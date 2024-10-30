function hideLoader(){
    $('.page-loader').fadeOut('slow');
}

$(".bg1").hover(function(){
    $(".bg2").css("transform", "rotate(0deg)");
    $(".bg2").css("left", "0");
    $(".bg2").css("top", "0");
    }, function(){
    $(".bg2").css("transform", "rotate(5deg)");
    $(".bg2").css("left", ".9rem");
    $(".bg2").css("top", "-.9rem");
});

$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	},
    zoom: {
        enabled: false,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
});

if (!!window.IntersectionObserver) {
let observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
	if (entry.isIntersecting) {
		entry.target.classList.add("active-footer");
		//entry.target.src = entry.target.dataset.src;
		observer.unobserve(entry.target);
	}});
}, {
	rootMargin: "0px 0px -100px 0px"
});
    document.querySelectorAll('.has-footer-animation').forEach(block => {
        observer.observe(block)
    });
} else {
    document.querySelectorAll('.has-footer-animation').forEach(block => {
        block.classList.remove('has-footer-animation')
    });
}

var $swiperSelector = $('.project-active');
$swiperSelector.each(function(index) {
    var $this = $(this);
    $this.addClass('swiper-slider-' + index);

    var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 24;
    var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
    var loop = $this.data('loop') ? $this.data('loop') : true;
    var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 4;
    var slidesLaptop = $this.data('slides-laptop') ? $this.data('slides-laptop') : 4;
    var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 3;
    var slidesSmall = $this.data('slides-small') ? $this.data('slides-small') : 3;
    var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 2;
    var slidesXs = $this.data('slides-xs') ? $this.data('slides-xs') : 1.5;
    var spaceBetween = $this.data('space-between') ? $this.data('space-between'): 15;

    var swiper = new Swiper('.swiper-slider-' + index, {
        direction: 'horizontal',
        loop: loop,
        freeMode: freeMode,
        spaceBetween: spaceBetween,
        autoplay: {
            delay: 1000,
        },
        breakpoints: {
            1920: {
            slidesPerView: slidesDesktop
            },
            1200: {
            slidesPerView: slidesLaptop
            },
            992: {
            slidesPerView: slidesTablet
            },
            768: {
            slidesPerView: slidesSmall
            },
            576: {
            slidesPerView: slidesMobile,
            centeredSlides: true,
            centeredSlidesBounds: true,
            },
            0: {
            slidesPerView: slidesXs,
            centeredSlides: true,
            centeredSlidesBounds: true,
            }
        },
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev'
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: dragSize
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        }
    },
    spaceBetween: 30,
    navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
    },
});

$(window).on('load', function () {
    splitText();
});


function splitText() {
    $(".tg__animate-text").each(function () {
        var a = $(this),
            d = a.text().split(""),
            c = a.data("wait");
        c || (c = 0);
        var b = a.data("speed");
        b || (b = 4),
        (b /= 100),
        a.html("<em>321...</em>").addClass("ready"),
        a.waypoint({
            handler: function () {
                a.hasClass("stop") ||
                (a.addClass("stop"),
                setTimeout(function () {
                    a.text(""),
                        $.each(d, function (d, e) {
                            var c = document.createElement("span");
                            (c.textContent = e), (c.style.animationDelay = d * b + "s"), a.append(c);
                        });
                }, c));
            },
            offset: "90%",
        });
    });
};

$('.audi a').on('click', () => new Audio('../lab/assets/audio/click.wav').play());
$('.offcanvas .offcanvas-header a').on('click', () => new Audio('../lab/assets/audio/remove.wav').play());

$(function(){
    $(window).scroll(function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 200) $('.go-top').fadeIn('slow');
        if (scrolled < 200) $('.go-top').fadeOut('slow');
    });
    $('.go-top').click(function () {
        $("html, body").animate({ scrollTop: "0" },  500);
    });
});

var $svgIconBox = $('.tg-svg');
$svgIconBox.each(function() {
    var $this = $(this),
        $svgIcon = $this.find('.svg-icon'),
        $id = $svgIcon.attr('id'),
        $icon = $svgIcon.data('svg-icon');
    var $vivus = new Vivus($id, { duration: 180, file: $icon });
    $this.on('mouseenter', function () {
        $vivus.reset().play();
    });
});


// function toggle_video_modal() {
//     $(".play").on("click", function(e){
//         e.preventDefault();
//         var id = $(this).attr('data-youtube-id');
//         var autoplay = '?autoplay=1';
//         var src = '//www.youtube.com/embed/'+id+autoplay;
//         $("#youtube").attr('src', src);
//         $("body").addClass("show-video-modal noscroll");
//     });
//     function close_video_modal() {
//         event.preventDefault();
//         $("body").removeClass("show-video-modal noscroll");
//         $("#youtube").attr('src', '');
//     }
//     $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {
//         close_video_modal();
//     });
//     $('body').keyup(function(e) {
//         if (e.keyCode == 27) {
//             close_video_modal();
//         }
//     });
// }
// toggle_video_modal();

const counters = document.querySelectorAll('.counter')
counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target / 200
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})
