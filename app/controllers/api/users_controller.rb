class Api::UsersController < ApplicationController

  def create 
    @user = User.new(user_params)
    @blog = Blog.new(url: user_params.username, blogger_id: user_params.id)
    
    if @user.save && @blog.save
      log_in!(@user)
      # redirect to @blog.show
      render 'api/users/show'
    else 
      render json: { 
        user_errors: @user.errors.full_messages,
        blog_errors: @blog.errors.full_messages 
        }, status: 400
    end
  end
  
  def show
    @user = User.find_by(username: params[:username])
    render json: @user.username   
  end


  protected 

  def user_params
    self.params.require(:user).permit(:username, :password, :email)
  end
  
end
