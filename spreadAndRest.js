var findingMax = Math.max(1,2,3,4,5)
console.log(findingMax)




// creating object
var obj = {}
Object.assign(obj,{1:"javd",2:"mohammed"})
console.log(obj)




function sumOfTwo(a,b ,...args){
    let multi = a * b
    let sum = 0
    for( let arg of args){
        sum = sum + arg
    }

    return [multi,sum]

}



console.log(sumOfTwo(2,4,6,8))