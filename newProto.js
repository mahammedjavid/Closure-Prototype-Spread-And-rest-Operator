const User = function(firstname, courseCount){
    this.firstname = firstname
    this.courseCount = courseCount
    this.getCourseCount = function(){
        return console.log(`Course Count is : ${courseCount}`)
    }
}


// new Keyword

var Javid = new User("Mohd",2)
// console.log(Javid)
Javid.getCourseCount()


// Proto

// adding properties to user using Proto

User.prototype.getFirstName = function(){
    console.log(`Your First Name is ${this.firstname}`)
}

Javid.getFirstName()

