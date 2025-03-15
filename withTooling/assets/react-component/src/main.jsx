import { createRoot } from "react-dom/client";
import React, { useState } from "react";

const wrapperStyle = {
	display: "flex",
	alignItems: "center",
	gap: "10px",
};

const buttonStyle = {
	background: "#58c4dc",
	border: "none",
	borderRadius: "4px",
	color: "white",
	padding: "10px 20px",
	fontSize: "16px",
	cursor: "pointer",
};

const inputStyle = {
	background: "#f0f0f0",
	border: "1px solid #ccc",
	borderRadius: "4px",
	padding: "8px",
	fontSize: "16px",
	width: "100px",
	textAlign: "right",
	flexGrow: 1,
};

function ReactComponent() {
	const [count, setCount] = useState(0);
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	return (
		<div style={wrapperStyle}>
			<button type="button" style={buttonStyle} onClick={decrement}>
				-1
			</button>
			<input style={inputStyle} type="text" value={count} readOnly />
			<button type="button" style={buttonStyle} onClick={increment}>
				+1
			</button>
		</div>
	);
}

class ReactComponentWrapper extends HTMLElement {
	constructor() {
		super();
		this.root = null;
	}

	connectedCallback() {
		const shadow = this.attachShadow({ mode: "open" });
		this.root = createRoot(shadow);
		this.root.render(<ReactComponent />);
	}

	disconnectedCallback() {
		this.root?.unmount();
	}
}

customElements.define("react-component", ReactComponentWrapper);
