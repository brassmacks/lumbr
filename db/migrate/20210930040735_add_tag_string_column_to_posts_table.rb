class AddTagStringColumnToPostsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :tags_as_string, :string
  end
end
