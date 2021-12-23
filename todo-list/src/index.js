
import Todo from "./todo-factory.js";
import Project from "./project-factory.js";
import Sidebar from "./components/Sidebar.js";
import ProjectsComponent from "./components/Projects.js";

import "./style.css";

document.body.innerHTML = "<div id='root'></div>"

const root = document.querySelector('#root');


const projects = {
	personal: Project("Personal"),
	perso1nal: Project("Personal"),
	person2al: Project("Personal"),
	personal4: Project("Personal"),
	persona3l: Project("Personal"),
};

projects.personal.addTask(Todo("First task", undefined, 3, true, ""))
projects.personal.addTask(Todo("Second task", undefined, 0, false, ""))
projects.personal.addTask(Todo("Third task", undefined, 1, false, ""))
projects.personal.addTask(Todo("Forth task", undefined, 2, true, ""))
projects.personal.addTask(Todo("Fifth task", undefined, 0, false, ""))

// console.log(projects)
// console.table(projects.personal.tasks)
projects.personal.addTask(Todo("1"))
// setTimeout(() => projects.personal.addTask(Todo("2")), 0);
// setTimeout(() => projects.personal.addTask(Todo("3")), 500);
// setTimeout(() => projects.personal.addTask(Todo("This wont be here")), 1000);
// setTimeout(() => projects.personal.addTask(Todo("4")), 1500);
// setTimeout(() => console.table(projects.personal.tasks), 1500);
// setTimeout(() => console.log(projects.personal.tasks[3]), 1500);
// setTimeout(() => (projects.personal.tasks[3].edit("Title update", 3)), 2000);
// setTimeout(() => console.log(projects.personal.tasks[3]), 3000);


const sidebar = Sidebar(),
	  projectsComponent = ProjectsComponent(projects);

root.appendChild(sidebar)
root.appendChild(projectsComponent)