class AddUserIdColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :user_id, :integer, foreign_key: true
    remove_column :blogs, :blogger_id
    
  end
end
