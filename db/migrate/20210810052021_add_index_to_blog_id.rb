class AddIndexToBlogId < ActiveRecord::Migration[5.2]
  def change
    add_index :users, [:id, :blog_id], unique: true
  end
end
