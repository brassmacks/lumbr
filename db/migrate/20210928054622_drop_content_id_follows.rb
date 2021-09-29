class DropContentIdFollows < ActiveRecord::Migration[5.2]
  def change
    remove_column :follows, :content_id
  end
end
