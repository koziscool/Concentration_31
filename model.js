

matcherModel = {

  size: 4,
  cards:[],
  cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ],

  currentId: 1,

  totalCards: 2,

  init:function(size) {
    this.size = size || this.size;
    var numPairs = Math.pow( this.size, 2 ) / 2;
    for( var i = 0; i < numPairs; i++ ) this.addPair();
    this.shuffle();
  },

  addPair:function(size) {
    var value = this.cardValues[ Math.floor( Math.random() * this.cardValues.length ) ];
    this.cards.push( new this.Card( value, this.getId() ) );
    this.cards.push( new this.Card( value, this.getId() ) );
    this.totalCards += 2;
  },


  getId:function() {
    var id = this.currentId;
    this.currentId++;
    return id;
  },

  Card: function( value, id ){
    this.value = value;
    this.id = id;
  },

  shuffle: function(  ){
    var currentIndex = this.cards.length, temp, rand;

    while( currentIndex > 0 ){
      rand = Math.floor( Math.random() * currentIndex );
      currentIndex--;

      temp = this.cards[currentIndex];
      this.cards[currentIndex]= this.cards[rand];
      this.cards[rand] = temp;
    }
  },





};

