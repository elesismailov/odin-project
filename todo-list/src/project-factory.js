

const proto = {
	addTask(task) {
		console.log("added")
		console.log(this.tasks)
		console.log(this.title)
	},
	deleteTask(id) {
		console.log("deleted")
	}
}
export default function Project(title="New Project", tasks=[]) {

	return Object.assign({}, proto, {title, tasks});

}

// function addTask(task) {}