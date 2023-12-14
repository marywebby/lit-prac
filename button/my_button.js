import {LitElement, html} from 'lit';

class MyButton extends LitElement {
    static styles = css`
    * {
      color: blue;
      font-size: 16px;
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
          <button class="button">Sign up</button>
        `;
      }
}

customElements.define('my-button', MyButton);

// need to add how to render 