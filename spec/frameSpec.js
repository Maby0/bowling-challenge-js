describe('Frame', () => {
  describe('constructor', () => {
    it('following values are set upon initialisation', () => {
      let frame = new Frame;
      expect(frame.roll1).toEqual(null);
      expect(frame.roll2).toEqual(null);
      expect(frame.frameScore).toEqual(null);
      expect(frame.strike).toEqual(false);
      expect(frame.spare).toEqual(false);
      expect(frame.frameFinished).toEqual(false);
    })
  })

  // describe('bowl', () => {
  //   it('')
  // })
})