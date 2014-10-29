json.array!(@schedules) do |schedule|
  json.extract! schedule, :id, :gym_id, :mon_open, :mon_close, :tues_open, :tues_close, :wed_open, :wed_close, :thu_open, :thu_close, :fri_open, :fri_close, :sat_open, :sat_close, :sun_open, :sun_close
  json.url schedule_url(schedule, format: :json)
end
