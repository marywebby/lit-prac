import { html, css, LitElement } from 'lit';

class EmojiHoneycomb extends LitElement {

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; 
      background-color: black;
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


    // honeycomb-emoji honeycomb-1, class for one specific honeycomb, add :hover to see arc emojis appear

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
        const direction = 28;
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
  
    // can change to more specific emojis 
    const arcGroups = [
      ['😅', '😅', '😅'],
      ['😭', '😭', '😭'],
      ['😡', '😡', '😡'],
      ['😐', '😐', '😐'],
      ['😴', '😴', '😴'],
      ['😁', '😁', '😁'],
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
  
    const honeycombOffsets = [
      { x: 45, y: 5 }, // arc space 1
      { x: 25, y: -30 }, // arc space 2
      { x: -15, y: -30 }, // arc space 3
      { x: -35, y: 5 }, // arc space 4
      { x: -15, y: 40 }, // arc space 5
      { x: 25, y: 40} // arc space 6
    ];
  
    setTimeout(() => {
      arcEmojis.forEach((emoji, subIndex) => {
        const trio_rotation = Math.PI / 3 * subIndex;
        const parental_rotation = (clickedIndex - 2) * (Math.PI / 3);
        const angle = trio_rotation + parental_rotation;
  
        const distance = subIndex === 1 ? 27 : 26;
  
        // the x and y specific axis for each of the arc emojis 
        const { x, y } = honeycombOffsets[clickedIndex - 1];
        const offsetX = distance * Math.cos(angle);
        const offsetY = -distance * Math.sin(angle);
  
        emoji.style.transform = `translate(${x + offsetX}px, ${y + offsetY}px)`;
        emoji.classList.add('visible');
      });
    }, 100);
  }
  
  handleArcEmojiClick(clickedArcEmoji) {
    const honeycombContainer = this.shadowRoot.querySelector('.honeycomb-container');
    const honeycombRect = honeycombContainer.getBoundingClientRect();
    const honeycombLeft = honeycombRect.left;
    const honeycombTop = honeycombRect.top;

    const arcRect = clickedArcEmoji.getBoundingClientRect();
    const arcLeft = arcRect.left;
    const arcTop = arcRect.top;

    const bottomLeftPosition = {
        x: 10 + honeycombLeft + window.scrollX - arcLeft,
        y: window.innerHeight - 100 + honeycombTop + window.scrollY - arcTop,
    };

    // Set the transition and target position for the clicked arc emoji
    clickedArcEmoji.style.transition = 'transform 0.5s ease-in-out, opacity 1s ease-in-out, scale 0.5s ease-in-out';
    clickedArcEmoji.style.transform = `translate(${bottomLeftPosition.x}px, ${bottomLeftPosition.y}px) scale(1)`;
    clickedArcEmoji.style.opacity = '1';

    // Collapse other arc emojis
    const otherArcEmojis = Array.from(honeycombContainer.querySelectorAll('.arc-emoji'));
    otherArcEmojis.forEach((arcEmoji) => {
        if (arcEmoji !== clickedArcEmoji) {
            arcEmoji.style.transition = 'transform 0.5s ease-in-out, opacity 1s ease-in-out, scale 0.5s ease-in-out';
            arcEmoji.style.transform = 'translate(0, 0) scale(0)';
            arcEmoji.style.opacity = '0';
        }
    });
}


render() {
    return html`
      <div class="container">
        <div class="message-example" @click="${this.handleClick}">message</div>
        <div class="honeycomb-container">
          <!-- Your honeycomb emojis will be added here -->
        </div>
        <div class="arc-container">
          <!-- Your arc emojis will be added here -->
        </div>
      </div>
    `;
  }
}

customElements.define('emoji-honeycomb', EmojiHoneycomb);


