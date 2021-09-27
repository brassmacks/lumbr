class Follow < ApplicationRecord
  validates :follow_type, :inclusion => { :in => [Post, User, Tag] }
  validates :content_id, presence: true;

  attr_reader :target


  belongs_to :users


  def has_target()
    case self.follow_type
    when 'Post'
      @target = Post.find(self.content_id)
    when 'Tag'
      @target = Tag.find(self.content_id)
    when "User"
      @target = User.find(self.content_id)
    else
      errors.add(:follow_type, 'must be Post, Tag, or User')
    end
    
  end




end
