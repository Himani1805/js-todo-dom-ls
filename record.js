let form = document.querySelector("form")
let name = document.getElementById("name")
let employeeID = document.getElementById("employeeID")
let department = document.getElementById("department")
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mbl = document.getElementById("mbl")
let dataAppend = document.getElementById("dataAppend")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    createTodo()
    showTodo()
})
function createTodo(){
    let role = ""
    if (exp.value > 5 ){
        role = "Senior"
    }
    else if (exp.value > 2 && exp.value > 5){
        role = "Junior"
    }
    else if (exp.value < 1 || exp.value === 1){
        role = "Fresher"
    }
    let obj = {
        name: name.value,
        employeeID : employeeID.value,
        department: department.value,
        exp: exp.value,
        email: email.value,
        mbl:mbl.value,
        role:role,
    }
    localStorage.setItem("data", JSON.stringify(obj))
}
function showTodo(){
    let getTodo = JSON.parse(localStorage.getItem("data"))
    console.log(getTodo)
}

