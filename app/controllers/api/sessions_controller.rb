class Api::SessionsController < ApplicationController
  
  def create
    p params[:user]
    puts "here"
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    puts @user
    if @user
      log_in!(@user)
      render "/api/users/show"
    else 
      render json: ["Invalid email/password combination"], status: 401
    end
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

  def session_params
    params.require(:user).permit(:id, :email, :username, :password)
  end
end
