let cats= ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Ralph")
}
function  destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function prependCat(name){
    const neewcat = [name, ...cats];
    return neewcat;
}

function  removeLastCat(){
    const newcat = cats.slice(0,cats.length -1);
    return newcat;

}

function removeFirstCat(){
    const newcat = cats.slice(1);
    return newcat;
}
function appendCat(name) {

    const newcat = cats.concat (name);

    return newcat;

}