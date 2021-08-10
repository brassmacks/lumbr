class AddBlogIdColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :blog_id, :integer
  end
end
