
import Todo from "./todo-factory.js";
import Project from "./project-factory.js";

const state = {
	activeTab: 0,
	setTab(tab) {
		this.activeTab = tab;
	},
	
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