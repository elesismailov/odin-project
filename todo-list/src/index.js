
import Todo from "./todo-factory.js";
import Project from "./project-factory.js";

document.body.style.background = "rgb(163, 0, 255)";
document.body.innerHTML = "<div id='root'></div>"


const projects = {
	personal: Project("Personal", [
		Todo("Initial task", 0, 0,true),
	]),
};


// console.log(Project())

console.log(projects)
projects.personal.addTask(Todo("1"))
projects.personal.addTask(Todo("2"))
projects.personal.addTask(Todo("3"))
projects.personal.addTask(Todo("4"))
// console.table(projects)

console.log(projects)
// console.log(Todo())