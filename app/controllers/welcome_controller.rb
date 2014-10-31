class WelcomeController < ApplicationController

  def index
    @gyms = Gym.all
    @schedules = Schedule.all
  end

  def privacy
  end

  def terms
  end

end
