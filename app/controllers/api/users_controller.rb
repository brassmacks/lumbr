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
    user = User.new(user_params)
    if user.username
      @user = User.find_by(username: params[:username])
      render json: @user
    elsif user.email
      @user = User.find_by(email: params[:email])
      render json: @user
    elsif user.id
      @user = User.find_by(id: params[:id])
      render json: @user
    else
      render json: "missing criteria",status: 406
    end

  end


  protected 

  def user_params
    self.params.permit(:id, :username, :password, :email)
  end
  
end
