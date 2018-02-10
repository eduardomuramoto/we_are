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

ActiveRecord::Schema.define(version: 20180210205148) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chat_messages", force: :cascade do |t|
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.string "user_name"
  end

  create_table "company_profiles", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text "about"
    t.string "sector"
    t.text "address"
    t.string "city"
    t.string "state"
    t.string "country"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_company_profiles_on_user_id"
  end

  create_table "person_profiles", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.text "education"
    t.text "experience"
    t.text "skills"
    t.text "address"
    t.string "city"
    t.string "state"
    t.string "country"
    t.string "job_title"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_person_profiles_on_user_id"
  end

  create_table "pictures", force: :cascade do |t|
    t.integer "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photo_file_name"
    t.string "photo_content_type"
    t.integer "photo_file_size"
    t.datetime "photo_updated_at"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "executive_summary"
    t.text "product_details"
    t.text "project_description"
    t.text "market_sales"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "proposals", force: :cascade do |t|
    t.integer "project_owner_id"
    t.integer "proposer_id"
    t.bigint "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "ice_breaker"
    t.index ["post_id"], name: "index_proposals_on_post_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "company_profiles", "users"
  add_foreign_key "person_profiles", "users"
  add_foreign_key "posts", "users"
  add_foreign_key "proposals", "posts"
end
