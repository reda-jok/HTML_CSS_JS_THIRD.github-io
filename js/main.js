
//  navbar 
let icon = document.querySelector(".burg-icon");
let iconSpan = document.querySelectorAll(".burg-icon span");
let slideNav = document.querySelector('.slide-nav');

icon.onclick =(ee)=>{
    ee.stopPropagation();
    icon.classList.toggle('active');
    iconSpan.forEach( e =>{
        e.classList.toggle('active');
    });
    slideNav.classList.toggle('active');
};
document.addEventListener("click",(e)=>{
    if (e.target !== icon) {
        removeclass(icon,iconSpan,slideNav);
    }
});
//change the background of the nav color onscroll
let info = document.querySelector('.info');
let nav = document.querySelector('header');
scroll(info,nav);
// global function
function removeclass(one,tow,three) {
    one.classList.remove('active');
    tow.forEach( e =>{
        e.classList.remove('active');
    });
    three.classList.remove('active');
} ;
function scroll(one ,tow) {
    window.onscroll = ()=>{
        let oOffsetTop = one.offsetTop;
        let oOuterHeight = one.offsetHeight;
        let winH = this.innerHeight;
        let winY = this.pageYOffset;
        if (winY >(oOffsetTop + oOuterHeight - winH) ) {
            tow.classList.add('change');
        }else{
            tow.classList.remove('change');
        }
    };
}
scroll(info,nav);