
matcherController = {
  
  model: matcherModel,
  view: matcherView,

  init: function(size){
    this.model.init(size);
    this.view.init();
    this.view.addClickHandlers( this.selectCard, this );
  },


  addClickHandlers: function(size){
  },
};
