class Tag < ApplicationRecord
  validates :tag_content, :tag_content_id, presence: true
  validates :tag_content, uniqueness: true

  has_many :PostsTags
  has_many :posts, through: :PostsTags
  





  # find tagged posts
  # find tags of post
  
end
