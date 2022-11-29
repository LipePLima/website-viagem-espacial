const btnMobile = document.querySelector('#btnMobile');

btnMobile.addEventListener('click', function toggleMenu () {
    const nav = document.querySelector('nav');
    const li = document.querySelectorAll('.li');
    const a  = document.querySelectorAll('.a');

    li.forEach( el => {
        el.classList.toggle('active2')
    })

    a.forEach( el => {
        el.classList.toggle('active3')
    })

    nav.classList.toggle('active')
    this.classList.toggle('active1')
})
