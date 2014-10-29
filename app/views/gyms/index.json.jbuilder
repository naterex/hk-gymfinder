json.array!(@gyms) do |gym|
  json.extract! gym, :id, :brand, :branch, :territory, :district, :address, :telephone, :cardio, :crossfit, :free_weights, :group_studios, :machine_weights, :mma, :lounge, :pt, :spinning, :sauna, :steam, :spa, :pool, :yoga, :yoga_hot, :wifi, :clothes, :juice_bar, :membership_monthly, :membership_short, :membership_long
  json.url gym_url(gym, format: :json)
end
