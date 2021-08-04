class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.string :follow_type, null: false
      t.integer :followed_id, null: false
      t.integer :follower_id, null: false
      
      t.timestamps
    end
  end
end
