class Api::UsersController < ApplicationController

  def create 
    @user = User.new(user_params)

    if @user.save 
      log_in!(@user)
      render 'api/users/show'
    else 
      
      render json: @user.errors.full_messages, status: 400
    end
  end

  protected 

  def user_params
    self.params.require(:user).permit(:username, :password, :email)
  end
  
end
