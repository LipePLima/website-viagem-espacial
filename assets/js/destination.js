const json = fetch("../../../data.json").then(response => {return response.json()})

console.log(json)
