function changeText() {
    const words = ["Hello!", "Welcome!", "Awesome!", "Surprise!", "Fantastic!", "JavaScript is fun!", "Boom!", "Nice!", "Wow!", "Yay!"];
    const randomIndex = Math.floor(Math.random() * words.length);
    document.getElementById('main-title').textContent = words[randomIndex];
  }
  
  function changeStyle() {
    const randomColor = () => {
      const hex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
      return `#${hex}`;
    };
  
    document.getElementById('description').style.color = randomColor();
  }
  
  function toggleElement() {
    const container = document.getElementById('dynamic-container');
    const existing = document.getElementById('new-element');
  
    if (existing) {
      existing.remove();
    } else {
      const newElement = document.createElement('p');
      newElement.id = 'new-element';
      newElement.textContent = 'This paragraph was added dynamically!';
      container.appendChild(newElement);
    }
  }
  