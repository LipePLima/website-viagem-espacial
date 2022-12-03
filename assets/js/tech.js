fetch("../../../data.json").then(response => response.json()).then(data => dataTech(data))

function dataTech (data) {
    const listDestiny = [
        {
            btn: document.querySelector('#btn0'),
            directory: 'assets/css/technology/vehicle.css',
            id: 0
        }, 
        {
            btn: document.querySelector('#btn'),
            directory: 'assets/css/technology/spaceport.css',
            id: 1
        },
        {
            btn: document.querySelector('#btn1'),
            directory: 'assets/css/technology/capsule.css',
            id: 2
        },
    ];

    listDestiny[0].btn.classList.add('active');

    const name = document.querySelector('#name');
    const text = document.querySelector('#text');

    console.log(listDestiny[2].btn)

    listDestiny.forEach(element => element.btn.addEventListener('click', () => {
        const link           = document.querySelector('#tech')
        const datatechnology = data.technology[element.id]
        
        for(let i = 0; i < listDestiny.length; i++) {
            listDestiny[i].btn.classList.remove('active')
        }

        element.btn.classList.add('active');

        link.href = element.directory

        name.textContent   = datatechnology.name;
        text.textContent   = datatechnology.description;       
    }))
}
