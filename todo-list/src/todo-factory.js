const proto = {
	edit() {
		console.log("edit me");
	},
	markComplete() {
		this.isComplete = true;
	},
};

export default function Todo(
	title = "New task",
	date = new Date(),
	priority = 0,
	isComplete = false,
	description = "",
	subtasks = [],
	project = "Personal",
) {
	let todo = {
		title,
		description,
		date,
		priority,
		subtasks,
		project,
		isComplete,
	};

	return Object.assign({}, proto, todo);
}
