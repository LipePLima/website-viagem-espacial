const btnMobile = document.querySelector('#btnMobile');

btnMobile.addEventListener('click', function toggleMenu () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active')

    this.classList.toggle('active')
})
