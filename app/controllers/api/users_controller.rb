class Api::UsersController < ApplicationController

  def create 
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render 'api/users/show'
    else 
      render json: { 
        user_errors: @user.errors.full_messages,
        blog_errors: @blog.errors.full_messages 
        }, status: 400
    end
  end
  
  def show
    case params[:type]
      @user = User.find(params[:id])
      when 'show'
        render json: @user
      when 'blog'
        render 'api/users/'

    @user = User.find_by_missing_params(user_params)
    render json: @user
      
    
    else
      render json: "missing criteria",status: 406
    end

  end

  protected 

  def user_params
    params.require(:user).permit(:id, :username, :password, :email, :type)
  end
  
end
