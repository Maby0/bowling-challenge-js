require_relative './frame'

class Scorecard
  def self.start_game(name)
    @game = Scorecard.new(name)
    @game.frames << Frame.new
  end

  def self.current_game
    @game
  end

  attr_reader :name, :frames

  def initialize(name)
    @name = name
    @frames = []
  end

  def next_frame
    @frames << Frame.new
  end

  def frames_played
    @frames.count
  end
end
