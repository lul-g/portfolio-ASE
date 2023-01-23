let mode_toggler = document.querySelector('.light-toggle')
window.addEventListener("resize", () => {
    if(window.matchMedia("(max-width: 768px)").matches) {
        mode_toggler.classList.add('collapse')
    }
    else {
        mode_toggler.classList.remove('collapse')
    }
});

let navbar_items = document.querySelectorAll('.nav-link')
navbar_items.forEach(link => {
    link.addEventListener('click', ()=> {
        console.log('hi')
        navbar_items.forEach(item => {
            item.classList.remove('active')
        })
        link.classList.add('active')
    })
});