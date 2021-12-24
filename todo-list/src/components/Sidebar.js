

export default function Sidebar() {

	const wrapper = document.createElement("div");
	const nav = document.createElement("nav");

	wrapper.id = "sidebar";

	nav.appendChild(SidebarIcon("P"))
	nav.appendChild(SidebarIcon("T"))
	nav.appendChild(SidebarIcon("#"))

	wrapper.appendChild(nav)
	return (wrapper);
}

function SidebarIcon(i) {
	const icon = document.createElement("button")
	icon.className = "sidebar-icon";

	icon.innerHTML = i;

	icon.appendChild(IconTooltip("💡 " + i))

	return (icon);
}


function IconTooltip(i) {
	const span = document.createElement('span');

	span.className = "tooltip";
	span.innerHTML = i;

	return span
}