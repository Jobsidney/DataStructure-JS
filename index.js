//mAKING AN ARRAY
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
//OR-adds at the end
const newAddedArray2=[...superheroes,"Kisumu"];
console.log(newAddedArray2);


//REMOVING ITEMS FROM ARRAY
const food=["Avocado","Pizza","Chicken","Sushi"]

//removing last item on array
function removeLast(){
    food.pop()
    console.log(food);
}

//removing FIrst Item
function removeFirst(){
    food.shift();
    console.log(food);
}




//calling the functions
addItem("SuperMan");
addingItemBegin("SpiderMan");
removeLast();
removeFirst();
