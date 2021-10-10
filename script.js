gsap.registerPlugin(ScrollTrigger);
var t1 = gsap.timeline();

t1.from('.nav-container', {
    y: '-100%',
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut
})

t1.from('.container', {
    y: '-10%',
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut
},  "-=0.75")

t1.from('.stagger1' , {
    opacity: 0,
    y: -50,
    stagger: .2,
    ease: Power4.easeOut,
    duration: 0.6
}, "-=1")

t1.from('.main-graphic' , {
    opacity: 0,
    y: 50,
    ease: Power4.easeOut,
    duration: 1
}, "-=0.5")

gsap.from(".shape-anim",{
    stagger: 0.1,
    scale: 0.001,
    duration: 1,
    ease: Back.easeOut.config(1.8)
})


gsap.from(".fade-in1", {
    scrollTrigger: {
        trigger: '.fade-in1',
        start: "bottom bottom"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})

gsap.from(".fade-in2", {
    scrollTrigger: {
        trigger: '.fade-in2',
        start: "center bottom"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})


// email integration


// template_i0o7pe5
// service_zpb2wdh
// user_aTd4q2VCQRGa0eaJo0m5s

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_zpb2wdh',
            'template_i0o7pe5',
            event.target,
            'user_aTd4q2VCQRGa0eaJo0m5s'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly on: manishmanwani73@gmail.com"
            )
        })
}



let isModalOpen = false;
function toggleModal(){
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal__open"
    document.body.classList += " modal--open"
}