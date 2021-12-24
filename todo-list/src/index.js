
import state from "./state.js";
import Todo from "./todo-factory.js";
import Project from "./project-factory.js";
import Sidebar from "./components/Sidebar.js";
import ProjectsComponent from "./components/Projects.js";
import ProjectComponent from "./components/Project.js";

import "./style.css";

document.body.innerHTML = "<div id='root'></div>"

const root = document.querySelector('#root');


state.projects.personal.addTask(Todo("First task", undefined, 3, true, ""))
state.projects.personal.addTask(Todo("Second task", undefined, 0, false, ""))
state.projects.personal.addTask(Todo("Third task", undefined, 1, false, ""))
state.projects.personal.addTask(Todo("Forth task", undefined, 2, true, ""))
state.projects.personal.addTask(Todo("Fifth task", undefined, 0, false, ""))
state.projects.personal.addTask(Todo("1"))

// setTimeout(() => projects.personal.addTask(Todo("2")), 0);
// setTimeout(() => projects.personal.addTask(Todo("3")), 500);
// setTimeout(() => projects.personal.addTask(Todo("This wont be here")), 1000);
// setTimeout(() => projects.personal.addTask(Todo("4")), 1500);
// setTimeout(() => console.table(projects.personal.tasks), 1500);
// setTimeout(() => console.log(projects.personal.tasks[3]), 1500);
// setTimeout(() => (projects.personal.tasks[3].edit("Title update", 3)), 2000);
// setTimeout(() => console.log(projects.personal.tasks[3]), 3000);


const sidebar = Sidebar((tab) => {
	if(state.activeTab !== tab) {
		state.setTab(tab)
		render();
	}
});


// const tabs = [ProjectsComponent(state.projects), document.createElement('span'),document.createElement('span')];
const tabs = [ProjectComponent(state.projects), document.createElement('span'),document.createElement('span')];
root.appendChild(sidebar)
// root.appendChild(projectsComponent)

function render() {

	root.childNodes.forEach(node => {
		if(node.id !== "sidebar") node.remove();
	})

	root.appendChild(tabs[state.activeTab])

}

render()