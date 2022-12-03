fetch("../../../data.json").then(response => response.json()).then(data => dataCrew(data))

function dataCrew (data) {
    const listCrew = [
        {
            btn: document.querySelector('#btn1'),
            pic: document.querySelector('#commander'),
            id: 0
        },
        {
            btn: document.querySelector('#btn2'),
            pic: document.querySelector('#specialist'),
            id: 1
        },
        {
            btn: document.querySelector('#btn3'),
            pic: document.querySelector('#pilot'),
            id: 2
        },
        {
            btn: document.querySelector('#btn4'),
            pic: document.querySelector('#engineer'),
            id: 3
        },
    ]

    const title       = document.querySelector('#title');
    const name        = document.querySelector('#name');
    const description = document.querySelector('#description');

    listCrew.forEach( el => el.btn.addEventListener('click', () => {
        const dataCrew = data.crew[el.id];

        for(let i = 0; i < listCrew.length; i++) {
            listCrew[i].pic.classList.add('disable');
            listCrew[i].btn.classList.remove('active')
        }

        el.pic.classList.remove('disable');
        el.btn.classList.add('active')

        title.textContent       = dataCrew.role;
        name.textContent        = dataCrew.name;
        description.textContent = dataCrew.bio;
    }))


}
