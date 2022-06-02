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


//USING SLICE()
const family = ["Ann","Stephany","Jovan","Dad","Mum"];
const familyCopy=[...family];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function slicingItems(num1,num2){
    console.log(family.slice(num1,num2));
}

//SPLICE() methodon ARRAYS

const months =["January","February","March","April","May","June","July","August"]

//remove first two items
function splicing(){
    months.splice(2);
    console.log(months);
}


//remove last two elements
console.log(months.splice(-3));
splicing();

//calling the functions
// addItem("SuperMan");
// addingItemBegin("SpiderMan");
// removeLast();
// removeFirst();
// slicingItems(1);
// console.log(days.slice(0,-1));


