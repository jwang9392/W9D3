const View = require('./ttt-view.js');
const Game = require('../tic-tac-toe-solution/game.js');

  $(() => { 
    // Your code here
    let game = new Game();
    let view = new View(game, $('.ttt'));
    view.bindEvents();
  });

