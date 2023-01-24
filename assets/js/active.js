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
