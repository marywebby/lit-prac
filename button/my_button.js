import {LitElement, html} from 'lit';

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
             {
              display: block;
              margin: 20px;
            }
          </style>
          <button>Sign up</button>
        `;
      }
}

customElements.define('button', MyButton);
