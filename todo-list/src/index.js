
import state from "./state.js";
import Todo from "./todo-factory.js";
import Project from "./project-factory.js";
import Sidebar from "./components/Sidebar.js";
import ProjectsComponent from "./components/Projects.js";
import ProjectComponent from "./components/Project.js";

import "./style.css";

document.body.innerHTML = "<div id='root'></div>"

const root = document.querySelector('#root');


state.projects.personal.addTask(Todo("Change the name", new Date('01, 02, 2061')))
state.projects.personal.addTask(Todo("Third task", new Date('01, 02, 2031'), 1, false, ""))
state.projects.personal.addTask(Todo("First task", new Date('01, 02, 2051'), 3, true, ""))
state.projects.personal.addTask(Todo("Fifth task", new Date('01, 02, 2111'), 0, false, ""))
state.projects.personal.addTask(Todo("Forth task", new Date('01, 02, 2021'), 2, true, ""))
state.projects.personal.addTask(Todo("Second task", new Date('01, 02, 2041'), 0, false, ""))






const sidebar = Sidebar((tab) => {
	if(state.activeTab !== tab) {
		state.setTab(tab)
		render();
	}
});


const tabs = [ProjectsComponent(state.projects), document.createElement('span'), document.createElement('span')];


root.appendChild(sidebar)

function render() {

	root.childNodes.forEach(node => {
		if(node.id !== "sidebar") node.remove();
	})

	root.appendChild(tabs[state.activeTab])

}

render()