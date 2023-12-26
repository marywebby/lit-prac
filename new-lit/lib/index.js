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
// import { html, css, LitElement } from 'lit';

// class MyComp extends LitElement {

//   static styles =  css`
//     .comp {
//       color: blue;
//     }

//     .button-container {
//       position: relative;
//       display: flex;
//       align-items: center;
//     }

//     .button1 {
//       padding: 10px;
//       margin-right: 10px;
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
//     selectedEmoji: { type: String },
//   };

//   constructor() {
//     super();
//     this.emojis = ['😄', '🚀', '🌈', '🎉', '🔥', '👍'];
//     this.selectedEmoji = this.emojis[0]; // Set default selected emoji
//   }

//   addEmoji() {
//     // Add the selected emoji to the list when the button is clicked
//     this.emojis.push(this.selectedEmoji);
//     this.requestUpdate(); // Trigger a re-render
//   }

//   handleEmojiChange(event) {
//     // Update the selectedEmoji when the dropdown value changes
//     this.selectedEmoji = event.target.value;
//   }

//   render() {
//     return html`
//       <div class="comp">
//         <div class="button-container">
//           <button class="button1" @click="${this.addEmoji}">SIGN UP</button>
//           <select @change="${this.handleEmojiChange}">
//             ${this.emojis.map((emoji) => html`<option value="${emoji}">${emoji}</option>`)}
//           </select>
//           ${this.emojis.map((emoji) => html`<div class="emoji">${emoji}</div>`)}
//         </div>
//       </div>
//     `;
//   }
// }

// customElements.define('my-comp', MyComp);




// buttons bounce when clicked 

// import { html, css, LitElement } from 'lit';

// class MyComp extends LitElement {

//   static styles = css`
//     .comp {
//       color: blue;
//       text-align: center;
//       margin-top: 20px;
//     }

//     .reaction-container {
//       display: flex;
//       justify-content: center;
//       margin-top: 10px;
//     }

//     .reaction-button {
//       padding: 10px;
//       margin: 5px;
//       cursor: pointer;
//       background-color: #3498db;
//       border: none;
//       border-radius: 50%;
//       font-size: 18px;

//       transition-property: transform;
//       transition-duration: 0.3s;
//       transition-timing-function: ease; 
//     }

//     .reaction-button:hover {
//       transform: translateY(-10px);
//       background-color: var(--clr-accent);
//       color: var(--clr-light)
//     }

//     .emoji-circle {
//       display: flex;
//       justify-content: space-between;
//       width: 200px;
//       margin-top: 10px;
//     }

//     .emoji {
//       font-size: 24px;
//       line-height: 36px;
//       text-align: center;
//       width: 30px;
//       height: 30px;
//       border-radius: 50%;
//       background-color: #3498db;
//       color: white;
//       cursor: pointer;
//     }

//     .emoji-circle:hover {
//       transform: translateY(-10px);
//       background-color: var(--clr-accent);
//       color: var(--clr-light)
//     }
//   `;

//   static properties = {
//     isReactionVisible: { type: Boolean },
//     emojis: { type: Array },
//     selectedEmoji: { type: String },
//     message: { type: String },
//   };

//   constructor() {
//     super();
//     this.isReactionVisible = false;
//     this.emojis = ['😄', '🚀', '🌈', '🎉', '🔥', '👍'];
//     this.selectedEmoji = null;
//     this.message = '';
//   }

//   toggleReactionVisibility() {
//     // Toggle the visibility of the emoji circle
//     this.isReactionVisible = !this.isReactionVisible;
//   }

//   handleEmojiClick(emoji) {
//     // Handle the click on an emoji
//     if (this.selectedEmoji !== emoji) {
//       // Change the emoji if a new one is clicked
//       this.selectedEmoji = emoji;
//     }

//     // Add the selected emoji to the message
//     this.message += this.selectedEmoji;
//     console.log(`Message: ${this.message}`);
//   }

//   render() {
//     return html`
//       <div class="comp">
//         <button class="reaction-button" @click="${this.toggleReactionVisibility}">Add Reaction</button>
//         <div class="reaction-container">
//           ${this.isReactionVisible
//             ? html`
//                 <div class="emoji-circle">
//                   ${this.emojis.map(
//                     (emoji) => html`<div class="emoji" @click="${() => this.handleEmojiClick(emoji)}">${emoji}</div>`
//                   )}
//                 </div>
//               `
//             : ''}
//         </div>
//         <div class="message">${this.message}</div>
//       </div>
//     `;
//   }
// }

// customElements.define('my-comp', MyComp);



// sample lit button for playing around with 
import { html, css, LitElement } from 'lit';

class EmojiHoneycomb extends LitElement {

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* 100% of the viewport height */
    }

    .center-emoji {
      font-size: 100px;
      cursor: pointer;
      transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    .center-emoji:hover {
      transform: translateY(-10px);
      color: #ff8c00; /* Change color on hover */
    }

    .honeycomb-emoji {
      font-size: 24px;
      position: absolute;
      display: none;
      transition: transform 3s ease-in-out; /* Adjust the duration as needed */
    }

    .honeycomb-container.show-honeycomb .honeycomb-emoji {
      display: block;
    }

    .top-right-emoji-container {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 24px;
    }

    .honeycomb-emoji.hovered {
      transform: translateY(-10px);
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
    }
  `;

  handleClick() {
    console.log('Center emoji clicked! Displaying honeycomb emojis.');
    const honeycombContainer = this.shadowRoot.querySelector('.honeycomb-container');
    honeycombContainer.innerHTML = ''; // Clear previous honeycomb emojis

    const honeycombEmojis = [1, 2, 3, 4, 5, 6].map(index => {
      const honeycombEmoji = document.createElement('button');
      honeycombEmoji.className = `honeycomb-emoji honeycomb-${index}`;
      honeycombEmoji.innerHTML = ['😅', '😭', '😡', '😐', '😴', '😁'][index - 1];
      honeycombEmoji.addEventListener('transitionend', () => {
        honeycombEmoji.style.transition = 'none'; // Remove transition after animation
      });

      honeycombEmoji.addEventListener('click', () => this.handleHoneycombEmojiClick(honeycombEmoji.cloneNode(true)));
      honeycombContainer.appendChild(honeycombEmoji);
      return honeycombEmoji;
    });

    honeycombContainer.classList.add('show-honeycomb');

    // Apply the transform after a short delay to trigger the animation
    setTimeout(() => {
      honeycombEmojis.forEach((emoji, index) => {
        const direction = 30; // Adjust the distance to move
        const angle = (Math.PI / 3) * index; // Move in the northeast direction
        const x = direction * Math.cos(angle);
        const y = -direction * Math.sin(angle);
        emoji.style.transform = `translate(${x}px, ${y}px)`;
        emoji.style.transition = 'transform .5s ease-in-out'; // Adjust the duration as needed
      });
    }, 100);
  }

  handleHoneycombEmojiClick(emojiClone) {
    console.log('Honeycomb emoji clicked! Moving to top right corner.');
    const honeycombContainer = this.shadowRoot.querySelector('.honeycomb-container');
    const topRightEmojiContainer = this.shadowRoot.querySelector('.top-right-emoji-container');
    
    emojiClone.classList.add('hovered');
    emojiClone.style.transition = 'transform 0.3s ease-in-out'; // Add transition for hover effect
    emojiClone.addEventListener('click', () => this.handleTopRightEmojiClick(emojiClone));

    topRightEmojiContainer.innerHTML = '';
    topRightEmojiContainer.appendChild(emojiClone);
  }

  handleTopRightEmojiClick(emojiClone) {
    console.log('Top right emoji clicked! Removing hover effect.');
    emojiClone.classList.remove('hovered');
    emojiClone.style.transition = 'none'; // Remove transition after hover effect is done
  }

  render() {
    return html`
      <div class="center-emoji" @click="${this.handleClick}">😄</div>
      <div class="honeycomb-container">
        <!-- Honeycomb emojis are dynamically added here -->
      </div>
      <div class="top-right-emoji-container"></div>
    `;
  }
}

customElements.define('emoji-honeycomb', EmojiHoneycomb);
