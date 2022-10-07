var User = {
    name:"javid",
    Age :22,
    getUserName : function(){
        console.log(`User name is ${this.name}`)
    }
}

var Javid = Object.create(User)

console.log(Javid)
// Javid.name = "mohd"
Javid.getUserName()

