class Api::UsersController < ApplicationController

  def create 
    @user = User.new(user_params)

    if @user.save 
      log_in!(@user)
      render json: @user
    else 
      render json: @user.errors.full_messages
    end
  end

  def new
    # @user = User.new
    # dummy user 
    render :new
  end

  # def show
  #   if current_user.nil?
  #     # route to explore page
  #   else
  #     @user = current_user
  #     render: json: @user.username
  #     #isolate user/blog name to be added to current path
  #   end
  # end
  protected 
  def user_params
    self.params.require(:user).permit(:username, :password)
  end
  
  
end
