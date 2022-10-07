var course = [
    {
        name : "SQL",
        price : "10"
    },

    {
        name : "css",
        price : "8"
    },
    {
        name : "HTML",
        price : "7"
    },
    {
        name : "JS",
        price : "6"
    },
    {
        name : "Bootstrap",
        price : "5"
    },
    {
        name : "Angular",
        price : "5"
    },
    {
        name : "Node",
        price : "4"
    },
    {
        name : "React",
        price : "3"
    },

]
console.log(course)

function generateList(){
    const ul = document.querySelector(".listGroup")
    //  when i run the regenerate it shouldnt generate the same obj
    ul.innerHTML=""


    course.forEach((course) =>{

        const li = document.createElement("li")
        li.classList.add("courseList")
        

        // creating text node like course list eg javascript

        const name = document.createTextNode(course.name)

        //now reference is done , time to inject (append)

        li.appendChild(name)

        // now create span element 

        const span = document.createElement("span")
        span.classList.add("float-end")

        const spanName = document.createTextNode("$" + course.price)
        span.appendChild(spanName)

        const line = document.createElement("hr")
        ul.appendChild(line)

        li.appendChild(span)


        ul.appendChild(li)

    } )
    
}

window.addEventListener("load",generateList)

const btn = document.querySelector("#btn")

btn.addEventListener("click", () =>{
    course.sort( (a,b) => a.price - b.price )
    generateList()
})