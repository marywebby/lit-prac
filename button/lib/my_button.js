import { LitElement, html, css } from 'lit';

class MyButton extends LitElement {
    static styles = css`
    * {
      color: blue;
      font-size: 30px;
    }
  `;

    static properties = {
        button: {attribute: false},
    };
 

    render() {
      return html`
          <style>
              :host {
                  display: block;
                  margin: 20px;
              }
          </style>
          <button>Sign up</button>
      `;
  }

}

customElements.define('my-button', MyButton);

