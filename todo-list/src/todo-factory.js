import state from "./state";
import debouncer from "./debouncer.js";

const proto = {
    edit(
        priority = this.priority,
        description = this.description,
        title = this.title,
        isComplete = this.isComplete,
        subtasks = this.subtasks
    ) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.subtasks = subtasks;
        this.isComplete = isComplete;
        state.saveState();
    },
    markComplete(value) {
        this.isComplete = value;
        this.dateDone = value ? new Date() : null;
    },
    changeProject(newProjectTitle) {
        const old_ = state.projects.find((p) => p.title === this.project);
        const new_ = state.projects.find((p) => p.title === newProjectTitle);

        new_.addTask(this);
        old_.deleteTask(this.id);
        state.saveState();
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
    id = new Date().getTime()
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
        id,
    };
    let placeholder = Object.assign({}, proto, todo);
    placeholder.edit = placeholder.edit.bind(placeholder);
    placeholder.edit = debouncer(placeholder.edit, 500);

    return placeholder;
}

/*
	this is not a factory function
	a factory function supposed expose an interaface
	but this one actually just returns the object itself
 */
