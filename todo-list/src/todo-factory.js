const proto = {
	edit( title, priority, isComplete, project, description, subtasks,) {
		console.log("edit me");
		this.title = title;
		this.description = description;
		// this.date = date;
		this.priority = priority;
		this.subtasks = subtasks;
		this.project = project;
		this.isComplete = isComplete;
	},
	markComplete() {
		this.isComplete = true;
	},
};

export default function Todo(
	title = "New task",
	date = new Date(),
	priority = 0, // 0 - none, 1 - low, 2 - middle, 3 - high
	isComplete = false,
	project = "Personal",
	description = "",
	subtasks = [],
) {
	let todo = {
		title,
		description,
		date,
		priority,
		subtasks,
		project,
		isComplete,
		id: new Date().getTime(),
	};

	return Object.assign({}, proto, todo);
}
