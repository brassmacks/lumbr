class Post < ApplicationRecord

  validates :title, :content_type, :user_id, presence: true
  
  # change following association to include, video, quote, or text
  has_one_attached :photo
  has_one_attached :video
  belongs_to :author, foreign_key: :user_id, class_name: 'User'
  before_validation :set_content,
  #  :set_source
  # add blog validation 
  
  def set_content

    if self.photo.attached? 
      self.content_type = 'photo'
    elsif self.video.attached?
      self.content_type = 'video'
    else
      self.content_type ||= 'text'
    end

  end

  def set_source
    self.source ||= User.find(:user_id).username 
  end
  

end
