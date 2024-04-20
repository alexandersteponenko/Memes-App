class Controller {
    constructor() {
        this.model = new Model({
            onMemesChange: this.handlerModleMemesChange,
            onCurrentMemeIdChange: this.handlerModelCurrentMemeIdChange,
            onTextTopChange: this.handlerModelTextTopChange,
            onTextBottomChange: this.handlerModelTextBottomChange,
            onStateTopTextChange: this.handlerModelStateTopChange,
            onStateBottomTextChange: this.handlerModelStateBottomChange,
        });

        this.view = new View({
            onMemeChange: this.handlerViewMemeChange,
            onTextTopChange: this.handlerViewTextTopChange,
            onTextBottomChange: this.handlerViewTextBottomChange,

        });

        this.api = new API();
    }

    init () {
        this.api.getMemes()
        .then(data => {
            const memes = data.data.memes;
            this.model.setMemes(memes);
        });
    }

    handlerModleMemesChange = () => {
        this.view.renderMemesSelect(this.model.getMemes(), this.model.getCurrentMemeId());
    }

    handlerModelCurrentMemeIdChange = () => {
       
        this.view.renderPreview(this.model.getPreview());
     }

    handlerModelTextTopChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }

    handlerModelTextBottomChange = () => {
        this.view.renderPreview(this.model.getPreview());
    }

    handlerModelStateTopChange = (error)  => {
        this.view.renderTopError(error);
      }
    
    handlerModelStateBottomChange = (error)  => {
        this.view.renderBottomError(error);
      }

    handlerViewMemeChange = (id) => {
        this.model.setCurrentMemeId(id);
      }

    handlerViewTextTopChange = (text, error) => {
        if(text.length > 25) {
            this.model.setTopError(error);
        } else {
            this.model.setTextTop(text);
        }      
    }

    handlerViewTextBottomChange = (text, error) => {
        if(text.length > 25) {
            this.model.setBottomError(error); 
        } else {
            this.model.setTextBottom(text);
        }  
    }
};