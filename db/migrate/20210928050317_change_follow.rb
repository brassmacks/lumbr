class ChangeFollow < ActiveRecord::Migration[5.2]
  def change
    remove_column :follows, :follow_type
  end
end
