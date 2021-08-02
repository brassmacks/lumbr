class Api::UsersController < ApplicationController

  def create 
    @user = User.new(user_params)

    if @user.save 
      log_in!(@user)
      render :users_show
    else 
      p @user.errors.full_messages
      render json: @user.errors.full_messages, status: 400
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
  #     render 200
  #     #isolate user/blog name to be added to current path
  #   end
  # end
  protected 
  def user_params
    self.params.require(:user).permit(:username, :password, :email)
  end
  
  
end
