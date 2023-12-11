// Get references to HTML elements
const inputBox = document.getElementById("inputbox");
const list = document.getElementById("list");

// Function to add a new list item
function addItem() {
    const itemText = inputBox.value.trim();
    if (itemText) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <div class="checkbox" onclick="toggleCheck(this)"><i class="fas fa-square"></i></div>
        <span>${itemText}</span>
        <i class="fas fa-trash-alt delete" onclick="deleteItem(this)"></i>
        `;
        list.appendChild(listItem);
        inputBox.value = "";
    }
}

// Function to toggle the checkbox and add a tick icon
function toggleCheck(checkbox) {
    checkbox.classList.toggle("checked");
    const icon = checkbox.querySelector("i");
    icon.classList.toggle("fa-square");
    icon.classList.toggle("fa-check-square");
}

// Function to delete a list item
function deleteItem(dustbin) {
    const listItem = dustbin.parentElement;
    list.removeChild(listItem);
}

// Add event listener for adding items
inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addItem();
    }
});
