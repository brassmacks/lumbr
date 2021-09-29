class PostsTag < ApplicationRecord

validates :tag_id, :post_id, presence: true
belongs_to :post
belongs_to :tag, inverse_of: :PostsTag

has_many :receive_follows, foreign_key: :tag, class_name: 'Follow'
has_many :followers, through: :receive_follows, source: :follower
  

end
