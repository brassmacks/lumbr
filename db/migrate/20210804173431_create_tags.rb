class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :tag_content_id, null: false, unique: true
      t.string :tag_content 
       
      t.timestamps
    end
  end
end
