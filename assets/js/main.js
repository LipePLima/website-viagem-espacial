const btnMobile = document.querySelector('#btnMobile');

btnMobile.addEventListener('click', function toggleMenu () {
    const nav = document.querySelector('nav');
    const li = document.querySelectorAll('.li');
    const a  = document.querySelectorAll('.a');

    li.forEach( el => {
        el.style.transition = 'none'
        el.classList.toggle('active2')
        setTimeout( () => el.style.transition = '1s', 5)
    })

    a.forEach( el => {
        el.style.transition = 'none'
        el.classList.toggle('active3')
        setTimeout( () => el.style.transition = '1s', 5)
    })

    nav.classList.toggle('active')
    this.classList.toggle('active1')
})
