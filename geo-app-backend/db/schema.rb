# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_23_015512) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "caches", force: :cascade do |t|
    t.string "name"
    t.string "photo"
    t.string "size"
    t.text "mystery"
    t.string "hint"
    t.text "coordinates"
    t.text "warnings"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_caches", force: :cascade do |t|
    t.boolean "created"
    t.boolean "favorite"
    t.boolean "to_do"
    t.boolean "done"
    t.integer "difficulty"
    t.integer "rating"
    t.text "comment"
    t.bigint "user_id", null: false
    t.bigint "cache_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cache_id"], name: "index_user_caches_on_cache_id"
    t.index ["user_id"], name: "index_user_caches_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.text "bio"
    t.string "photo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "user_caches", "caches", column: "cache_id"
  add_foreign_key "user_caches", "users"
end
