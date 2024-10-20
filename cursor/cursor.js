var hero = document.querySelector('.hero');
var cursor = document.querySelector('.cursor');


hero.addEventListener('mousemove', function(dets){
    gsap.to(cursor,{
        x:dets.x-8,
        y:dets.y-8,
        duration: 0.5,
        // ease:"back.out",
        ease: "power4.out",
        // ease:'elastic.out(1,0.3)',


    })
})