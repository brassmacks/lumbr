class User < ApplicationRecord
  attr_reader :password, :blog_id
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_one_attached :profile_photo
  before_validation :ensure_session_token
  after_create :create_blog

  has_many :posts
  has_one :blog

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.find_by_missing_params(params)
    user_dup = User.new(user_params)

    case user_dup
      when user_dup.id
        return @user = User.find(user_dup.id)
      when user_dup.username
        return @user = User.find_by(username: user_dup.username)
      when user_dup.email
        return @user = User.find_by(email: user_dup.email)
      else
        nil
    end

  end

  def create_blog()
    unless self.blog_id 
      self.blog = Blog.create(
        url: (self.username),
        author: self, user_id: self.id)
      self.save
      return self.errors.full_messages if self.errors
    end
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token()
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token()
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
