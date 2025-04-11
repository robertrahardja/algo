// Define a custom element
class MyElement extends HTMLElement {
  constructor() {
    super();
    // Create a shadow DOM
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          border: 1px solid #ccc;
          padding: 10px;
        }
      </style>
      <h2>My Custom Element</h2>
      <slot></slot>
    `;
  }

  // Lifecycle methods
  connectedCallback() {
    console.log('Custom element added to page');
  }

  disconnectedCallback() {
    console.log('Custom element removed from page');
  }
}

// Register the custom element with the browser
customElements.define('my-element', MyElement);

// you can use the following now
// <my-element>
//  <p>This is my custom element content</p>
// </my-element>
//
//
// or

let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);


customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);
