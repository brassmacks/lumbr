class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user.nil?
      render :new
    else 
      log_in!(@user)
      # p current_user
      render 'static_pages/root'
    end
    
    def destroy 
      if current_user != nil
        log_out!
        render 'static_pages/root'
      else
        # p 'here'
        # render ''
      end
      # redirect_to new_session_url
      ## define this
    end

    def new
      render :new
    end
    
  end
end
