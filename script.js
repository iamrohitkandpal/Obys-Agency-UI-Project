function loadingAnime(){
    var h5timer = document.querySelector(".line1-part1 h5");
    var count = 0;

    var tl = gsap.timeline()

    tl.from(".line h1",{
    y:150,
    stagger:0.3,
    duration:0.5,
    delay:0.7,
    opacity:0
    });
    tl.from(".line1-part1",{
    // delay:-0.25,
    opacity:0,
    onStart: function(){
        setInterval(()=>{
            if(count<100){
                h5timer.textContent = count++;
            }else{
                h5timer.textContent = count;
            }
        }, 25);
    }
    });
    tl.to(".line h2",{
    opacity:1,
    animationName: "anime",
    delay:-0.45
    })
    tl.from("#load-para",{
    opacity:0,
    });
    tl.to(".loader",{
    top:-1000,
    duration:1,
    ease: Power4,
    delay:2.2
    })
    tl.from(".nav",{
        delay:0.2,
        opacity:0
    })
    tl.from("#hero-1 h1, #hero-2 h1, #hero-3 h2, #hero-4 h1",{
        y:150,
        stagger:0.2
    })
};
function cursorAnime(){
    document.addEventListener("mousemove", function(dets){
        gsap.to(".crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    Shery.makeMagnet(".nav i, .nav-right h3", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    });
};






















loadingAnime();
cursorAnime();