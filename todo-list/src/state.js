
import Todo from "./todo-factory.js";
import Project from "./project-factory.js";
import ProjectsComponent from "./components/Projects.js";
// import ProjectComponent from "./components/Project.js";

const state = {
	activeTab: 1,
	setTab(tab) {
		this.activeTab = tab;
	},

	// tabs: [ProjectsComponent(this.projects), document.createElement('span')],

	projects: [
		Project("First Project"),
		Project("Second"),
		Project("Third"),
		Project("Forth"),
	],
}
state.setTab = state.setTab.bind(state);

export default state;