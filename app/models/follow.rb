class Follow < ApplicationRecord
  validates :user_id, presence: true;

  belongs_to  :follower, foreign_key: :user_id, class_name: "User"

  has_one :followed_post, primary_key: :post, class_name: "Post"
  has_one :followed_tag, primary_key: :tag, class_name: "Tag"
  has_one :followed_user, foreign_key: :user, class_name: "User"
  
  # scope :user ->
  

  # def has_target()
  #   case self.follow_type
  #   when 'Post'
  #     @target = Post.find(self.content_id)
  #   when 'Tag'
  #     @target = Tag.find(self.content_id)
  #   when "User"
  #     @target = User.find(self.content_id)
  #   else
  #     errors.add(:follow_type, 'must be Post, Tag, or User')
  #   end
    
  # end




end
