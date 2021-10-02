class Scorecard {
  static startGame(name) {
    this.currentGame = new Scorecard(name);
    this.currentGame.frames.push(new Frame);
  }

  static currentGame;

  static bowl() {
    
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