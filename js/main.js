//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for(let i = 0; i < dog_names.length; i++){ 
        if(dog_string.includes(dog_names[i])){
            console.log("Matched: " + dog_names[i])
        }
    }
}
console.log(findWords(dog_string, dog_names))


//Call method here with parameters



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let names = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(names){
    for(let i = 0; i < names.length; i++){
        if(i % 2 == 0){ 
            names.splice(i,1,'even index')  
        }
    }
    console.log(names)
}
console.log(replaceEvens(names))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


/* codewars problems
#1 Write a function which converts the input string to uppercase. */

function makeUpperCase(str) {
    return str.toUpperCase();
    }

//#2 Miles per gallon to kilometers per liter

function converter (mpg) {
    return Number((1.609344 / 4.54609188 * mpg).toFixed(2));
    //code to convert miles per imperial gallon to kilometers per liter
  }