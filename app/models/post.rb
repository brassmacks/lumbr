class Post < ApplicationRecord

  validates :title, :content_type, :user_id, presence: true
  
  # change following association to include, video, quote, or text
  has_one_attached :photo
  before_validation :set_content, :set_source
  # add blog validation 

  def set_content

    if self.photo.attached? 
      self.content_type = 'photo'
    else 
      self.content_type ||= 'text'
    end

  end

  def set_source
    self.source ||= User.find(:user_id).username 
  end
  

end
