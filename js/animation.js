//(function () {
//    let slogan = document.querySelector('.slogan_wrapper');
//    var childs = document.querySelectorAll('.wrapper > *');
    
//    var child_two = childs[1].offsetTop;
//    slogan.className += " slogan_wrapper_act"
//    var box_ani = this.document.querySelector('.box_ani');
//    var subtit = this.document.querySelector('.subtit_ani');
//    var groups = this.document.querySelectorAll('.group_ani');

//    //�ｺ�ɾ� 
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

(function () {
    var ani_gr = document.querySelectorAll('.ani_gr');
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
            start: "top -50%",
        },
        x: -40,
        opacity: 1,
        duration: 1
    });

    gsap.to(".group_ani2", {
        scrollTrigger: {
            trigger: ".group_ani2",
            start: "top -75%",
        },
        x: -40,
        opacity: 1,
        duration: 1
    });
    gsap.to(".group_ani3", {
        scrollTrigger: {
            trigger: ".group_ani3",
            start: "top -100%",
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
    var percent = document.querySelector('.percent');
    gsap.timeline({
        scrollTrigger: {
            trigger: ".industry",
            start: "top 0",
            end:"top -200%",
            scrub: true,
        }
    }).to(num, { var: 100, duration: 1, ease: "none", onUpdate: changeNumber })


    function changeNumber() {

        for (i = 0; i < ani_gr.length ; i++) {
            console.log(i)
            if ((num.var).toFixed() >= 10 * (i - 1) && (num.var).toFixed() <= 10 * i) {
                ani_gr[i].classList.remove("act");
            }

            if ((num.var).toFixed() >= 10 * i ) {
                ani_gr[i].classList.add("act");
            }
            if ((num.var).toFixed() === 100) {
                ani_gr[i].classList.add("act");
            }
        }
        //if ((num.var).toFixed() <= 10) {
        //    ani_gr[0].className += " act"
        //}
        //if ((num.var).toFixed() <= 10) {
        //    ani_gr[0].className += " act"
        //}
        //if ((num.var).toFixed() <= 10) {
        //    ani_gr[0].className += " act"
        //}
        //if ((num.var).toFixed() <= 10) {
        //    ani_gr[0].className += " act"
        //}
        //if ((num.var).toFixed() <= 10) {
        //    ani_gr[0].className += " act"
        //}
        //if ((num.var).toFixed() <= 10) {
        //    ani_gr[0].className += " act"
        //}
        //if ((num.var).toFixed() <= 10) {
        //    ani_gr[0].className += " act"
        //}
        //if ((num.var).toFixed() <= 10) {
        //    ani_gr[0].className += " act"
        //}
        //if ((num.var).toFixed() <= 10) {
        //    ani_gr[0].className += " act"
        //}
        //if ((num.var).toFixed() <= 10) {
        //    ani_gr[9].className += " act"
        //}

        percent.innerHTML = (num.var).toFixed();        
    }
})();