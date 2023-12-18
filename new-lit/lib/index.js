import { html, css, LitElement } from 'lit';
// lit-element

class MyComp extends LitElement {

  // configured diff 
  static styles =  css`
      .comp {
        color: blue;
      }
    `;
  

  static properties = {
  };

  constructor() {
      super();
  }

  updated() {
      
  }

  render() {
    return html`
        <body>
            <button class="button1">SIGN UP</button>
        </body>
    `;
  }
}

customElements.define('my-comp', MyComp);
