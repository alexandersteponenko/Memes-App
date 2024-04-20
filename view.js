class View {
    constructor({ 
        onMemeChange,
        onTextTopChange,
        onTextBottomChange,
     }) {
        this.previewTopTextNode = document.querySelector('.js-top-text');
        this.previewBottomTextNode = document.querySelector('.js-bottom-text');
        this.previewImageNode = document.querySelector('.js-image');

        this.settingsSelectNode = document.querySelector('.js-memes-select');
        this.textTopInputNode = document.querySelector('.js-text-top-input');
        this.textBottomInputNode = document.querySelector('.js-text-bottom-input');

        this.errorTopNode = document.querySelector('.js-errorTop');
        this.errorBottomNode = document.querySelector('.js-errorBottom');

        this.onMemeChange = onMemeChange;
        this.onTextTopChange = onTextTopChange;
        this.onTextBottomChange = onTextBottomChange;

        this.settingsSelectNode.addEventListener('change', this._handleSelectChange);
        this.textTopInputNode.addEventListener('input', this._handleTextTopChange);
        this.textBottomInputNode.addEventListener('input', this._handleTextBottomChange);

    }

    renderPreview(preview) {
        const {
            url,
            textTop,
            textBottom
        } = preview;

        this.previewTopTextNode.innerText = textTop;
        this.previewBottomTextNode.innerText = textBottom;
        this.previewImageNode.src = url;
    }

    renderTopError() {
        this.errorTopNode.innerText = `max длинна символов 25.`;
       }
    
    renderBottomError() {
        this.errorBottomNode.innerText = `max длинна символов 25.`; 
      }

    renderMemesSelect(memes, currentMemeId) {
        memes.forEach(meme => {
            const {
                id,
                name
            } = meme;
            
          const optionNode = document.createElement('option');
          optionNode.setAttribute('value', id); 
          optionNode.innerText = name;

          if (id === currentMemeId) {
            optionNode.setAttribute('selected', true);
          }
          
          this.settingsSelectNode.appendChild(optionNode);
        });
    }

    _handleSelectChange = () => {
        const id = this.settingsSelectNode.value;
        this.onMemeChange(id);
    }

    _handleTextTopChange = (event) => {
        this.onTextTopChange(event.target.value);
    }

    _handleTextBottomChange = (event) => {
        this.onTextBottomChange(event.target.value); 
    }
};