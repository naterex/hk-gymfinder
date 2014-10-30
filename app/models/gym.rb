class Gym < ActiveRecord::Base
  has_one :schedule, dependent: :destroy
  accepts_nested_attributes_for :schedule, :allow_destroy => true
end
