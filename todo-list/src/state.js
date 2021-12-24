
import Todo from "./todo-factory.js";
import Project from "./project-factory.js";
import ProjectsComponent from "./components/Projects.js";
// import ProjectComponent from "./components/Project.js";

const state = {
	activeTab: 0,
	setTab(tab) {
		console.log(this.activeTab, tab)
		this.activeTab = tab;
	},

	tabs: [],

	projects: {
		personal: Project("Personal"),
		perso1nal: Project("Personal"),
		person2al: Project("Personal"),
		personal4: Project("Personal"),
		persona3l: Project("Personal"),
	}
}
state.setTab = state.setTab.bind(state);

export default state;