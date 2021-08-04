class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :url, null: false, unique: true
      t.integer :blogger_id, null: false, unique: true
      t.integer :profile_photo_id, null: false
      t.integer :backsplach_id
      
      t.timestamps
    end
  end
end
