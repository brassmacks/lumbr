class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :tag_id, :integer, foreign_key: true
  end
end
