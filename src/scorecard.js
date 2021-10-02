class Scorecard {
  static startGame(name) {
    this.currentGame = new Scorecard(name);
  }

  static currentGame;

  constructor(name) {
    this.name = name
    this.frames = []
  }
}