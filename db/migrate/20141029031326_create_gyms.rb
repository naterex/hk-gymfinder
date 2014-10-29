class CreateGyms < ActiveRecord::Migration
  def change
    create_table :gyms do |t|
      t.string :brand
      t.string :branch
      t.string :territory
      t.string :district
      t.string :address
      t.string :telephone
      t.boolean :cardio
      t.boolean :crossfit
      t.boolean :free_weights
      t.boolean :group_studios
      t.boolean :machine_weights
      t.boolean :mma
      t.boolean :lounge
      t.boolean :pt
      t.boolean :spinning
      t.boolean :sauna
      t.boolean :steam
      t.boolean :spa
      t.boolean :pool
      t.boolean :yoga
      t.boolean :yoga_hot
      t.boolean :wifi
      t.boolean :clothes
      t.boolean :juice_bar
      t.integer :membership_monthly
      t.integer :membership_short
      t.integer :membership_long

      t.timestamps
    end
  end
end
