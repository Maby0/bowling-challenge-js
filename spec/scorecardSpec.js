describe('Scorecard', () => {
  let scorecard;

  describe('constructor', () => {
    beforeEach(() => {
      scorecard = new Scorecard("Mabon");
    })

    it('has a name value upon initialisation', () => {
      expect(scorecard.name).toEqual("Mabon");
    })

    it('has an empty array of frames upon initialisation', () => {
      expect(scorecard.frames).toEqual([])
    })
  })

  describe('score', () => {
    it('returns total running score', () => {
      frame = new Frame;
      frame.frameScore = 5;
      scorecard = new Scorecard("Mabon");
      scorecard.frames.push(frame);
      expect(scorecard.score()).toEqual(5);
    })
  })

  describe('nextFrame', () => {
    it('adds a frame to frames property', () => {
      scorecard = new Scorecard("Mabon");
      scorecard.nextFrame();
      expect(scorecard.frames.length).toEqual(1);
    })
  })

  describe('framesPlayer', () => {
    it('returns the number of frames played', () => {
      scorecard = new Scorecard("Mabon");
      for (let i = 0; i < 4; i++) {
        scorecard.nextFrame();
      }
      expect(scorecard.framesPlayed()).toEqual(4);
    })
  })

  describe('.startGame / .currentGame', () => {
    it('.startGame creates a new instance of Scorecard which is accessed via .currentGame', () => {
      Scorecard.startGame("Mabon")
      expect(Scorecard.currentGame).toBeInstanceOf(Scorecard);
      expect(Scorecard.currentGame.name).toEqual("Mabon");
      expect(Scorecard.currentGame.frames.length).toEqual(1);
    })
  })
})