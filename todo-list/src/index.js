
import state from "./state.js";
import Todo from "./todo-factory.js";
import Sidebar from "./components/Sidebar.js";
import AllProjects from "./components/AllProjects.js";
import AllTasks from "./components/AllTasks.js";

import "./style.css";

document.body.innerHTML = "<div id='root'></div>"

const root = document.querySelector('#root');

const sidebar = Sidebar((tab) => {
	if(state.activeTab !== tab) {
		state.setTab(tab)
		render();
	}
});

const tabs = [
	AllProjects(state.projects), 
	AllTasks(state.projects, render),
	// document.createElement('span'),
];


root.appendChild(sidebar)

function render() {

	root.childNodes.forEach(node => {
		if(node.id !== "sidebar") node.remove();
	})

	root.appendChild(tabs[state.activeTab])
	
	tabs[state.activeTab].render()
	state.saveState()
}

render()