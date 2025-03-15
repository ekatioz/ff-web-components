import { LitElement, css, html } from "lit";

export class LitComponent extends LitElement {
	static get styles() {
		return css`
            .wrapper {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .button {
                background: #4c64ff;
                border: none;
                border-Radius: 4px;
                color: white;
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
            }

            .input {
                background: #f0f0f0;
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 8px;
                font-size: 16px;
                width: 100px;
                text-align: right;
                flex-grow: 1;
            }
        `;
	}

	static get properties() {
		return { count: { type: Number } };
	}

	constructor() {
		super();
		this.count = 0;
	}

	#increment() {
		this.count++;
	}

	#decrement() {
		this.count--;
	}

	render() {
		return html`
            <div class="wrapper">
                <button type="button" class="button" @click=${this.#decrement}>-1</button>
                <input type="text" class="input" value=${this.count} />
                <button type="button" class="button" @click=${this.#increment}>+1</button>
            </div>
        `;
	}
}

customElements.define("lit-component", LitComponent);
