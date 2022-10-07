function init(){
    var firstname = "Javid"
    console.log("init")

    function sayHello(){
        console.log(`hi ${firstname}`)
    }
    return sayHello;
}

var a =init()
a()

//Example 

function doAddition(x){
    return function(y){
        return x+y
    }
}


var add = doAddition(5)
console.log(add(5))

//Another
console.log(doAddition(10)(10))




//Example

function TrippleAddition(x){
    return function(y){
        return function(z){
            return x+y+z
        }
    }
}

 
console.log(TrippleAddition(5)(10)(15)) 