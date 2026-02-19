// Constructor Function
function Employee(name, age) {
    this.name = name;
    this.age = age;
}

// Map to store employees
const employeeMap = new Map();

// DOM references
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const addBtn = document.getElementById("addBtn");
const employeeList = document.getElementById("employeeList");

// Add Employee Function
function addEmployee() {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (name === "" || age === "") {
        alert("Please enter both name and age.");
        return;
    }

    if (employeeMap.has(name)) {
        alert("Employee with this name already exists.");
        return;
    }

    const newEmployee = new Employee(name, age);

    employeeMap.set(name, newEmployee);

    renderEmployees();

    nameInput.value = "";
    ageInput.value = "";
}

// Render Employees Function
function renderEmployees() {
    employeeList.innerHTML = "";

    for (const [key, employee] of employeeMap.entries()) {
        const li = document.createElement("li");
        li.textContent = `${employee.name}, ${employee.age} years old`;
        employeeList.appendChild(li);
    }
}

// Button click event
addBtn.addEventListener("click", addEmployee);
