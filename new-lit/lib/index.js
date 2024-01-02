// // sample lit button for playing around with 
// import { html, css, LitElement } from 'lit';

// class EmojiHoneycomb extends LitElement {

//   static styles = css`
//     :host {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 100vh; 
//     }

//     .message-example {
//       font-size: 75px;
//       cursor: pointer;
//       transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
//       border: ;
//     }

//     .message-example:hover {
//       transform: translateY(-10px);
//       color: #ff8c00; /* Change color on hover */
//     }

//     .honeycomb-emoji {
//       font-size: 24px;
//       position: absolute;
//       display: none;
//       transition: transform 0.5s ease-in-out; /* Adjust the duration as needed */
//     }

//     .honeycomb-container.show-honeycomb .honeycomb-emoji  {
//       display: block;
//       border: none;
//       background-color: transparent;
//       margin: 5px;
//     }

//     .arc-emoji {
//       display: block;
//       font-size: 24px;
//       border: none;
//       background-color: transparent;
//       margin: 5px;
//     }
//   `;

//   handleClick() {
//     const honeycombContainer = this.shadowRoot.querySelector('.honeycomb-container');
//     honeycombContainer.innerHTML = '';

//     const honeycombEmojis = [1, 2, 3, 4, 5, 6].map(index => {
//       const honeycombEmoji = document.createElement('button');
//       honeycombEmoji.className = `honeycomb-emoji honeycomb-${index}`;
//       honeycombEmoji.innerHTML = ['😅', '😭', '😡', '😐', '😴', '😁'][index - 1];

//       honeycombEmoji.addEventListener('click', () => this.handleHoneycombEmojiClick(honeycombEmoji.cloneNode(true)));
//       honeycombContainer.appendChild(honeycombEmoji);
//       return honeycombEmoji;
//     });

//     honeycombContainer.classList.add('show-honeycomb');

//     setTimeout(() => {
//       honeycombEmojis.forEach((emoji, index) => {
//         const direction = 30;
//         const angle = (Math.PI / 3) * index;
//         const x = direction * Math.cos(angle);
//         const y = -direction * Math.sin(angle);
//         emoji.style.transform = `translate(${x}px, ${y}px)`;
//         emoji.style.transition = 'transform 0.5s ease-in-out';
//       });
//     }, 100);
//   }

// handleHoneycombEmojiClick(clickedEmoji) {
//   const arcContainer = this.shadowRoot.querySelector('.arc-container');
//   arcContainer.innerHTML = '';

//   const arcEmojis = [1, 2, 3].map(index => {
//     const arcEmoji = document.createElement('button');
//     arcEmoji.className = `arc-emoji arc-${index}`;
//     arcEmoji.innerHTML = ['😊', '😂', '😆'][index - 1]; // Replace with your desired emojis

//     arcEmoji.addEventListener('click', () => this.handleArcEmojiClick(arcEmoji.cloneNode(true)));
//     arcContainer.appendChild(arcEmoji);

//     return arcEmoji;
//   });

//   arcContainer.classList.add('show-arc');

//   // Set up the initial positions of arc emojis
//   arcEmojis.forEach((emoji, index) => {
//     const angle = (Math.PI / 3) * index;
//     const x = 60 * Math.cos(angle); // Adjust the distance as needed
//     const y = -60 * Math.sin(angle); // Adjust the distance as needed
//     emoji.style.transform = `translate(${x}px, ${y}px)`;
//   });

//   // Move the arc emojis to form a flower
//   setTimeout(() => {
//     arcEmojis.forEach((emoji, index) => {
//       const direction = 120;
//       const angle = (Math.PI / 3) * index;
//       const x = direction * Math.cos(angle);
//       const y = -direction * Math.sin(angle);
//       emoji.style.transform = `translate(${x}px, ${y}px)`;
//       emoji.style.transition = 'transform 0.5s ease-in-out';
//     });
//   }, 100);
// }

// render() {
//     return html`
//       <div class="message-example" @click="${this.handleClick}">message</div>
//       <div class="honeycomb-container">
//         <!-- Your honeycomb emojis will be added here -->
//       </div>
//       <div class="arc-container"></div>
//     `;
//   }
// }

// customElements.define('emoji-honeycomb', EmojiHoneycomb);



// PREVIOUSLY WORKING 

// import { html, css, LitElement } from 'lit';

// class EmojiHoneycomb extends LitElement {

//   static styles = css`
//     :host {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       height: 100vh; 
//     }

//     .message-example {
//       font-size: 55px;
//       cursor: pointer;
//       transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
//       color: #fff;
//       background-color: #505050;
//       border-radius: 10px;
//       padding: 15px;
//       position: relative;
//     }

//     .message-example:hover {
//       transform: translateY(-10px);
//       color: #ff8c00; /* Change color on hover */
//     }

//     .honeycomb-emoji {
//       font-size: 24px;
//       position: absolute;
//       display: none;
//       transition: transform 0.5s ease-in-out; /* Adjust the duration as needed */
//     }

//     .honeycomb-container.show-honeycomb .honeycomb-emoji {
//       display: block;
//       border: none;
//       background-color: transparent;
//       margin: 5px;
//     }

//     .arc-emoji {
//       font-size: 24px;
//       position: absolute;
//       opacity: 0; /* Start with translucent */
//       transition: opacity 0.25s ease-in-out; /* Adjust the duration as needed */
//     }
    
//     .arc-emoji.visible {
//       opacity: 1; /* Transition to fully opaque when the 'visible' class is added */
//     }

//     .arc-container.show-arc .arc-emoji {
//       display: block;
//       border: none;
//       background-color: transparent;
//       margin: 5px;
//     }
//   `;

//   handleClick() {
//     const honeycombContainer = this.shadowRoot.querySelector('.honeycomb-container');
//     honeycombContainer.innerHTML = '';

//     const honeycombEmojis = [1, 2, 3, 4, 5, 6].map(index => {
//       const honeycombEmoji = document.createElement('button');
//       honeycombEmoji.className = `honeycomb-emoji honeycomb-${index}`;
//       honeycombEmoji.innerHTML = ['😅', '😭', '😡', '😐', '😴', '😁'][index - 1];

//       honeycombEmoji.addEventListener('click', () => this.handleHoneycombEmojiClick(index));
//       honeycombContainer.appendChild(honeycombEmoji);
//       return honeycombEmoji;
//     });

//     honeycombContainer.classList.add('show-honeycomb');

//     setTimeout(() => {
//       honeycombEmojis.forEach((emoji, index) => {
//         const direction = 30;
//         const angle = (Math.PI / 3) * index;
//         const x = direction * Math.cos(angle);
//         const y = -direction * Math.sin(angle);
//         emoji.style.transform = `translate(${x}px, ${y}px)`;
//       });
//     }, 100);

//     // Hide the arc container when the message example button is clicked
//     const arcContainer = this.shadowRoot.querySelector('.arc-container');
//     arcContainer.innerHTML = ''; // Reset arc container content
//     arcContainer.classList.remove('show-arc'); // Hide the arc container
//   }

//   handleHoneycombEmojiClick(clickedIndex) {
//     const arcContainer = this.shadowRoot.querySelector('.arc-container');
//     arcContainer.innerHTML = '';

//     const arcEmojis = [1, 2, 3].map(subIndex => {
//       const arcEmoji = document.createElement('button');
//       arcEmoji.className = `arc-emoji arc-${clickedIndex} arc-sub-${subIndex}`;
//       arcEmoji.innerHTML = ['😊', '😂', '😆'][subIndex - 1]; // Replace with your desired emojis

//       arcEmoji.addEventListener('click', () => this.handleArcEmojiClick(arcEmoji.cloneNode(true)));
//       arcContainer.appendChild(arcEmoji);

//       return arcEmoji;
//     });

//     arcContainer.classList.add('show-arc');

//     // Set up the initial positions of arc emojis off-screen
//     arcEmojis.forEach((emoji) => {
//       emoji.style.transition = 'transform 0.25s ease-in-out; opacity 1s ease-in-out;';
//     });

//     // Transition the arc emojis to their desired positions
//     setTimeout(() => {
//       arcEmojis.forEach((emoji, subIndex) => {
//         const angle = (Math.PI / 3) * subIndex;
//         const distance = subIndex === 1 ? 27 : 25; // Adjust the distances as needed
//         const x = distance * Math.cos(angle) + 23; // Add 10 to shift more northeast
//         const y = -distance * Math.sin(angle) - 37; // Subtract 10 to shift more northeast
//         emoji.style.transform = `translate(${x}px, ${y}px)`;
//         emoji.classList.add('visible');
//       });
//     }, 100);
//   }

//   handleArcEmojiClick(clickedArcEmoji) {
//     // Handle clicks on the arc emojis if needed
//   }

//   render() {
//     return html`
//       <div class="message-example" @click="${this.handleClick}">message</div>
//       <div class="honeycomb-container">
//         <!-- Your honeycomb emojis will be added here -->
//       </div>
//       <div class="arc-container">
//         <!-- Your arc emojis will be added here -->
//       </div>
//     `;
//   }
// }

// customElements.define('emoji-honeycomb', EmojiHoneycomb);









import { html, css, LitElement } from 'lit';

class EmojiHoneycomb extends LitElement {

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; 
    }

    .message-example {
      font-size: 55px;
      cursor: pointer;
      transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
      color: #fff;
      background-color: #505050;
      border-radius: 10px;
      padding: 15px;
      position: relative;
    }

    .message-example:hover {
      transform: translateY(-10px);
      color: #ff8c00; /* Change color on hover */
    }

    .honeycomb-emoji {
      font-size: 24px;
      position: absolute;
      display: none;
      transition: transform 0.5s ease-in-out; /* Adjust the duration as needed */
    }

    .honeycomb-container.show-honeycomb .honeycomb-emoji {
      display: block;
      border: none;
      background-color: transparent;
      margin: 5px;
    }

    .arc-emoji {
      font-size: 24px;
      position: absolute;
      opacity: 0; /* Start with translucent */
      transition: opacity 0.25s ease-in-out; /* Adjust the duration as needed */
    }
    
    .arc-emoji.visible {
      opacity: 1; /* Transition to fully opaque when the 'visible' class is added */
    }

    .arc-container.show-arc .arc-emoji {
      display: block;
      border: none;
      background-color: transparent;
      margin: 5px;
    }
  `;

  handleClick() {
    const honeycombContainer = this.shadowRoot.querySelector('.honeycomb-container');
    honeycombContainer.innerHTML = '';

    const honeycombEmojis = [1, 2, 3, 4, 5, 6].map(index => {
      const honeycombEmoji = document.createElement('button');
      honeycombEmoji.className = `honeycomb-emoji honeycomb-${index}`;
      honeycombEmoji.innerHTML = ['😅', '😭', '😡', '😐', '😴', '😁'][index - 1];

      honeycombEmoji.addEventListener('click', () => this.handleHoneycombEmojiClick(index));
      honeycombContainer.appendChild(honeycombEmoji);
      return honeycombEmoji;
    });

    honeycombContainer.classList.add('show-honeycomb');

    setTimeout(() => {
      honeycombEmojis.forEach((emoji, index) => {
        const direction = 30;
        const angle = (Math.PI / 3) * index;
        const x = direction * Math.cos(angle);
        const y = -direction * Math.sin(angle);
        emoji.style.transform = `translate(${x}px, ${y}px)`;
      });
    }, 100);

    const arcContainer = this.shadowRoot.querySelector('.arc-container');
    arcContainer.innerHTML = ''; 
    arcContainer.classList.remove('show-arc'); 
  }

  handleHoneycombEmojiClick(clickedIndex) {
    const arcContainer = this.shadowRoot.querySelector('.arc-container');
    arcContainer.innerHTML = '';
  
    const arcGroups = [
      ['😅', '😅', '😅'],
      ['2', '2', '2'],
      ['3', '3', '3'],
      ['4', '4', '4'],
      ['5', '5', '5'],
      ['6', '6', '6'],
    ];
  
    const selectedArcGroup = arcGroups[clickedIndex - 1];
  
    const arcEmojis = selectedArcGroup.map((emoji, subIndex) => {
      const arcEmoji = document.createElement('button');
      arcEmoji.className = `arc-emoji arc-${clickedIndex} arc-sub-${subIndex}`;
      arcEmoji.innerHTML = emoji;
  
      arcEmoji.addEventListener('click', () => this.handleArcEmojiClick(arcEmoji.cloneNode(true)));
      arcContainer.appendChild(arcEmoji);
  
      return arcEmoji;
    });
  
    arcContainer.classList.add('show-arc');
  
    arcEmojis.forEach((emoji) => {
      emoji.style.transition = 'transform 0.25s ease-in-out; opacity 1s ease-in-out;';
    });
  
    setTimeout(() => {
      console.log("hey")
      arcEmojis.forEach((emoji, subIndex) => {
        // based off the clickedIndex not the subindex
        // adding in the clickedIndex was being overwritten in the .foreach()
        // console.log('subIndex', subIndex, 'clickedIndex', clickedIndex)
        const trio_rotation = Math.PI/3 * subIndex;
        // const parental_rotation = clickedIndex * Math.PI/3;
        const parental_rotation = ((clickedIndex-2) % 6) * (Math.PI/3)
        const angle = trio_rotation + parental_rotation;

        // const angle = (Math.PI / 3) * subIndex;
        const distance = subIndex === 1 ? 27 : 25; 
        const x = distance * Math.cos(angle) + 23; 
        const y = -distance * Math.sin(angle) - 37; 
        emoji.style.transform = `translate(${x}px, ${y}px)`;
        emoji.classList.add('visible');

        console.log(trio_rotation)
        console.log(parental_rotation)
      });
    }, 100);
  }
  

  handleArcEmojiClick(clickedArcEmoji) {

  }

  render() {
    return html`
      <div class="message-example" @click="${this.handleClick}">message</div>
      <div class="honeycomb-container">
        <!-- Your honeycomb emojis will be added here -->
      </div>
      <div class="arc-container">
        <!-- Your arc emojis will be added here -->
      </div>
    `;
  }
}

customElements.define('emoji-honeycomb', EmojiHoneycomb);