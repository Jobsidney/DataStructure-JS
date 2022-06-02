const superheroes = ["Catwoman", "Storm", "Jessica Jones"];

//adding item at end of Array
function addItem(name){
    superheroes.push(name);
    console.log(superheroes);
}

//Adding item at beggining of Array
function addingItemBegin(name){
    superheroes.unshift(name);
    console.log(superheroes);
}
//Creating copy of an ARRAY
const newArray=[...superheroes];
console.log(newArray);
//we can copy that array and also add something to it at that time
const newAddedArray=["newYork","Nairobi",...superheroes]
console.log(newAddedArray);


//calling the functions
addItem("SuperMan");
addingItemBegin("SpiderMan");
