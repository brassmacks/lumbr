class Tag < ApplicationRecord
  validates :tag_content, :tag_content_id, presence: true
  validates :tag_content, uniqueness: true
  has_many :tagged


end
