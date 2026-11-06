let form = document.querySelector("form")
let nameInput = document.getElementById("name")
let employeeID = document.getElementById("employeeID")
let department = document.getElementById("department")
let exp = document.getElementById("exp")
let email = document.getElementById("email")
let mbl = document.getElementById("mbl")
let dataAppend = document.getElementById("dataAppend")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let records = readRecords()
    records.push({
        name: nameInput.value,
        employeeID: employeeID.value,
        department: department.value,
        exp: exp.value,
        email: email.value,
        mbl: mbl.value,
        role: getRole(exp.value),
    })
    localStorage.setItem("data", JSON.stringify(records))
    form.reset()
    showRecords()
})

function getRole(years) {
    let experience = Number(years)
    if (experience > 5) {
        return "Senior"
    }
    if (experience >= 2 && experience <= 5) {
        return "Junior"
    }
    if (experience <= 1) {
        return "Fresher"
    }
    return ""
}

function readRecords() {
    let saved = JSON.parse(localStorage.getItem("data"))
    if (!Array.isArray(saved)) {
        return []
    }
    return saved
}

function showRecords() {
    let records = readRecords()
    dataAppend.innerHTML = ""
    records.forEach((record, index) => {
        let row = document.createElement("tr")
        let values = [
            record.name,
            record.employeeID,
            record.department,
            record.exp,
            record.email,
            record.mbl,
            record.role,
        ]
        values.forEach((value) => {
            let cell = document.createElement("td")
            cell.textContent = value
            row.appendChild(cell)
        })
        let action = document.createElement("td")
        let remove = document.createElement("button")
        remove.type = "button"
        remove.textContent = "Delete"
        remove.addEventListener("click", () => {
            let current = readRecords()
            current.splice(index, 1)
            localStorage.setItem("data", JSON.stringify(current))
            showRecords()
        })
        action.appendChild(remove)
        row.appendChild(action)
        dataAppend.appendChild(row)
    })
}

showRecords()
