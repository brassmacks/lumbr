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
      redirect_to user_url
    end
    
    def destroy 
      log_out!
      redirect_to new_session_url
      ## define this
    end

    def new
      render :new
    end
    
  end
end
