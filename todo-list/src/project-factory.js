

const proto = {
	addTask(task) {
		task.project = this.title;
		this.tasks.push(task);
	},
	deleteTask(id) {
		const index = this.tasks.indexOf(this.tasks.find(task => task.id === id));
		this.tasks.splice(index, 1)
	},
}
export default function Project(title="New Project", tasks=[]) {

	return Object.assign({}, proto, {title, tasks});

}
