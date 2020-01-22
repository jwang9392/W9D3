class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
  }

  bindEvents() {
    $('li').on("click", ()=>{
      let $square = $(event.target);
      let currPlayer = this.game.currentPlayer;
      if (!this.game.winner()){
        this.makeMove($square);
        if (this.game.winner()){
          let $message =  $('<span>').text(`You win, ${currPlayer}!`);
          $message.addClass('message-shown');
          $('body').append($message);
          $('li').addClass('redText');
          $(`.${currPlayer}`).addClass('winText');
        } else if (this.game.board.isOver()) {
          let $message = $('<span>').text(`a TIE!`);
          $message.addClass('message-shown');
          $('body').append($message);
          $('li').addClass('redText');
          
        }
      }
    });
  }

  gameOver(){
    
  }

  makeMove($square) {
    let currPlayer = this.game.currentPlayer;
    $square.addClass(`${currPlayer}`);
    this.game.playMove($square.data("pos"));
    $square.append(`${currPlayer}`);
    console.log($square.data("pos"));
  }

  setupBoard() {
    let $grid = $('<ul>');
    this.$el.append($grid)

    // for (let i = 0; i < 9; i++) {
    //   let $newLi = $('<li>');
    //   // $newLi.append("TEST");
    //   $grid.append($newLi);
    // }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $newLi = $('<li>');
        $newLi.data("pos", [i,j]);
        // $newLi.addClass("x");
        $grid.append($newLi);
      }
    }



  }
}

module.exports = View;
