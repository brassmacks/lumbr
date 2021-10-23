class PostsTag < ApplicationRecord

validates :tag_id, :post_id, presence: true
belongs_to :post
belongs_to :tag, inverse_of: :PostsTag

find_or_create_by(tag_id: tag_id, post_id: post_id) 
    
end
