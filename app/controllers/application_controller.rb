class ApplicationController < ActionController::Base
  # make active before launch
  # protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :require_logged_in

  # and make sure to remove this
  skip_before_action :verify_authenticity_token
  
  def current_user 
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token
      (session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in!(user)
    session[:session_token] = user.session_token
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end
  
end
