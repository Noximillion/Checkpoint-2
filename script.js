class Film{
    constructor(title, id, produttore, direttore, url){
        this.title = title;
        this.id = id;
        this.produttore = produttore;
        this.direttore = direttore;
        this.url = url;
    }
}

function returnResult(arg) {
    return arg["results"]
}

function makeObj(arg) {
    return arg.map((el) => {
        return new Film(el.title, el.episode_id, el.producer, el.director, el.url)
    })
}

function callFirstElement(arg) {
    return fetch(arg[0].url)
    .then((res) => res.json())
}

fetch("https://swapi.dev/api/films")
    .then((res) => res.json())
    .then(returnResult)
    .then(makeObj)
    .then(callFirstElement)
    .then(console.log)
.catch((err) => console.error(err))