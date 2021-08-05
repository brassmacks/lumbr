class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      log_in!(@user)
      # user jbuilder to pass user information to frontend
      render "/api/users/show"
    else 
      render json: ["Invalid username/password combination"], status: 401
    end
    
    def destroy 
      @user = current_user
      if @user
        log_out!
        render "api/users/show"
      else
        render json: ["Nobody signed in"], status: 404    
      end

    end

    def new
      render :new
    end
    
  end
end
