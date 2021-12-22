

const proto = {
	addTask(task) {
		task.project = this.title;
		this.tasks.push(task);
	},
	deleteTask(id) {
		console.log("deleted")
	}
}
export default function Project(title="New Project", tasks=[]) {

	return Object.assign({}, proto, {title, tasks});

}

// function addTask(task) {}