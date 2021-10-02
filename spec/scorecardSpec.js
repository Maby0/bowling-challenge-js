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

  describe('.startGame / .currentGame', () => {
    it('.startGame creates a new instance of Scorecard which is accessed via .currentGame', () => {
      Scorecard.startGame("Mabon")
      expect(Scorecard.currentGame).toBeInstanceOf(Scorecard);
    })
  })
})