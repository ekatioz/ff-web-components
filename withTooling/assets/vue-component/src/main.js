import { defineCustomElement } from "vue";
import VueComponent from "./VueComponent.vue";

customElements.define("vue-component", defineCustomElement(VueComponent));
