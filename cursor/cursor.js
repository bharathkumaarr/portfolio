var hero = document.querySelector('.hero');
var cursor = document.querySelector('.cursor');


hero.addEventListener('mousemove', function(dets){
    gsap.to(cursor,{
        x:dets.x-20,
        y:dets.y-20,
        duration: 1,
        ease:"back.out",
        // ease:'elastic.out(1,0.3)',


    })
})