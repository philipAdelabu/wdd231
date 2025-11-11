const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#display");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("business-cards");
	display.classList.remove("business-cards-list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("business-cards-list");
	display.classList.remove("business-cards");
}