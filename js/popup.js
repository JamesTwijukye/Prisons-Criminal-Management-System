const popup = document.getElementById("popup");
const closebtn = document.getElementById("closebtn");

// Change this line to select elements by class name
const editButtons = document.querySelectorAll(".edit-button");

closebtn.addEventListener("click", () => {
    console.log("clicked");
    popup.style.display = "none";
});

// Loop through all edit buttons and add click event listeners
editButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("clicked");
        popup.style.display = "flex";
    });
});
