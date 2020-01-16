// Find the tag with the Id groceries
const groceriesArticle = document.querySelector("#groceries");
// classList grabs the class you define within the parantheses
groceriesArticle.classList.add("red-text");
const groceries_header = document.querySelector(".groceries_header");
groceries_header.classList.remove("groceries_header");

// Selects all li elements within the id grocery list
const groceryList = document.querySelectorAll("#grocery-list li")

/* Loop over each list item and add the groceries_head
class to it, making it bigger
The counter will only continue as long as the grocery list is

You normally dont want to put a semicolon after a for loop */
for(let i=0; i < groceryList.length; i++) {
    if (i === 1) {
        groceryList[i].classList.add("groceries_header");
    }
}

