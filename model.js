class Model {
    constructor({ 
        onCurrentMemeIdChange,
        onMemesChange,
        onTextTopChange,
        onTextBottomChange,
        onStateTopTextChange,
        onStateBottomTextChange,
     }) {
        this.memes = [];
        this.currentMemeId = null;
        this.textTop = '';
        this.textBottom = '';
        this.error = '';

        this.onMemesChange = onMemesChange;
        this.onCurrentMemeIdChange = onCurrentMemeIdChange;
        this.onTextTopChange = onTextTopChange;
        this.onTextBottomChange = onTextBottomChange;
        this.onStateTopTextChange = onStateTopTextChange;
        this.onStateBottomTextChange = onStateBottomTextChange;
        
    }

    getMemes() {
        return this.memes;
    }

    setMemes(memes) {
        this.memes = memes;
        this.currentMemeId = memes[27].id;
        this.onMemesChange();
        this.onCurrentMemeIdChange();
    }

    setCurrentMemeId(currentMemeId) {
        this.currentMemeId = currentMemeId;
        this.onCurrentMemeIdChange();
    }

    getCurrentMemeId() {
        return this.currentMemeId;
    }

    setTextTop(text) {
        this.textTop = text;
        this.onTextTopChange();
    }

    setTopError() {
        this.error ='error';
        this.onStateTopTextChange(this.error);
      }

    setTextBottom(text) {
        this.textBottom = text;
        this.onTextBottomChange();
    }

    setBottomError() {
        this.error = 'error';
        this.onStateBottomTextChange(this.error);
         }

    getPreview = () => {
        return {
           textTop: this.textTop,
           textBottom: this.textBottom,
           url: this.getCurrentMeme().url
        };
    }

    getCurrentMeme() {
        let currentMeme = null;

        this.memes.forEach(meme => {
            if (meme.id === this.getCurrentMemeId()) {
                currentMeme = meme;
            }
        });
        return currentMeme;
    }
};
