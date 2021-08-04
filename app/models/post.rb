class Post < ApplicationRecord
  validates :title, :content_type, :user_id, presence: true

  has_one_attached :photo

  before_validation :set_content
  def set_content
    self.content_type ||= 'text'
    #remove after dev
    self.user_id ||= 1
  end


end
