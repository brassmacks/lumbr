class CreateJoinTavle < ActiveRecord::Migration[5.2]
  def change
    create_join_table :tags, :posts do |t|
      t.index :tag_id
      t.index :post_id
    end
  end
end
