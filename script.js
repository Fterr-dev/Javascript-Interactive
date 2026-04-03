// PART 1: JavaScript Basics

let studentName = "IGIRUBUNTU Fraternite";
let courseName = "Frontend";
let year = 2026;

console.log(`Welcome ${studentName} to the ${courseName} course.`);


// PART 2: DOM Manipulation

let heading = document.getElementById("heading");
let changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function(){
heading.innerHTML = "JavaScript is controlling this page!";
});


// PART 3: Event Handling

let clickBtn = document.getElementById("clickBtn");
let message = document.getElementById("message");

clickBtn.addEventListener("click", function(){
message.innerHTML = "You clicked the button!";
});


// PART 4: Simple Calculator

document.getElementById("calcBtn").addEventListener("click", function(){

let num1 = Number(document.getElementById("number1").value);
let num2 = Number(document.getElementById("number2").value);
let sign = document.getElementById("sign").value;

let result;

switch(sign){

case "+":
result = num1 + num2;
break;

case "-":
result = num1 - num2;
break;

case "*":
result = num1 * num2;
break;

case "/":
result = num1 / num2;
break;

default:
result = "Invalid operator";
}

document.getElementById("Answer").innerHTML = "Result: " + result;

});


// PART 5: To-Do List

let addTask = document.getElementById("addTask");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addTask.addEventListener("click", function(){

let taskText = taskInput.value;

if(taskText === "") return;

let li = document.createElement("li");
li.textContent = taskText;


li.addEventListener("click", function(){
li.classList.toggle("completed");
});


// remove task
let removeBtn = document.createElement("button");
removeBtn.textContent = "Remove";

removeBtn.onclick = function(){
taskList.removeChild(li);
};

li.appendChild(removeBtn);

taskList.appendChild(li);

taskInput.value = "";

});