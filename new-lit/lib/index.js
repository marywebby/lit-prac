import { html, css, LitElement } from 'lit';

class EmojiHoneycomb extends LitElement {

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; 
      // background-color: black;
    }

    :host(.background-filter) {
      filter: blur(5px); /* Adjust the blur value as needed */
      pointer-events: none; /* Allows clicking through the blurred area */
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); 
      display: none;
      transition: opacity 0.5s ease-in-out;
    }
    
    .overlay.show {
      display: block;
    }

    .container {
      position: relative;
    }

    .honeycomb-container, .arc-container {
      position: absolute;
      bottom: 15px;
      right: 16px;
      left: 150px;
      transform: translateX(-100%);
    }

    .message-example {
      font-size: 40px;
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
      transition: transform 0.25s ease-in-out; /* Adjust the duration as needed */
    }

    .honeycomb-container.show-honeycomb .honeycomb-emoji {
      display: block;
      width: 25px;
      height: 25px;
      background-color: rgba(255, 255, 255, 0.5);
      border: 0.5px solid rgba(255, 255, 255, 0.3);
      border-radius: 100%;
      margin: 5px;
      padding-left: 4px;
      font-size: 16px;
      cursor: pointer;
      text-align: center;
    }

    .arc-emoji {
      font-size: 16px;
      position: absolute;
      opacity: 0; /* Start with translucent */
    }
    
    .arc-emoji.visible {
      opacity: 1; /* Transition to fully opaque when the 'visible' class is added */
      transform: scale(1); /* Add a scale transformation for the sliding effect */
    }
    
    .arc-container.show-arc .arc-emoji {
      display: block;
      width: 25px;
      height: 25px;
      background-color: rgba(255, 255, 255, 0.5);
      border: 0.5px solid rgba(255, 255, 255, 0.3);
      border-radius: 100%;
      padding-left: 4px;
      font-size: 16px;
      cursor: pointer;
      text-align: center;
    }
    
    .honeycomb-container:hover .honeycomb-emoji {
      display: block;
    }

    .rendered-emojis.visible {
      width: 25px;
      height: 25px;
      background-color: rgba(255, 255, 255, 0.5);
      border: 0.5px solid rgba(255, 255, 255, 0.3);
      border-radius: 100%;
      font-size: 16px;
    }

    // honeycomb-emoji honeycomb-1, class for one specific honeycomb, add :hover to see arc emojis appear
  `;

  selectedArcEmojis = [];
  renderedEmojis = [];

  handleClickMessageExample(selectedArcEmojis) {
    // creating inner honeycomb container for arc emojis to appear, setting it equal to '' to allow a place for the emojis
      const honeycombContainer = this.shadowRoot.querySelector('.honeycomb-container');
      honeycombContainer.innerHTML = '';

    // pushing the selectedArcEmojis array to the renderedEmojis array to be using later on the message 
      this.selectedArcEmojis.push(this.renderedEmojis)
    // checking for one emoji in selectedArcEmojis, should be undefined cause not clicked
      console.log("selectedArcEmojis", selectedArcEmojis)
    // checking for all clicked emojis in renderedEmojis, should be empty cause nothing is clicked yet
      console.log('rendered emoji array', this.renderedEmojis)
    // clearing out selected arcs for next message click
      this.selectedArcEmojis = [];

    // adding grey filter over message 
      const overlay = this.shadowRoot.getElementById('overlay');
      overlay.classList.add('show');

    // honeycomb circle displau
      const honeycombEmojis = [1, 2, 3, 4, 5, 6].map(index => {
      // creating buttons for each emoji
        const honeycombEmoji = document.createElement('button');
      // creating name and then index for each button
        honeycombEmoji.className = `honeycomb-emoji honeycomb-${index}`;
      // setting each emoiji to each index 
        honeycombEmoji.innerHTML = ['😅', '😭', '😡', '😐', '😴', '😁'][index - 1];
      // adding an event listener for each index, then sets off `handleClickHoneycombEmoji` function
        honeycombEmoji.addEventListener('click', () => this.handleClickHoneycombEmoji(index));
      // appending the emojis to the honeycomb container, allowing them to display
        honeycombContainer.appendChild(honeycombEmoji);
      // then returning the hoeycomb emoji
        return honeycombEmoji;
      });

    // adding show-honeycomb to the container to allow it to be seen, then we are also removing this class list later on 
      honeycombContainer.classList.add('show-honeycomb');

    // creating the angle and styling for each emoji
      setTimeout(() => {
        honeycombEmojis.forEach((emoji, index) => {
          const direction = 28;
          const angle = (Math.PI / 3) * index;
          const x = direction * Math.cos(angle);
          const y = -direction * Math.sin(angle);
          emoji.style.transform = `translate(${x}px, ${y}px)`;
        });
      }, 100);
  };




  handleClickHoneycombEmoji(clickedIndex) {
  // creating arc container for arc emojis to appear, setting it equal to '' to allow a place for the emojis
      const arcContainer = this.shadowRoot.querySelector('.arc-container');
      arcContainer.innerHTML = '';
  
  // creating each honeycomb emojis sub group of arc emojis 
    const arcGroups = [
      ['😳', '😅', '🫣'],
      ['😢', '😭', '😔'],
      ['😤', '😡', '🤬'],
      ['😶', '😐', '🥱'],
      ['🥱', '😴', '😪'],
      ['😊', '😁', '😋'],
    ];
  
  // selectedArcGroup, creates the index for 
    const selectedArcGroup = arcGroups[clickedIndex - 1];

  // needed for creating a subindex for each arc emoji, and setting the arc emoji to the inner html
    const arcEmojis = selectedArcGroup.map((emoji, subIndex) => {
      const arcEmoji = document.createElement('button');
      arcEmoji.className = `arc-emoji arc-${clickedIndex} arc-sub-${subIndex}`;
      arcEmoji.innerHTML = emoji;

    // adding the event listener to then activate the handleClickArcEmoji function down below
      arcEmoji.addEventListener('click', () => this.handleClickArcEmoji(arcEmoji));
    // appending the arc emojis to the arc container
      arcContainer.appendChild(arcEmoji);
  
    // returning arcEmoji
      return arcEmoji;
    });
  
  // adding class list show arc, as described in the static styles 
    arcContainer.classList.add('show-arc');
  
  // specific offsets for each arc container 
    const arcEmojiPlacement = [
      { x: 45, y: 5 },
      { x: 25, y: -30 },
      { x: -15, y: -30 },
      { x: -35, y: 5 },
      { x: -15, y: 40 },
      { x: 25, y: 40 }
    ];
  
  // set timeout for the placement, angle and such
    setTimeout(() => {
      arcEmojis.forEach((emoji, subIndex) => {
        const trio_rotation = Math.PI / 3 * subIndex;
        const parental_rotation = (clickedIndex - 2) * (Math.PI / 3);
        const angle = trio_rotation + parental_rotation;
  
        const distance = subIndex === 1 ? 27 : 26;
        const { x, y } = arcEmojiPlacement[clickedIndex - 1];
        const offsetX = distance * Math.cos(angle);
        const offsetY = -distance * Math.sin(angle);
  
        emoji.style.transform = `translate(${x + offsetX}px, ${y + offsetY}px)`;
      // making the arc visible 
        emoji.classList.add('visible');
      });
    }, 100);
  }
  


  handleClickArcEmoji(clickedArcEmoji, renderedEmojis, messageExample) {
    // clicking the selected arc emoji and pushing my clicked arc emoji array 
    this.selectedArcEmojis.push(clickedArcEmoji);
    // console logging to see if its there
    console.log("selectedArcEmojis", this.selectedArcEmojis)
    // adding the overlay when clicked, adds grey background to it
    const overlay = this.shadowRoot.getElementById('overlay');
    overlay.classList.add('show');
    // grabbing honeycomb container to manipulate 
    const honeycombContainer = this.shadowRoot.querySelector('.honeycomb-container');
    // grabbing arc container to manipulate, they are within the shawdow dom  
    const arcContainer = this.shadowRoot.querySelector('.arc-container');
    // this is setting the contents to an empty string, essentially clearning it, creating a new clean slate to input data 
    honeycombContainer.innerHTML = '';
    arcContainer.innerHTML = '';

    // rendered emojis to page 
    this.renderedEmojis.push(clickedArcEmoji)
    console.log("rendered emojis", this.renderedEmojis)

    // collapse the honeycomb
    honeycombContainer.classList.remove('show-honeycomb');
      setTimeout(() => {
        arcContainer.classList.add('show-arc');
        console.log("clickedArcEmoji", clickedArcEmoji)
        this.selectedArcEmojis.forEach((clickedArcEmoji) => {
          const emojiElement = document.createElement('span'); // or div, depending on your needs
        
        });
      }, 100);

      const messageAppend = this.renderRoot.querySelector('.rendered-emojis')
      this.renderedEmojis.forEach((emojiObject) => {
        emojiObject.className = "rendered-emojis";
        emojiObject.style = "";
        if (messageAppend.children.length <= 5) {
          messageAppend.appendChild(emojiObject)
          emojiObject.classList.add('visible');
        } else if (messageAppend.children.length == 6) {
        // change div to button to display more emojis 
          const myDiv = document.createElement("div")
          myDiv.innerText = "..."
          messageAppend.appendChild(myDiv)
        } else {
          return
        }
      })
  };

  render() {
    return html`
      <div class="overlay" id="overlay"></div>
      <div class="container">
        <div class="message-example" @click="${() => this.handleClickMessageExample()}">message</div>
        <div class="rendered-emojis" @click="${() => undefined}"><div>
        <div class="honeycomb-container" @click="${() => undefined}"></div>
        <div class="arc-container" @click="${() => undefined}"></div>
      </div>
    `;
  }
}

customElements.define('emoji-honeycomb', EmojiHoneycomb);




