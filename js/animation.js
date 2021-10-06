(function () {
    let slogan = document.querySelector('.slogan_wrapper');
    var childs = document.querySelectorAll('.wrapper > *');

    var child_two = childs[1].offsetTop;
    slogan.className += " slogan_wrapper_act"
    var box_ani = this.document.querySelector('.box_ani');
    var subtit = this.document.querySelector('.subtit_ani');
    var groups = this.document.querySelectorAll('.group_ani');
    console.log(groups)


    window.addEventListener('scroll', function () {
        if (!box_ani.className.includes("act") && this.scrollY > child_two - 100) {
            box_ani.className += " act"
        }
        if (!subtit.className.includes("act") && this.scrollY > child_two ) {
            subtit.className += " act"
        }
        if (!groups[0].className.includes("act") && this.scrollY > child_two + 100) {
            groups[0].className += " act"
        }
        if (!groups[1].className.includes("act") && this.scrollY > child_two + 300) {
            groups[1].className += " act"
        }
        if (!groups[2].className.includes("act") && this.scrollY > child_two + 500) {
            groups[2].className += " act"
        }
        this.console.log(this.scrollY);
    })
})();

