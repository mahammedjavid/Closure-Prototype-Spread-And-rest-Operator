var myMap = new Map()

myMap.set(1, "Javid")
myMap.set(2, "Mohammd")
myMap.set(3, "Kraazy")
myMap.set(4, "bot")

console.log(myMap)

// for(let key of myMap.keys){
//     console.log(`key is ${key}`)
// }


// for(let value of myMap.values){
//     console.log(`value is ${value}`)
// }

// for(let [key,value] of myMap){
//     console.log(`key is ${key}   value is ${value}`)
// }





// in forEach value will come first in map and also if we use [ ]  it will give first character of value so use ( ) while calling the function  


myMap.forEach( (key,value)=>{
    console.log(`${key} and ${value}`)
})


myMap.delete(2)
console.log(myMap)