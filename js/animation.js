//(function () {
//    let slogan = document.querySelector('.slogan_wrapper');
//    var childs = document.querySelectorAll('.wrapper > *');
    
//    var child_two = childs[1].offsetTop;
//    slogan.className += " slogan_wrapper_act"
//    var box_ani = this.document.querySelector('.box_ani');
//    var subtit = this.document.querySelector('.subtit_ani');
//    var groups = this.document.querySelectorAll('.group_ani');

//    //Çï½ºÄÉ¾î 
//    var healthCare = document.querySelector('#healthCare');
//    var healthCare_img = document.querySelector('#healthCare img');
//    var sc_cnt = 0;
//    window.__scrollPosition = document.documentElement.scrollTop || 0;



//    window.addEventListener('scroll', function () {
//        let _documentY = document.documentElement.scrollTop;
//        let _direction = _documentY - window.__scrollPosition >= 0 ? true : false;
//        console.log(_direction)
//        if (!box_ani.className.includes("act") && this.scrollY > child_two - 100) {
//            box_ani.className += " act"
//        }
//        if (!subtit.className.includes("act") && this.scrollY > child_two ) {
//            subtit.className += " act"
//        }
//        if (!groups[0].className.includes("act") && this.scrollY > child_two + 100) {
//            groups[0].className += " act"
//        }
//        if (!groups[1].className.includes("act") && this.scrollY > child_two + 300) {
//            groups[1].className += " act"
//        }
//        if (!groups[2].className.includes("act") && this.scrollY > child_two + 500) {
//            groups[2].className += " act"
//        }
//        //if (this.scrollY <= healthCare.offsetTop) {
//        //    if ((this.scrollY - healthCare.offsetTop) / 100 >= 0) {
//        //        healthCare_img.style.transform = `scale(${(this.scrollY - healthCare.offsetTop) / 100})`
//        //    }
//        //}
//        if (this.scrollY > healthCare.offsetTop && this.scrollY < (healthCare.offsetTop + healthCare.offsetHeight - 500)) {
//            if (_direction) {
//                this.console.log(sc_cnt)
//                sc_cnt++
//            } else {
//                this.console.log(sc_cnt)
//                sc_cnt--
//            }
//            if ((this.scrollY - healthCare.offsetTop) / 100 >= 1 && (this.scrollY - healthCare.offsetTop) / 100 <= 5) {
//                healthCare_img.style.transform = `scale(${(this.scrollY - healthCare.offsetTop) / 100})`
//            }
//        }
//        window.__scrollPosition = _documentY; // Update scrollY

//    })
//})();

(function() {
    var screenInner = this.innerWidth;
    var header = document.querySelector('.header');
    var nav_menu = document.querySelectorAll('.nav_menu')[2];
    var btn_mob_menu = document.querySelector('.btn_mob_menu');
    var nav_wrapper = document.querySelector('.nav_wrapper');
    nav_menu.addEventListener('click', function () {
        nav_wrapper.classList.remove('on');
    })
    btn_mob_menu.addEventListener('click', function () {
        btn_mob_menu.classList.toggle('menu_close')
        nav_wrapper.classList.toggle('on');
    })
    window.addEventListener('scroll', function () {
        if (this.scrollY > header.offsetTop + header.offsetHeight) {
            header.classList.add('black');
        } else {
            header.classList.remove('black');
        }

    });
    var ani_gr = document.querySelectorAll('.ani_gr');
    var care_item = document.querySelector('.care_item');
    var worker = document.querySelector('.worker img');
    var message = document.querySelectorAll('.message span');
    var member_wrap = document.querySelectorAll('.member_wrap');
    var percent = document.querySelector('.percent');

    gsap.fromTo(".slogan", {
        scrollTrigger: {
            trigger: ".slogan",
        },
        y: 20,
        opacity: 0,
        duration: 1,
        
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
    })

    gsap.to(".subtit", {
        scrollTrigger: {
            trigger: "#mission",
            start: "top 50%",
        },
        y: -30,
        opacity: 1,
        duration: 1
    });
    gsap.to(".content", {
        scrollTrigger: {
            trigger: "#mission",
            start: "top 25%",
        },
        y: -30,
        opacity: 1,
        duration: 1
    });
    gsap.to(".subtit_ani", {
        scrollTrigger: {
            trigger: "#mission",
            start: "top -10%",
        },
        y: -30,
        opacity:1,
        duration: 0.5
    });
    
   
    gsap.to(".group_ani1", {
        scrollTrigger: {
            trigger: ".group_ani1",
            start: screenInner > 767 ? "top -50%" : "top 100%",
        },
        x: -40,
        opacity: 1,
        duration: 1
    });

    gsap.to(".group_ani2", {
        scrollTrigger: {
            trigger: ".group_ani2",
            start: screenInner > 767 ? "top -75%" : "top 80%",
        },
        x: -40,
        opacity: 1,
        duration: 1
    });
    gsap.to(".group_ani3", {
        scrollTrigger: {
            trigger: ".group_ani3",
            start: screenInner > 767 ? "top -100%" : "top 60%",
        },
        x: -40,
        opacity: 1,
        duration: 1
    });
    gsap.to(".care_item_inner > img", {
        scrollTrigger: {
            trigger: ".care_item_inner",
            start: "top 0",
            scrub:true
        },
        scale: 3.3,
        x: 200,
        y: 30,
        duration: 5
    });

    gsap.to(".care_item > img", {
        scrollTrigger: {
            trigger: ".care_item.app",
            start: screenInner > 767 ? "top 200px" : "top 100px",
            end: screenInner > 767 ? "top -100%" : "top -200%",
            scrub: true,
        },
        scale: 1,
        y: -500,
        duration: 5
    })
    gsap.to(".care_item.app > span", {
        scrollTrigger: {
            trigger: ".care_item.app",
            start: screenInner > 767 ? "top 500px" : "top 300px",
            end: screenInner > 767 ? "top -150%" : "top -250%",
            scrub: true,
        },
        y: -500,
        duration: 1
    })
    gsap.to(".care_item.app > div", {
        scrollTrigger: {
            trigger: ".care_item.app",
            start: screenInner > 767 ? "top 500px" : "top 300px",
            end: screenInner > 767 ? "top -150%" : "top -250%",
            scrub: true,
        },
        y: -500,
        duration: 3
    })
    //gsap.to(care_item, {
    //    xPercent: -80,
    //    ease: "none",
    //    scrollTrigger: {
    //        trigger: care_item,
    //        scrub: 1,
    //        snap: false,
    //        start: "top",
    //        end: () => "+=" + care_item.offsetWidth - 100
    //    }
    //});

    //gsap.fromTo(".subtit", {
    //    scrollTrigger: {
    //        trigger: ".subtit",
    //        start: "bottom 0",
    //        end:"bottom 300px"
    //    },
    //    y: 100,
    //    opacity: 0,
    //    duration: 1,
    //}, {
    //    y: 0,
    //    opacity: 1,
    //    duration: 1
    //});


    var startCount = 0,
        num = { var: startCount };
    gsap.timeline({
        scrollTrigger: {
            trigger: ".industry",
            start: "top 0",
            end: screenInner > 767 ? "top -200%" : "top -130%",
            scrub: true,
        }
    }).to(num, { var: 50, duration: 1, ease: "none", onUpdate: changeNumber })


    function changeNumber() {
        for (i = 0; i < ani_gr.length; i++) {
                ani_gr[i].classList.remove("act");

            if ((num.var).toFixed() * 2 >= 10 * (i - 1) && (num.var).toFixed() * 2 <= 10 * i) {
                message[0].classList.remove("act");
                message[1].classList.remove("act");
                message[2].classList.remove("act");
                if (i < 6) {
                    worker.src = "img/worker2.png";
                    message[0].classList.add("act");
                }
                if (i === 6) {
                    worker.style.opacity = "0";
                }
                if (i >= 6 && i < 9) {
                    worker.style.opacity = "1";
                    worker.src = "img/worker1.png"
                    message[1].classList.add("act");
                }
                if (i >= 9) {
                    worker.src = "img/worker0.png"
                    message[2].classList.add("act");
                }
            }
            if ((num.var).toFixed() * 2 >= 10 * i) {
                ani_gr[i].classList.add("act");
                if ((num.var).toFixed() * 2 <= 10 * (i + 1)) {
                    if (i < 6) {
                        worker.src = "img/worker2.png";
                        message[0].classList.add("act");
                    }
                    if (i >= 6 && i < 9) {
                        worker.src = "img/worker1.png"
                        message[1].classList.add("act");
                    }
                    if (i >= 9) {
                        worker.src = "img/worker0.png"
                        message[2].classList.add("act");
                    }
                }

            }

        }
      

        if (percent) percent.innerHTML = (num.var).toFixed() * 2;        
    }

  
    for (i = 0; i < member_wrap.length; i++) {
        gsap.to(member_wrap[i], {
            scrollTrigger: {
                trigger: member_wrap[i],
                start: `top ${500 + (member_wrap.length - i)*70}px`
            },
            y: -40,
            opacity: 1,
            duration: 1,
        })
    }
    var path = document.querySelectorAll('.desc path');
    var polyline = document.querySelectorAll('.desc polyline');
    var line = document.querySelectorAll('.desc line');
    var circle = document.querySelectorAll('.desc circle');
    gsap.timeline({
        scrollTrigger: {
            trigger: ".content1>.desc",
            start: "top 50%",
        }
    }).to("a",{ onUpdate: changeNumber2 })
    function changeNumber2() {
        for (i = 0; i < path.length; i++) {
            path[i].classList.add('ani');
        }
        for (i = 0; i < polyline.length; i++) {
            polyline[i].classList.add('ani');
        }
        for (i = 0; i < line.length; i++) {
            line[i].classList.add('ani');
        }
        for (i = 0; i < circle.length; i++) {
            circle[i].classList.add('ani');
        }
    }
    var desc = document.querySelector('.content2>.desc');

    gsap.timeline({
        scrollTrigger: {
            trigger: ".content2>.desc",
            start: "top 50%",
        }
    }).to("a", { onUpdate: changeNumber3 })
    function changeNumber3() {
        if (desc) desc.classList.add('ani');
    }

  
})();
