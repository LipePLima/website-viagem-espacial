const json = fetch("../../../data.json").then(response => response.json()).then(data => dataJson(data))

function dataJson (data) {
    const list = [
        {
            btn: document.querySelector('#moon'),
            directory: 'assets/css/destination/moon.css',
            id: 0
        }, 
        {
            btn: document.querySelector('#mars'),
            directory: 'assets/css/destination/mars.css',
            id: 1
        },
        {
            btn: document.querySelector('#europa'),
            directory: 'assets/css/destination/europa.css',
            id: 2
        },
        {
            btn: document.querySelector('#titan'),
            directory: 'assets/css/destination/titan.css',
            id: 3
        }
    ];

    list[0].btn.classList.add('active');

    const title    = document.querySelector('#name');
    const text     = document.querySelector('#text');
    const distance = document.querySelector('#distance');
    const time     = document.querySelector('#time');

    list.forEach(element => element.btn.addEventListener('click', () => {
        const link            = document.querySelector('#destination')
        const dataDestination = data.destinations[element.id]
        
        for(let i = 0; i < list.length; i++) {
            list[i].btn.classList.remove('active')
        }

        element.btn.classList.add('active');

        link.href = element.directory

        title.textContent    = dataDestination.name;
        text.textContent     = dataDestination.description;
        distance.textContent = dataDestination.distance;
        time.textContent     = dataDestination.travel;
    }))
}
