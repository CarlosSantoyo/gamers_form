import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `polython19-form`
 * form to get data from the users
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Polython19Form extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'polython19-form',
      },
    };
  }
}

window.customElements.define('polython19-form', Polython19Form);
