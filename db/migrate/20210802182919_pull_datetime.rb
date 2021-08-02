class PullDatetime < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :create_at
    remove_column :users, :updated_at

  end
end
