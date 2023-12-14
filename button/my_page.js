import {LitElement, html} from 'lit';

import './my_button.js';

class MyPage extends LitElement {
  render() {
    return html`
      <my-button></my-button>
    `;
  }
}
customElements.define('my-page', MyPage);