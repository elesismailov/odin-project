

export default function Sidebar(setTab) {

	const wrapper = document.createElement("div");
	const nav = document.createElement("nav");

	wrapper.id = "sidebar";

	nav.appendChild(SidebarIcon(0, "P", 'Projects'))
	nav.appendChild(SidebarIcon(1, "T", 'Tasks'))
	// nav.appendChild(SidebarIcon(2, "#", 'Tags'))
	
	wrapper.appendChild(nav)

	nav.addEventListener('click', function(event) {
		if (event.target.nodeName === "BUTTON") {
			setTab(+event.target.dataset.tab)
		}
	})

	return (wrapper);
}

function SidebarIcon(n, i, ii) {
	const icon = document.createElement("button")
	icon.className = "sidebar-icon";

	icon.innerHTML = i;
	icon.dataset.tab = n;
	icon.appendChild(IconTooltip("💡 " + ii))

	return (icon);
}


function IconTooltip(i) {
	const span = document.createElement('span');

	span.className = "tooltip";
	span.innerHTML = i;

	return span
}