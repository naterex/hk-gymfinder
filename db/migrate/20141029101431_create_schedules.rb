class CreateSchedules < ActiveRecord::Migration
  def change
    create_table :schedules do |t|
      t.integer :gym_id
      t.string :mon_open
      t.string :mon_close
      t.string :tue_open
      t.string :tue_close
      t.string :wed_open
      t.string :wed_close
      t.string :thu_open
      t.string :thu_close
      t.string :fri_open
      t.string :fri_close
      t.string :sat_open
      t.string :sat_close
      t.string :sun_open
      t.string :sun_close

      t.timestamps
    end
  end
end
