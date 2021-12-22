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
