// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]


// add another item to the array
function destructivelyAppendCat () {
  return cats.push('Ralph')

}
// add element at beginning of array

function destructivelyPrependCat(){

    return cats.unshift("Bob")
}
// remove last element
function destructivelyRemoveLastCat(){

 return cats.pop()   
}
// remove last element 
function destructivelyRemoveFirstCat(){
    return cats.shift()
}

const beforeEach =(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });



// new array called cats
function appendCat(){
    beforeEach();
    let cat = ""
    return  cat = [...cats,'Broom']
    
}
appendCat()
console.log(appendCat())

