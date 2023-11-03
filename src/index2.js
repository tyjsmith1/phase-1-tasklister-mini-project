document.addEventListener('DOMContentLoaded', () => {
    // 1. grab the form and assign variable
    const form = document.getElementById("create-task-form")

    // event listener on the form
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        //pull the task description text and assign variable
        const textDesc = document.getElementById("new-task-description").value

        // new variable with new textNode from description input (goes into list item)
        const newDesc = document.createTextNode(textDesc)
        // create new list item
        let newToDo = document.createElement("li")
        
        // capture value from urgency selector
        const urgencySelect = document.getElementById("urgency").value + "-"

        //combine text from urgency + description
        newToDo.textContent = urgencySelect + textDesc

        //add form text to newly created list element
        const listElement = list.append(newToDo)

        // add an x button
        const btn = document.createElement("button")
        // set id for x button
        btn.setAttribute("id","delete_btn")
        // text for button
        btn.textContent = "X"
        // adds the button to the list item
        newToDo.append(btn)

        // X button deletes entry
        btn.addEventListener("click", () => {
            newToDo.remove()
        })

        // reset the form after submission
        form.reset()


    })
});