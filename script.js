// LOCAL STORAGE CHECK //

let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

console.log(itemsArray)

// DISPLAY ITEMS FUNC //

function displayItems(){
    let items = "";
    for (let i = 0; i <itemsArray.length; i++){
        items += `<div class="item">
            <div class="input-controller">
                <textarea disabled>${itemsArray[i]}</textarea>
                <div class="edit-controller">
                    <i class="fa-solid fa-check completeBtn"></i>
                    <i class="fa-regular fa-pen-to-square editBtn"></i>
                </div>
            </div>
            <div class="update-controller">
                <button class="saveBtn">Save</button>
                <button class="cancelBtn">Cancel</button>
            </div>
        </div>` 
    }
    document.querySelector(".to-do-list").innerHTML = items;
    completeTask()
    editTask()
    saveTask()
    cancelTask()
}

// Complete BUTTON FUNCTIONALITY //

function completeTask() {
    let completeBtn = document.querySelectorAll(".completeBtn")
    completeBtn.forEach((db,i) =>
    db.addEventListener("click", ()  => {
        deleteItem(i)
    }))
}



// CREATE ITEM FUNC //

function createItem() {
    itemsArray.push(item.value)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}



// UPDATE ITEM FUNC // 

function updateItem (text, i) {
    itemsArray[i] = text
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}



// DATE DISPLAY FUNC //

function dateDisplay(){
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector("#current-date").innerHTML = date[1] + " " + date[2] + " " + date[3]
}

// ENTER BUTTON //
document.querySelector("#enter").addEventListener("click", () => {
    let item = document.querySelector("#item")
    createItem(item)
})
// DELETE ITEM FUNC //

function deleteItem(i) {
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

// EDIT BUTTON FUNCTIONALITY //

function editTask (){
    let editBtn =  document.querySelectorAll(".editBtn")
    let updateController = document.querySelectorAll(".update-controller")
    let inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eb,i) => {
        eb.addEventListener("click", () => {
            updateController[i].style.display = "block"
            inputs[i].disabled = false
        })
    })
}

// SAVE BUTTON FUNCTIONALITY //

function saveTask() {
    let saveBtn = document.querySelectorAll(".saveBtn")
    let inputs = document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            updateItem(inputs[i].value, i)
        })
    })
}

// CANCEL BUTTON FUNCTIONALITY //

function cancelTask() {
    let cancelBtn = document.querySelectorAll(".cancelBtn")
    let updateController =  document.querySelectorAll(".update-controller")
    let inputs = document.querySelectorAll(".input-controller textarea")

    cancelBtn.forEach((cb, i)  =>{
        cb.addEventListener("click", () => {
            updateController[i].style.display = "none"
            inputs[i].disabled = true
        })
    }
    )
}



// ON LOAD //

window.onload = function() {
    dateDisplay()
    displayItems()
}
