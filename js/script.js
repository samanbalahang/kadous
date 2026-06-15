window.addEventListener("load", () => {


    let menus = document.querySelectorAll(".menu-btn-3");
    let mainMenu = document.querySelector(".main-menu");
    let Headermain = document.querySelector("header.main");
    let lestScrollTop = 0;
    menus.forEach(menu => {
        menu.addEventListener("click", () => {
            menu.classList.toggle("open");
            mainMenu.classList.toggle("open");
        })
    });
    let imageSlider = document.querySelector(".custom-slider");
    let imageSlidersrc = imageSlider.getAttribute("src")
    let imageSlider2 = imageSlider.getAttribute("data-srca");
    let imageSlider3 = imageSlider.getAttribute("data-src");
    let imageSlidercounter = imageSlider.getAttribute("date-count");
    let showUpPerson = document.querySelector(".show-up-person");
    let hashtBack = document.querySelector(".hasht-back");
    let dataSlide = hashtBack.getAttribute("data-slide");
    console.log(hashtBack);
    let hashtBackchanger = () => {
        setInterval(() => {

            dataSlide = hashtBack.getAttribute("data-slide");
            console.log("dataSlide:", dataSlide);
            switch (dataSlide) {
                case "1":
                    console.log("case 1:");
                    hashtBack.classList.add("slide-1");
                    hashtBack.classList.remove("slide-2");
                    hashtBack.classList.remove("slide-3");
                    hashtBack.classList.remove("slide-4");
                    hashtBack.classList.remove("slide-5");
                    hashtBack.classList.remove("slide-6");
                    hashtBack.classList.remove("slide-7");
                    hashtBack.classList.remove("slide-8");
                    hashtBack.setAttribute("data-slide", "2");
                    break;
                case "2":
                    hashtBack.classList.add("slide-2");
                    hashtBack.classList.remove("slide-1");
                    hashtBack.classList.remove("slide-3");
                    hashtBack.classList.remove("slide-4");
                    hashtBack.classList.remove("slide-5");
                    hashtBack.classList.remove("slide-6");
                    hashtBack.classList.remove("slide-7");
                    hashtBack.classList.remove("slide-8");
                    hashtBack.setAttribute("data-slide", "3");
                    break;
                case "3":
                    hashtBack.classList.add("slide-3");
                    hashtBack.classList.remove("slide-1");
                    hashtBack.classList.remove("slide-2");
                    hashtBack.classList.remove("slide-4");
                    hashtBack.classList.remove("slide-5");
                    hashtBack.classList.remove("slide-6");
                    hashtBack.classList.remove("slide-7");
                    hashtBack.classList.remove("slide-8");
                    hashtBack.setAttribute("data-slide", "4");
                    break;
                case "4":
                    hashtBack.classList.add("slide-4");
                    hashtBack.classList.remove("slide-1");
                    hashtBack.classList.remove("slide-2");
                    hashtBack.classList.remove("slide-3");
                    hashtBack.classList.remove("slide-5");
                    hashtBack.classList.remove("slide-6");
                    hashtBack.classList.remove("slide-7");
                    hashtBack.classList.remove("slide-8");
                    hashtBack.setAttribute("data-slide", "5");
                    break;
                case "5":
                    hashtBack.classList.add("slide-5");
                    hashtBack.classList.remove("slide-1");
                    hashtBack.classList.remove("slide-2");
                    hashtBack.classList.remove("slide-3");
                    hashtBack.classList.remove("slide-4");
                    hashtBack.classList.remove("slide-6");
                    hashtBack.classList.remove("slide-7");
                    hashtBack.classList.remove("slide-8");
                    hashtBack.setAttribute("data-slide", "6");
                    break;
                case "6":
                    hashtBack.classList.add("slide-6");
                    hashtBack.classList.remove("slide-1");
                    hashtBack.classList.remove("slide-2");
                    hashtBack.classList.remove("slide-3");
                    hashtBack.classList.remove("slide-4");
                    hashtBack.classList.remove("slide-5");
                    hashtBack.classList.remove("slide-7");
                    hashtBack.classList.remove("slide-8");
                    hashtBack.setAttribute("data-slide", "7");
                    break;
                case "7":
                    hashtBack.classList.add("slide-7");
                    hashtBack.classList.remove("slide-1");
                    hashtBack.classList.remove("slide-2");
                    hashtBack.classList.remove("slide-3");
                    hashtBack.classList.remove("slide-4");
                    hashtBack.classList.remove("slide-5");
                    hashtBack.classList.remove("slide-6");
                    hashtBack.classList.remove("slide-8");
                    hashtBack.setAttribute("data-slide", "8");
                    break;
                case "8":
                    hashtBack.classList.add("slide-8");
                    hashtBack.classList.remove("slide-1");
                    hashtBack.classList.remove("slide-2");
                    hashtBack.classList.remove("slide-3");
                    hashtBack.classList.remove("slide-4");
                    hashtBack.classList.remove("slide-5");
                    hashtBack.classList.remove("slide-6");
                    hashtBack.classList.remove("slide-7");
                    hashtBack.setAttribute("data-slide", "1");
                    break;
                default:

                    break;
            }
        }, 4000)
    }
    hashtBackchanger();


    // setTimeout(() => {
    //     imageSlider.setAttribute("src",imageSlider2);
    // }, 2000);
    let animationSlider = () => {
        setInterval(() => {
            imageSlidercounter = imageSlider.getAttribute("date-count");
            if (imageSlidercounter == "1") {
                imageSlider.setAttribute("date-count", "2");
                imageSlider.setAttribute("src", imageSlider2)
            } else if (imageSlidercounter == "2") {
                imageSlider.setAttribute("date-count", "3");
                imageSlider.setAttribute("src", imageSlider3)
            } else if (imageSlidercounter == "3") {
                imageSlider.setAttribute("date-count", "1");
                imageSlider.setAttribute("src", imageSlidersrc)
            }
            console.log("imageSlidercounter:", imageSlidercounter);
            console.log("imageSlidercounter:", imageSlidercounter == "1");
        }, 4000)
    };
    animationSlider();
    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lestScrollTop) {
            console.log("اسکرول به پایین");
            Headermain.classList.remove("on-scroll");

        } else {
            console.log("اسکرول به بالا");
            if (window.scrollY > 200) {
                Headermain.classList.add("on-scroll");
            } else {
                Headermain.classList.remove("on-scroll");
            }

        }
        lestScrollTop = scrollTop <= 0 ? 0 : scrollTop;


    })
    clearInterval(animationSlider);
    const target = document.querySelector('#hello');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    }
    const callback = (entries, observe) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // اگر المان در دسترس بود
                if (showUpPerson) {
                    showUpPerson.classList.add("show")
                }
                console.log("المان دیده شد");
                // اگر میخواهید یکبار لاگ داشتهخ باشید کد زیر را فعال کنید. 
                // observe.unobserve(entry.target)
                // entry.target.style.transform = "scale(1)";
            }
            // else {
            //     if (showUpPerson) {
            //         showUpPerson.classList.remove("show")
            //     }
            // }
        })
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
    var swiper = new Swiper(".base", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });
    var swiper = new Swiper(".moshtari", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 25,
            },
            1024: {
                slidesPerView: 7,
                spaceBetween: 30,
            },
        },
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });
    let thetyped = document.querySelector(".typedjs");
    let messajes = thetyped.getAttribute("data-content");

    var typed = new Typed(thetyped, {
        strings: [messajes],
        typeSpeed: 50,
        loop: true,
    });
});
