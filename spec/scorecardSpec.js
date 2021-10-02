describe('Scorecard', () => {
  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard("Mabon");
  })

  describe ('constructor', () => {
    it('has a name value upon initialisation', () => {
      expect(scorecard.name).toEqual("Mabon");
    })

    it('has an empty array of frames upon initialisation', () => {
      expect(scorecard.frames).toEqual([])
    })
  })
})