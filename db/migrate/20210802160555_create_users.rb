class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string "username", null: false, unique: true, index: true
      t.string "email", null: false

      t.string "password_digest", null: false
      t.string "session_token", null: false, index: true, unique: true

      t.datetime "create_at", null: false
      t.datetime "updated_at", null: false
    end
  end
end
