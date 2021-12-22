

export default function Todo(title, description, date, priority, subtasks) {

	let todo = {
		title,
		description,
		date,
		priority,
		subtasks,
		project
	};

	return todo;
}