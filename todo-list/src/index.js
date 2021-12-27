
import state from "./state.js";
import Todo from "./todo-factory.js";
import Sidebar from "./components/Sidebar.js";
import ProjectsComponent from "./components/Projects.js";
import AllTasks from "./components/AllTasks.js";

import "./style.css";

document.body.innerHTML = "<div id='root'></div>"

const root = document.querySelector('#root');


state.projects[0].addTask(Todo("Change the name", new Date('01, 02, 2061')))
state.projects[0].addTask(Todo("Third task", new Date('01, 02, 2031'), 1, false, ""))
state.projects[0].addTask(Todo("First task", new Date('01, 02, 2051'), 3, true, ""))
state.projects[0].addTask(Todo("Fifth task", new Date('01, 02, 2111'), 3, false, ""))
state.projects[0].addTask(Todo("Forth task", new Date('01, 02, 2021'), 2, true, ""))
state.projects[0].addTask(Todo("Second task", new Date('01, 02, 2041'), 3, false, ""))

// state.projects[1].addTask(Todo("Change the name", new Date('01, 02, 2061')))
// state.projects[1].addTask(Todo("Third task", new Date('01, 02, 2031'), 1, false, ""))
// state.projects[1].addTask(Todo("First task", new Date('01, 02, 2051'), 3, true, ""))
// state.projects[1].addTask(Todo("Fifth task", new Date('01, 02, 2111'), 3, false, ""))
// state.projects[1].addTask(Todo("Forth task", new Date('01, 02, 2021'), 2, true, ""))
// state.projects[1].addTask(Todo("Second task", new Date('01, 02, 2041'), 3, false, ""))

// state.projects[2].addTask(Todo("Change the name", new Date('01, 02, 2061')))
// state.projects[2].addTask(Todo("Third task", new Date('01, 02, 2031'), 1, false, ""))
// state.projects[2].addTask(Todo("First task", new Date('01, 02, 2051'), 3, true, ""))
// state.projects[2].addTask(Todo("Fifth task", new Date('01, 02, 2111'), 3, false, ""))
// state.projects[2].addTask(Todo("Forth task", new Date('01, 02, 2021'), 2, true, ""))
// state.projects[2].addTask(Todo("Second task", new Date('01, 02, 2041'), 3, false, ""))

// state.projects[3].addTask(Todo("Change the name", new Date('01, 02, 2061')))
// state.projects[3].addTask(Todo("Third task", new Date('01, 02, 2031'), 1, false, ""))
// state.projects[3].addTask(Todo("First task", new Date('01, 02, 2051'), 3, true, ""))
// state.projects[3].addTask(Todo("Fifth task", new Date('01, 02, 2111'), 3, false, ""))
// state.projects[3].addTask(Todo("Forth task", new Date('01, 02, 2021'), 2, true, ""))
// state.projects[3].addTask(Todo("Second task", new Date('01, 02, 2041'), 3, false, ""))




const sidebar = Sidebar((tab) => {
	if(state.activeTab !== tab) {
		state.setTab(tab)
		render();
	}
});


const tabs = [
	ProjectsComponent(state.projects), 
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

}

render()