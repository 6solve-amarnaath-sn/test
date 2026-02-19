const toggleList = document.getElementById("toggleList");
const listDiv = document.getElementById("list");
const descriptionInput = document.getElementById("descriptionInput");
const descriptionP = document.getElementById("description");
const descriptionButton = document.getElementById("descriptionButton");
const listUl = document.querySelector("ul");
const addItemInput = document.getElementById("addItemInput");
const addItemButton = document.getElementById("addItemButton");

// Function to attach buttons to li
const attachListItemButtons = (li) => {
    const up = document.createElement("button");
    up.textContent = "Up";
    up.className = "up";
    li.appendChild(up);

    const down = document.createElement("button");
    down.textContent = "Down";
    down.className = "down";
    li.appendChild(down);

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.className = "remove";
    li.appendChild(remove);
};

// Attach buttons to existing list items
document.querySelectorAll("li").forEach(li => {
    attachListItemButtons(li);
});

// Event delegation for list buttons
listUl.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {

        const li = e.target.parentNode;

        if (e.target.className === "remove") {
            li.remove();
        }

        if (e.target.className === "up") {
            const prevLi = li.previousElementSibling;
            if (prevLi) {
                listUl.insertBefore(li, prevLi);
            }
        }

        if (e.target.className === "down") {
            const nextLi = li.nextElementSibling;
            if (nextLi) {
                listUl.insertBefore(nextLi, li);
            }
        }
    }
});

// Toggle list visibility
toggleList.addEventListener("click", () => {
    if (listDiv.style.display === "none") {
        listDiv.style.display = "block";
        toggleList.textContent = "Hide list";
    } else {
        listDiv.style.display = "none";
        toggleList.textContent = "Show list";
    }
});

// Change description
descriptionButton.addEventListener("click", () => {
    descriptionP.textContent = descriptionInput.value;
    descriptionInput.value = "";
});

// Add new item
addItemButton.addEventListener("click", () => {
    const value = addItemInput.value.trim();

    if (value !== "") {
        const li = document.createElement("li");
        li.textContent = value;

        attachListItemButtons(li);
        listUl.appendChild(li);

        addItemInput.value = "";
    }
});
