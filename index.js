// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]


// add another item to the array
function destructivelyAppendCat () {
  return cats.push('Ralph')

}
destructivelyAppendCat ()
// add element at beginning of array

function destructivelyPrependCat(){

    return cats.unshift("Bob")
}
destructivelyPrependCat()
// remove last element
function destructivelyRemoveLastCat(){

 return cats.pop()   
}
destructivelyRemoveLastCat()
// remove last element 
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
destructivelyRemoveFirstCat()


// new array called cats

function appendCat(){
    let cat = ''
    return  cat = [...cats,'Broom']
    
}
appendCat()


// prepend cats
function  prependCat(){
    let cat = ""
    return  cat = ["Arnold",...cats]
}
prependCat()

//remove the last cat in cats array
function  removeLastCat(){
    let catsWithoutLast =""
    return catsWithoutLast = cats.slice(0, -1)
}
removeLastCat()
console.log(removeLastCat())

//remove cat from first array
function removeFirstCat(){
    let catsWithoutfirst = ""
    return catsWithoutfirst = cats.slice(1)
}