const proto = {
	edit( 
			priority = this.priority, 
			project = this.project, 
			description = this.description, 
			title = this.title,
			isComplete = this.isComplete, 
			subtasks = this.subtasks,	) {

		this.title = title;
		this.description = description;
		this.priority = priority;
		this.subtasks = subtasks;
		this.project = project;
		this.isComplete = isComplete;
	},
	markComplete(value) {
		this.isComplete = value;
		this.dateDone = value ? new Date() : null;
	},
};

export default function Todo(
	title = "New task",
	date = new Date(),
	priority = 0, // 0 - none, 1 - low, 2 - middle, 3 - high
	isComplete = false,
	project = "Personal",
	description = "",
	dateDone = isComplete ? new Date() : null,
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
		dateDone,
		id: new Date().getTime(),
	};

	return Object.assign({}, proto, todo);
}
