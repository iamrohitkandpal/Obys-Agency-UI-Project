var h5timer = document.querySelector(".line1-part1 h5");
var count = 0;



var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.3,
    duration:0.5,
    delay:0.5,
    opacity:0
});
tl.from(".line1-part1",{
    opacity:0,
    onStart: function(){
        setInterval(()=>{
            if(count<100){
                h5timer.textContent = count++;
            }else{
                h5timer.textContent = count;
            }
        }, 20);
    }
})
tl.to(".line h2",{
    opacity:1,
    animationName: "anime",
    delay:-0.35
})
tl.to(".loader",{
    top:-1000,
    duration:1,
    ease: Power4,
    delay:1.8
})