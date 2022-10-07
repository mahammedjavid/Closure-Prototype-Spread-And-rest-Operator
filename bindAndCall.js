var User = {
    name : "Javid",
    Age : 22,
    Place : "Kaup",
    getInfo : function(){
        console.log(`
        Name of the User : ${this.name}
        Age of the user : ${this.Age}
        Place of the user : ${this.Place}
        `)
    }
}

console.log(User)


var NewUser = {
    name : "Mohammed",
    Age : 23,
    Place : "Mangalore"
}

// User.getInfo.bind(NewUser)()
User.getInfo.call(NewUser)
