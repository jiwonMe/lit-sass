import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-app')
export class MyApp extends LitElement {
  render() {
    return html`
    <h1>Hello World</h1>
    `;
  }
}
