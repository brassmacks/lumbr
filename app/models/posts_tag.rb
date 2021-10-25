class PostsTag < ApplicationRecord

validates :tag_id, :post_id, presence: true
belongs_to :post
belongs_to :tag, inverse_of: :PostsTag


