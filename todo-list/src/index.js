
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
setTimeout(() => projects.personal.addTask(Todo("3")), 500);
setTimeout(() => projects.personal.addTask(Todo("This wont be here")), 1000);
setTimeout(() => projects.personal.addTask(Todo("4")), 1500);
setTimeout(() => console.table(projects.personal.tasks), 1500);



setTimeout(() => {
	projects.personal.deleteTask(projects.personal.tasks[4].id)

	console.table(projects.personal.tasks)
}, 2000);

// console.log(Todo())