class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
        t.belongs_to :user
        t.string :follow_type, null: false
        t.integer :content_id, null: false
        t.datetime :published_at
        
        t.timestamps
    end
  end
end
