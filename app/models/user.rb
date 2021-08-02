class User < ApplicationRecord
  attr_reader :password
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  # def email_default()
  #   self.email ||= 'default@ithinkthiswillwork.com'
  # end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    # route to error message 
    user.is_password?(password) ? user : nil
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
    #evaluate whether implementation requires the active return of token
    # or if it can just be recalled from current user
  end

  def ensure_session_token()
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
