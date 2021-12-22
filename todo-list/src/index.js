
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
setTimeout(() => projects.personal.addTask(Todo("2")), 0);
setTimeout(() => projects.personal.addTask(Todo("3")), 0);
setTimeout(() => projects.personal.addTask(Todo("4")), 0);

console.log(projects)
// console.log(Todo())