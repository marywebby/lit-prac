// import { html, css, LitElement } from 'lit';
// // lit-element

// class MyComp extends LitElement {

//   // configured diff 
//   static styles =  css`
//       .comp {
//         color: blue;
//       }
//     `;
  

//   static properties = {
//   };

//   constructor() {
//       super();
//   }

//   updated() {
      
//   }

//   render() {
//     return html`
//         <body>
//             <button class="button1">SIGN UP</button>
//         </body>
//     `;
//   }
// }

// customElements.define('my-comp', MyComp);



// this allows for you to just have an emoji appear once the button is clicked 
// import { html, css, LitElement } from 'lit';

// class MyComp extends LitElement {

//   static styles =  css`
//     .comp {
//       color: blue;
//     }

//     .button-container {
//       position: relative;
//     }

//     .button1 {
//       padding: 10px;
//     }

//     .emoji {
//       position: absolute;
//       bottom: 0;
//       right: 0;
//       font-size: 24px;
//     }
//   `;
  
//   static properties = {
//     emojis: { type: Array },
//   };

//   constructor() {
//     super();
//     this.emojis = ['😄', '🚀', '🌈', '🎉', '🔥', '👍'];
//   }

//   addEmoji() {
//     // Add an emoji to the list when the button is clicked
//     const randomEmoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
//     this.emojis.push(randomEmoji);
//     this.requestUpdate(); // Trigger a re-render
//   }

//   render() {
//     return html`
//       <div class="comp">
//         <div class="button-container">
//           <button class="button1" @click="${this.addEmoji}">SIGN UP</button>
//           ${this.emojis.map((emoji) => html`<div class="emoji">${emoji}</div>`)}
//         </div>
//       </div>
//     `;
//   }
// }

// customElements.define('my-comp', MyComp);


// this lets you choose the emoji in a drop down select 
import { html, css, LitElement } from 'lit';

class MyComp extends LitElement {

  static styles =  css`
    .comp {
      color: blue;
    }

    .button-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    .button1 {
      padding: 10px;
      margin-right: 10px;
    }

    .emoji {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 24px;
    }
  `;
  
  static properties = {
    emojis: { type: Array },
    selectedEmoji: { type: String },
  };

  constructor() {
    super();
    this.emojis = ['😄', '🚀', '🌈', '🎉', '🔥', '👍'];
    this.selectedEmoji = this.emojis[0]; // Set default selected emoji
  }

  addEmoji() {
    // Add the selected emoji to the list when the button is clicked
    this.emojis.push(this.selectedEmoji);
    this.requestUpdate(); // Trigger a re-render
  }

  handleEmojiChange(event) {
    // Update the selectedEmoji when the dropdown value changes
    this.selectedEmoji = event.target.value;
  }

  render() {
    return html`
      <div class="comp">
        <div class="button-container">
          <button class="button1" @click="${this.addEmoji}">SIGN UP</button>
          <select @change="${this.handleEmojiChange}">
            ${this.emojis.map((emoji) => html`<option value="${emoji}">${emoji}</option>`)}
          </select>
          ${this.emojis.map((emoji) => html`<div class="emoji">${emoji}</div>`)}
        </div>
      </div>
    `;
  }
}

customElements.define('my-comp', MyComp);



