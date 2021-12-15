import { scss } from './utils/scss';
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
    static styles = scss`
        :host {
            display: block;
        }
        div {
            color: red;
            b {
                color: blue;
            }
        }
    `;
    render() {
        return html`
        <div>Hello <b>World</b></div>
        `;
    }
}