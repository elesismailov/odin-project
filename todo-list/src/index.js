
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