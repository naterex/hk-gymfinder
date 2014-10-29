class Gym < ActiveRecord::Base
  has_one :schedule, dependent: :destroy
end
