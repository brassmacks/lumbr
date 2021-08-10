class ApplicationController < ActionController::Base

  # make active before launch
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_logged_in
  before_action :underscore_params!
  
  #remove this
  skip_before_action :verify_authenticity_token
  
  def current_user 
    return nil unless self.session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in!(user)
    session[:session_token] = user.session_token
  end

  def log_out!
    current_user.reset_session_token()
    session[:session_token] = nil
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end
  
  
  # def underscore_params!
  #   underscore_hash = -> (hash) do
    
  #     hash.transform_keys!(&:underscore)
  #     hash.each do |key, value|
      
  #       if value.is_a?(ActionController::Parameters)
  #         underscore_hash.call(value)
        
  #       elsif value.is_a?(Array)
  #         value.each do |item|
  #           next unless item.is_a?(ActionController::Parameters)
  #           underscore_hash.call(item)
  #         end
  #       end
  #     end
    
  #   end
  #   underscore_hash.call(params)
  # end

end
