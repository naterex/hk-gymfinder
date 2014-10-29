class WelcomeController < ApplicationController

  def index
    @gyms = Gym.all
  end

  def privacy
  end

  def terms
  end

end
