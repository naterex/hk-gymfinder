# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141029031326) do

  create_table "gyms", force: true do |t|
    t.string   "brand"
    t.string   "branch"
    t.string   "territory"
    t.string   "district"
    t.string   "address"
    t.string   "telephone"
    t.boolean  "cardio"
    t.boolean  "crossfit"
    t.boolean  "free_weights"
    t.boolean  "group_studios"
    t.boolean  "machine_weights"
    t.boolean  "mma"
    t.boolean  "lounge"
    t.boolean  "pt"
    t.boolean  "spinning"
    t.boolean  "sauna"
    t.boolean  "steam"
    t.boolean  "spa"
    t.boolean  "pool"
    t.boolean  "yoga"
    t.boolean  "yoga_hot"
    t.boolean  "wifi"
    t.boolean  "clothes"
    t.boolean  "juice_bar"
    t.integer  "membership_monthly"
    t.integer  "membership_short"
    t.integer  "membership_long"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
