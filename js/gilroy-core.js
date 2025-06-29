/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
	"use strict";

	gsap.config({
		nullTargetWarn: false,
	});

	// dark light mode toggler
	function ta_theme_toggler() {
		$("[data-ta-switcher-mode], [data-ta-switcher-btn]").on(
			"click",
			function () {
				toggleTheme();
			}
		);

		// set toggle theme scheme
		function ta_set_scheme(ta_theme) {
			localStorage.setItem("ta_theme_scheme", ta_theme);
			document.documentElement.setAttribute("ta-theme", ta_theme);
		}

		// toggle theme scheme
		function toggleTheme() {
			if (localStorage.getItem("ta_theme_scheme") === "dark") {
				ta_set_scheme("light");
			} else {
				ta_set_scheme("dark");
			}
		}

		// set the first theme scheme
		function ta_init_theme() {
			if (localStorage.getItem("ta_theme_scheme") === "dark") {
				ta_set_scheme("dark");
				document.querySelector(
					"[data-ta-switcher-mode], [data-ta-switcher-btn]"
				).checked = true;
			} else {
				ta_set_scheme("light");
				document.querySelector(
					"[data-ta-switcher-mode], [data-ta-switcher-btn]"
				).checked = false;
			}
		}
		ta_init_theme();
	}
	if ($("[data-ta-switcher-mode], [data-ta-switcher-btn]").length > 0) {
		ta_theme_toggler();
	}

	// smoooth scroll activation start
	const lenis = new Lenis()
	function raf(time) {
	  lenis.raf(time)
	  requestAnimationFrame(raf)
	}
	requestAnimationFrame(raf)


	// preloader
	document.addEventListener("DOMContentLoaded", function () {

		let preloader = document.querySelector("#preloader");

		window.addEventListener('load', function(){

			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					  preloader.remove();
				  }, 1000 ) ;
			}

			// class-add
			const txaaddclass = gsap.utils.toArray('.add-class');
			txaaddclass.forEach(img => {
				gsap.to(img, {
					scrollTrigger: {
						trigger: img,
						scrub: 1,
						start: "top 70%",
						toggleClass: "active",
						toggleActions: "play reverse play reverse",
					}
				});
			});

			// home-1-hero-1-animation
			const h1tl = gsap.timeline();

			h1tl.from(".h1-fade-up" , { scale: 1.3 ,  y: 100, opacity: 0, stagger: .5, duration:2 });
			h1tl.fromTo(".gly-hero-1-title .gly-gd-color-1" , { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"},
						{        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }, "<1.5"
			);

			// home-2-hero-2-animation
			const h2tl = gsap.timeline();

			h2tl.from(".gly-hero-2-il-3" , { y: 200, duration: 1 });
			h2tl.from(".gly-hero-2-title" , { scale: 1.3 ,  y: 100, opacity: 0, stagger: .5, duration:1 });
			h2tl.fromTo(".gly-hero-2-title .gly-gd-color-1" , { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"},
						{        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" });
			h2tl.from(".gly-hero-2-il-2" , {  y: 200,  opacity: 0 });
			h2tl.from(".gly-hero-2-il-1" , {  y: -200, opacity: 0 });
			h2tl.from(".gly-project-2-area" , {  y: 200, opacity: 0 });


			// home-1-hero-1-animation
			const h3tl = gsap.timeline();

			h3tl.from(".gly-hero-3-demo-row" , { opacity: 1, duration:2 });
			h3tl.from(".h3-fadebttm" , { y: "-=100", opacity: 0, stagger: .2, duration:1 });

		})

	});


	function glystickyHeader() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('[data-txStickyHeader]');
		var headerHeight = 30;

		$window.scroll(function () {
		  var windowTop = $window.scrollTop();

		  if (windowTop >= headerHeight) {
			$header.addClass('gly_sticky');
		  } else {
			$header.removeClass('gly_sticky');
			$header.removeClass('gly_sticky_show');
		  }

		  if ($header.hasClass('gly_sticky')) {
			if (windowTop < lastScrollTop) {
			  $header.addClass('gly_sticky_show');
			} else {
			  $header.removeClass('gly_sticky_show');
			}
		  }

		  lastScrollTop = windowTop;
		});
	}

	glystickyHeader();



	// mobile-menu-start
	if($('.mobile-main-navigation li.dropdown ul').length){
		$('.mobile-main-navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></div>');
		$('.mobile-main-navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

	$(".dropdown-btn").on("click", function () {
		$(this).toggleClass("toggle-open");
	});


	// search-popup-start
	$('.search_btn_toggle').on('click', function() {
		$('.overlay, .search_1_popup_active').addClass('active');
	});
	$('.overlay, .search_1_popup_close').on('click', function() {
		$('.search_1_popup_active').removeClass('active');
		$('.overlay').removeClass('active');
	})



	// gsap-start
	gsap.registerPlugin(ScrollTrigger);


	// mobile-menu-toggle-start
	var menuToggle = document.getElementById("menuToggle")
	var menuToggle2 = document.getElementById("menuToggle2")

	let onePageMenu = document.querySelectorAll(
		".mobile-menu-wrap li a"
	);

	if (menuToggle2) {

		var menuBar = gsap.timeline();
		menuBar.reverse();
		var menubgline = gsap.timeline({ paused: true });

		menubgline.to('.mobile-menu' , {
			duration: 0,
			display: "block",
			ease: 'Expo.easeInOut'
		});
		menubgline.to('.mobile-menu-bg span' , {
			duration: .5,
			height: "100%",
			stagger: 0.1,
			ease: 'Expo.easeInOut'
		});
		menubgline.from('.mobile-menu-logo' , {
			x: -50,
			opacity: 0,
			ease: 'Expo.easeInOut'
		});
		menubgline.to('.mobile-menu-close' , {
			duration: 0,
			x: 0,
			rotate: 0,
			opacity: 1,
			ease: 'Expo.easeInOut'
		}, "<");
		menubgline.fromTo('.mobile-main-navigation  ul li' , {
			opacity: 0,
			y: 50,
			ease: 'Expo.easeInOut',
			stagger: 0.2,
		} , {
			opacity: 1,
			y: 0,
		}, "<");
		menubgline.from('.mobile-menu-search-bar' , {
			opacity: 0,
			y: 50,
			ease: 'Expo.easeInOut'
		}, "<");

		menubgline.from('.mobile-menu-socail-link' , {
			opacity: 0,
			x: 50,
			ease: 'Expo.easeInOut'
		}, "<");


		menubgline.reverse();

		menuToggle.addEventListener('click', function(){
			menubgline.reversed(!menubgline.reversed());
		});
		menuToggle2.addEventListener('click', function(){
			menubgline.reversed(!menubgline.reversed());
		});

		// Loop through each element in onePageMenu and add event listener
		onePageMenu.forEach(function (element) {
			element.addEventListener("click", function () {
				menubgline.reversed(!menubgline.reversed());
			});
		});

	}

	// fadeinup-animation-start
	gsap.utils.toArray('.title-ani ').forEach((el, index) => {
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 90%",
			end: "buttom 50%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})

		tl1
		.from(el, { y: "+=100" , opacity: .8 }, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
	  })


	// fadeinright-animation-start
	gsap.utils.toArray('.fadeleft ').forEach((el, index) => {
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 90%",
			end: "buttom 50%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})

		tl1
		.from(el, { x: "-=100" , opacity: .8 }, {opacity: 1, scale: 1, x: 0, duration: 1, immediateRender: false})
	  })

	// fadeinleft-animation-start
	gsap.utils.toArray('.faderight ').forEach((el, index) => {
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 90%",
			end: "buttom 50%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})

		tl1
		.from(el, { x: "+=100" , opacity: .8 }, {opacity: 1, scale: 1, x: 0, duration: 1, immediateRender: false})
	  })




	// text-clipPath-animation-start
	gsap.utils.toArray('.has-stoke ').forEach((el, index) => {
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 90%",
			end: "buttom 60%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})

		tl1
		.fromTo(el , { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"},
							{        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" })
	  })


	// image-paralax-animation-start
	  gsap.utils.toArray(".image-pllx").forEach(function(container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
			  trigger: container,
			  scrub: true,
			  pin: false,
			},
		  });
		  tl.from(image, {
			yPercent: -30,
			scale: 1.1,
			ease: "none",
		  }).to(image, {
			yPercent: 30,
			scale: 1.1,
			ease: "none",
		  });
	  });


	// services-scetion
	var gtbp1 = gsap.timeline({

		scrollTrigger: {
		  animation: gtbp1,
		  trigger: '.gly-services-1-area',
		  start: "top 100%",
		  end: "bottom 30%",
		  scrub: 2,
		  toggleActions: "play reverse play reverse",
		  markers: false
		}
	});

	gtbp1.from( ".gly-services-1-icon-wrap" , { rotateZ: -200,  duration:1 } )
	gtbp1.from( ".gly-services-1-icon-3" , { scale: 0 ,  },"<")
	gtbp1.from( ".gly-services-1-icon-2" , { scale: 0 , },"<=.1")
	gtbp1.from( ".gly-services-1-icon-1" , { scale: 0 , },"<=.1")
	gtbp1.from( ".gly-services-1-img img" , { scale: 1.5, duration:1 }, "<" )



	// project-1-section-animation
	var glypr1 = gsap.timeline({

		scrollTrigger: {
			animation: glypr1,
			trigger: '.gly-project-1-area',
			start: "top 80%",
			end: "top 30%",
			scrub: 2,
			// pin: true,
			// pinSpacing: true,
			markers: false
		}
	});

	glypr1.from( ".gly-project-1-curlc-icon svg" , { rotateZ: 360,  duration:1 })
	glypr1.from( ".gly-project-1-curlc-icon i" , { yPercent: 100, xPercent: -100,  duration:1 }, "<")


	// testimonial-2-animation
	var glyt2g = gsap.timeline({

		scrollTrigger: {
			animation: glyt2g,
			trigger: '.gly-testimonial-2-area',
			start: "top 130%",
			end: "bottom 0%",
			scrub: 2,
			// pin: true,
			// pinSpacing: true,
			markers: false
		}
	});

	glyt2g.from( ".gly-earth" , { rotateZ: 360,  duration:1 })
	glyt2g.from( ".gly-earth" , { yPercent: 100,   duration:1 }, "<")
	glyt2g.fromTo( ".gly-earth img" , { filter: "drop-shadow(0px 0px  0px #1667A9)" ,   duration:1 }, {
		filter: "drop-shadow(0px -40px  50px #1667A9)"
	}, "<.5" )


	// project-3-animation
	gsap.utils.toArray('.gly-project-3-item1 ').forEach((el, index) => {
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 90%",
			end: "buttom 50%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})

		tl1
		.set(el, { perspective: 2000 , transformStyle: "preserve-3d" , transformOrigin: "0% 50%" })
		.from(el , { scaleX: .2  , opacity: 0})
	  })


	gsap.utils.toArray('.gly-project-3-item2 ').forEach((el, index) => {
		let tl1 = gsap.timeline({
		  scrollTrigger: {
			trigger: el,
			scrub: 1,
			start: "top 90%",
			end: "buttom 50%",
			toggleActions: "play none none reverse",
			 markers: false
		  }
		})

		tl1
		.set(el, { perspective: 2000 , transformStyle: "preserve-3d" , transformOrigin: "100% 50%" })
		.from(el , { scaleX: .2  , opacity: 0})
	  })


	// footer-2-animation
	var glyf2g = gsap.timeline({

		scrollTrigger: {
			animation: glyf2g,
			trigger: '.gly-footer-2-area',
			start: "top 100%",
			end: "bottom 90%",
			scrub: 1,
			// pin: true,
			// pinSpacing: true,
			markers: false
		}
	});

	glyf2g.from( ".gly-footer-2-area" , { yPercent: 20,  duration:1 })
	.from( ".gly-footer-2-il-1" , { yPercent: -20, xPercent: 20,  duration:1 }, "<.3")
	.from( ".gly-footer-2-il-2" , { yPercent: 20, xPercent: -20,  duration:1 }, "<.3")
	.from( ".gly-footer-2-top-line" , { scaleX: .5 ,  duration:1 }, "<")


	// portfolio-3-animation
	var glyf3g = gsap.timeline({

		scrollTrigger: {
			animation: glyf3g,
			trigger: '.gly-portfolio-3-area',
			start: "top 100%",
			end: "top 30%",
			scrub: 1,
			markers: false
		}
	});

	glyf3g.from( ".gly-portfolio-3-item-wrap" , { xPercent: 100,  duration:1 })
	.from( ".gly-portfolio-3-bg-shape" , { xPercent: 100,  duration:1 }, "<=.5")


	// about-3-animation
	var glyabut3g = gsap.timeline({

		scrollTrigger: {
			animation: glyabut3g,
			trigger: '.gly-about-3-area',
			start: "top 80%",
			end: "top -30%",
			scrub: 1,
			markers: false
		}
	});

	glyabut3g.from( ".gly-about-3-shape-1" , { scaleX: 0,  duration:1 })


	// testimonial-3-animation
	var glyt3g = gsap.timeline({

		scrollTrigger: {
			animation: glyt3g,
			trigger: '.gly-testimonial-3-bg-img',
			start: "top 70%",
			end: "top 0%",
			scrub: 1,
			markers: false
		}
	});

	glyt3g.from( ".gly-testimonial-3-bg-img img" , { yPercent: 100,  duration:1 })

	// campaign-3-animation
	var glyc3g = gsap.timeline({

		scrollTrigger: {
			animation: glyc3g,
			trigger: '.gly-campaign-3-img',
			start: "top 70%",
			end: "top 0%",
			scrub: 2,
			markers: false
		}
	});

	glyc3g.from( ".gly-campaign-3-img" , { xPercent: 100, stagger: .2,  duration:1 })

	// award-3-animation
	var glyaw3g = gsap.timeline({

		scrollTrigger: {
			animation: glyaw3g,
			trigger: '.gly-award-3-img',
			start: "top 80%",
			end: "top 40%",
			scrub: 2,
			markers: false
		}
	});

	glyaw3g.from( ".gly-award-3-img img" , { yPercent: 100, stagger: .2,  duration:1 })


	// counter-4-animation
	var glyct4g = gsap.timeline({

		scrollTrigger: {
			animation: glyaw3g,
			trigger: '.gly-expi-count-4-area',
			start: "top 90%",
			end: "top 50%",
			scrub: 2,
			markers: false
		}
	});

	glyct4g.from( ".gly-expi-count-4-area" , { yPercent: 100,  duration:1 })


	// campaign-4-animation
	var glycam4g = gsap.timeline({

		scrollTrigger: {
			animation: glyaw3g,
			trigger: '.gly-campaign-4-bg-img',
			start: "top 90%",
			end: "top 50%",
			scrub: 2,
			markers: false
		}
	});

	glycam4g.from( ".gly-campaign-4-bg-img" , { scale: 0,  duration:1 })
	glycam4g.from( ".gly-campaign-4-img" , { yPercent: 100,  duration:1 })


	// price-4-animation
	var glyprice4g = gsap.timeline({

		scrollTrigger: {
			animation: glyaw3g,
			trigger: '.gly-price-4-bg-img ',
			start: "top 80%",
			end: "top 30%",
			scrub: 2,
			markers: false
		}
	});

	glyprice4g.from( ".gly-price-4-bg-shape" , { y: "100%",  duration:1 })
	glyprice4g.from( ".gly-price-4-bg-img img" , { y: "100%",  duration:1 })



	// cta-4-animation
	var glycta4g = gsap.timeline({

		scrollTrigger: {
			animation: glyaw3g,
			trigger: '.news5-img',
			start: "top 80%",
			end: "top 30%",
			scrub: 2,
			markers: false
		}
	});

	glycta4g.from( ".news5-img img" , { y: "100%",  duration:1 })



	// title-animation
	$(window).on('load',function(){
		var st = $(".gly-split-text");
		if(st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function(index, el) {
		  el.split = new SplitText(el, {
			type: "lines,words,chars",
			linesClass: "split-line"
		  });
		  gsap.set(el, { perspective: 400 });


		  if( $(el).hasClass('gly-split-in-clr') ){
			gsap.set(el.split.chars, {
			  opacity: 1,
				scale: .8,
				x: "100",
				ease: "Back.easeOut",
				color: getComputedStyle(
					document.documentElement
				).getPropertyValue("--gly-pr-6"),
			});
		  }


		  if( $(el).hasClass('gly-split-in-down') ){
			gsap.set(el.split.lines, {
				  opacity: 0,
				y: "-100",
				rotateX: "50",
				ease: "Back.easeOut",
				color: "red",
			});
		  }

		  el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
			  trigger: el,
			  start: "top 90%",
			},
			x: "0",
			y: "0",
			rotateX: "0",
			color: 'inherit',
			scale: 1,
			opacity: 1,
			duration: 1.5,
			stagger: 0.02,
		  });
		  el.anim = gsap.to(el.split.lines, {
			scrollTrigger: {
			  trigger: el,
			  start: "top 90%",
			},
			x: "0",
			y: "0",
			rotateX: "0",
			color: 'inherit',
			scale: 1,
			opacity: 1,
			duration: 1.5,
			stagger: 0.02,
		  });
		});
	});

	// experience-1-slider
	let glyexp1 = new Swiper('.gly-ex1-active', {
		loop: true,
		speed: 2000,

		direction: "vertical",
		mousewheel: true,

		autoplay: {
		  delay: 2000,
		},

	});

	// blog-img-slider
	let glyblogimg = new Swiper('.gly-blog-img-slider-active', {
		loop: true,
		speed: 1000,
		autoplay: {
		  delay: 3000,
		},

		navigation: {
			nextEl: ".gly_blog_img_next",
			prevEl: ".gly_blog_img_prev",
		},

	});

	// testimonial-2-slider
	let glyt2 = new Swiper('.gly-t2-active', {
		loop: true,
		spaceBetween: 25,
		speed: 2000,
		centeredSlides: true,
		autoplay: {
		  delay: 5000,
		},

		navigation: {
			nextEl: ".gly_t2_next",
			prevEl: ".gly_t2_prev",
		},


	});

	// testimonial-3-slider-active
	if($('.gly-t3-active'.length)) {

		var glyt3= new Swiper('.gly-t3-active', {
		  speed: 1000,
		  loop: true,
		  spaceBetween: 20,
		  direction: "vertical",
		  mousewheel: true,
		  slidesPerView: 3,
		  autoplay: {
			delay: 3000,
		  },

		  navigation: {
			nextEl: ".gly_t3_next",
			prevEl: ".gly_t3_prev",
		  },

		  breakpoints: {
			0: {
			  slidesPerView: 1,
			},
			576: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 2,
			},
			992: {
			  slidesPerView: 2,
			},
			1200: {
			  slidesPerView: 3,
			},
		  },


		});
	  }

	// gellary-marquee-active
	if($('.gellary-marquee').length) {
		$('.gellary-marquee').marquee({
			duration: 25000,
			gap: 12,
			delayBeforeStart: 0,
			startVisible:true,
			  pauseOnHover: true,
			direction: 'left',
			duplicated: true
		});
	}

	if($('.tx-brandWrapper').length) {
		let brandWrapper = $('.tx-brandWrapper');
		let speed = brandWrapper.data('speed') ? brandWrapper.data('speed') : 50;
		$('.tx-brandWrapper').marquee({
			speed: speed,
			gap: 90,
			delayBeforeStart: 0,
			direction: "left",
			duplicated: true,
			pauseOnHover: false,
			startVisible: true,
		});
	}


	/* mouse-move-animation */
	document.addEventListener("mousemove" , parallax);
	function parallax(e){

		document.querySelectorAll(".object").forEach(function(move){

			var moving_value = move.getAttribute("data-value");
			var x = (e.clientX * moving_value) /250;
			var y = (e.clientY * moving_value) /250;

			move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
		})

	}


	// cursor follow
	$(document).ready(function () {
		var mWrap = $(".gly-project-4-item .item-img ");

		mWrap.hover(function () {
		  var mContent = $(this).find("#magnetic-content");
		  var mArea = $(this).find("#magnetic-area");

		  function parallaxIt(e, target, movement = 1) {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			var boundingRect = mArea[0].getBoundingClientRect();
			var relX = e.pageX - boundingRect.left;
			var relY = e.pageY - boundingRect.top;

			gsap.to(mContent, {
			  x: (relX - boundingRect.width / 2) * movement,
			  y: (relY - boundingRect.height / 2 - scrollTop) * movement,
			  ease: "power1",
			  duration: 0.6
			});
		  }

		  function callParallax(e) {
			parallaxIt(e, mWrap);
		  }

		  mArea.mousemove(function (e) {
			callParallax(e);
		  });
		  mArea.mouseleave(function (e) {
			gsap.to(mContent, {
			  scale: 1,
			  x: 0,
			  y: 0,
			  ease: "power1",
			  duration: 0.6
			});
		  });
		});
	  });




	// price-4-active-class
	if($('.gly-price-4-card').length) {
		$(".gly-price-4-card").on("mouseover", function(){
		var current_class = document.getElementsByClassName("gly-price-4-card active");
		current_class[0].className = current_class[0].className.replace(" active", "");
		this.className += " active";
		});
	}


	/* faq-active-class */
	$(document).on('click', '.gly-accordion-item', function(){
		$(this).addClass('faq_bg').siblings().removeClass('faq_bg')
	})


	/* back-to-top */
	var backtotop = $('.scroll-top');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
		backtotop.addClass('show');
		} else {
		backtotop.removeClass('show');
		}
	});

	backtotop.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '700');
	});


	/* counter */
	$('.counter').counterUp({
		delay: 10,
		time: 3000
	});

	/* data-bg-activition */
	$("[data-background]").each(function(){
		$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
	})


	// wow-activation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};


	/*
	popup-video-activition
	====start====
	*/

	if($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	}


	/*
	popup-img-activition
	====start====
	*/

	if($('.popup_img').length) {
		$('.popup_img').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		});
	}


	// qty activation
	if ($("input.product-count").length) {
		$("input.product-count").TouchSpin({
			min: 1,
			max: 1000,
			step: 1,
			buttondown_class: "btn btn-link",
			buttonup_class: "btn btn-link",
		});
	}

// Background Image Active
function bgImageActive($scope, $) {
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ") "
		);
	});
}

// service carousel
function serviceSlider($scope, $) {
	let service_slider_1 = new Swiper(".gly-p1-slider-active", {
		loop: true,
		rtl: false,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		pagination: {
			el: ".gly-p1-pagination",
			clickable: true,
		},
	});
}

// brandActive
function brandActive($scope, $) {
	let wrapper = $(".gly-sponser-1-active");
	let delay = wrapper.data("delay");
	let speed = wrapper.data("speed");
	let slideitem = wrapper.data("slideitem");
	let brand_slider_1 = new Swiper(".gly-sponser-1-active", {
		loop: true,
		speed: speed,
		autoplay: {
			delay: delay,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: slideitem,
			},
		},
	});
}

// testimonialActive
function testimonialActive($scope, $) {
	let testimonial_slider_1 = new Swiper(".gly-t1-active", {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: ".gly_t1_next",
			prevEl: ".gly_t1_prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
	});

	if($('.gly-t5-active'.length)) {

		var testimonial_slider_2 = new Swiper('.gly-t5-active', {
		  speed: 1000,
		  loop: true,
		  spaceBetween: 30,
		  slidesPerView: 4,
		  autoplay: {
			delay: 4000,
		  },

		  pagination: {
			el: ".gly-testimonial-5-slider-pagination",
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		  },


		  breakpoints: {
			0: {
			  slidesPerView: 1,
			},
			576: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 2,
			},
			992: {
			  slidesPerView: 2,
			},
			1200: {
			  slidesPerView: 2,
			},
			1400: {
			  slidesPerView: 3,
			},
			1600: {
			  slidesPerView: 3,
			},
			1800: {
			  slidesPerView: 4,
			},
		  },


		});
	  }
}

// project Slider
function projectSlider($scope, $) {
	let glyp2 = new Swiper(".gly-p2-active", {
		loop: true,
		spaceBetween: 25,
		speed: 2000,
		centeredSlides: true,
		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".gly_p2_next",
			prevEl: ".gly_p2_prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});
}

// team slider active
function teamSlider($scope, $) {
	if ($(".gly-t4-active".length)) {
		var temaSlider_1 = new Swiper(".gly-t4-active", {
			speed: 1000,
			loop: true,
			spaceBetween: 30,
			slidesPerView: 4,
			autoplay: {
				delay: 4000,
			},
			pagination: {
				el: ".gly-team-3-slider-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return (
						'<span class="' +
						className +
						'">' +
						(index + 1) +
						"</span>"
					);
				},
			},

			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 4,
				},
			},
		});
	}
}

// heroSlider
function heroSlider($scope, $) {
	let heroSlider_1 = new Swiper('.gly-hero-4-active', {
		loop: false,
		rtl: false,
		speed: 3000,
		autoplay: {
		  delay: 5000,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: ".gly_h4_next",
			prevEl: ".gly_h4_prev",
		},

	});
}

// service carousel
function serviceCarousel($scope, $) {
	let service_slider_2 = new Swiper('.gly-s4-active', {
		loop: true,
		spaceBetween: 30,
		speed: 1000,
		autoplay: {
		  delay: 4000,
		},

		navigation: {
			nextEl: ".gly_s4_next",
			prevEl: ".gly_s4_prev",
		},

		breakpoints: {
			0: {
			  slidesPerView: 1,
			},
			768: {
			  slidesPerView: 2,
			},
			992: {
			  slidesPerView: 2,
			},
			1200: {
			  slidesPerView: 3,
			},
		},
	});
}

$(window).on("elementor/frontend/init", function () {
	elementorFrontend.hooks.addAction(
		"frontend/element_ready/tx_hero_section.default",
		function ($scope, $) {
			bgImageActive($scope, $);
		}
	);
	elementorFrontend.hooks.addAction(
		"frontend/element_ready/tx_service_section.default",
		function ($scope, $) {
			serviceSlider($scope, $);
		}
	);
	elementorFrontend.hooks.addAction(
		"frontend/element_ready/tx_brand.default",
		function ($scope, $) {
			brandActive($scope, $);
		}
	);
	elementorFrontend.hooks.addAction(
		"frontend/element_ready/tx_testimonial.default",
		function ($scope, $) {
			testimonialActive($scope, $);
			bgImageActive($scope, $);
		}
	);
	elementorFrontend.hooks.addAction(
		"frontend/element_ready/tx_project_moving.default",
		function ($scope, $) {
			projectSlider($scope, $);
		}
	);
	elementorFrontend.hooks.addAction(
		"frontend/element_ready/tx_team.default",
		function ($scope, $) {
			teamSlider($scope, $);
		}
	);
	elementorFrontend.hooks.addAction(
		"frontend/element_ready/tx_contact_info.default",
		function ($scope, $) {
			bgImageActive($scope, $);
		}
	);
	elementorFrontend.hooks.addAction(
		"frontend/element_ready/tx_newsletter.default",
		function ($scope, $) {
			bgImageActive($scope, $);
		}
	);
	elementorFrontend.hooks.addAction(
		"frontend/element_ready/tx_hero_slider.default",
		function ($scope, $) {
			heroSlider($scope, $);
		}
	);
	elementorFrontend.hooks.addAction(
		"frontend/element_ready/tx_service_lists.default",
		function ($scope, $) {
			serviceCarousel($scope, $);
		}
	);
});

	})(jQuery);