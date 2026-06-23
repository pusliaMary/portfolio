gsap.to('h1', {
    onUpdate: function () {
        
        if (window.innerWidth <600) {
            gsap.to('h1', {y:30, duration:2, delay:1, opacity:1, ease:"bounce"});
        }

        else if (window.innerWidth <1000) {
            gsap.to('h1', {x:100, duration:2, delay:1, opacity:1, ease:"bounce"});
        }

        else if (window.innerWidth <1200) {
            gsap.to('h1', {x:150, duration:2, delay:1, opacity:1, ease:"bounce"});
        }

        else {
            gsap.to('h1', {x:200, duration:3, opacity:1, ease:"bounce"});
        }
        
        }
    }   
)






gsap.from('.animPar2', {x:200, duration:2, delay:2, opacity:0})

gsap.to('.animBtn', {scale:1.05, repeat:-1, duration:1})

gsap.to ('.animPar1', {
    text: 'Web developer',
    duration:3
    
})


