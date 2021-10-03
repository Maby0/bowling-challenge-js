class Scorecard {
  static startGame(name) {
    this.currentGame = new Scorecard(name);
    this.currentGame.frames.push(new Frame);
  }

  static currentGame;

  static bowl() {
    if (this._gameEnded()) {
      return `The game has ended. Your final score was ${this.currentGame.score()}.`
    }
  }

  static _gameEnded() {
    return this.currentGame.framesPlayed() === 10 && this.currentGame.frames[this.currentGame.frames.length - 1].frameFinished;
  }

  constructor(name) {
    this.name = name
    this.frames = []
  }

  score() {
    let frameScoring = this.frames.map(frame => frame.frameScore) 
    return frameScoring.reduce((a, b) => a + b);
  }

  nextFrame() {
    this.frames.push(new Frame);
  }

  framesPlayed() {
    return this.frames.length;
  }
}