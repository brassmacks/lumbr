class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :tags, :tag_id, :integer
  end
end
