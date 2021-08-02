class AddTimestamps < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :users, null: false, default: -> { 'NOW()' }
  end
end
