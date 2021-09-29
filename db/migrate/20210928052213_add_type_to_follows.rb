class AddTypeToFollows < ActiveRecord::Migration[5.2]
  def change
    add_column :follows, :user, :integer
    add_column :follows, :post, :integer
    add_column :follows, :tag, :integer
  end
end
