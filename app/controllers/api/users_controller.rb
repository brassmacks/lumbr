class Api::UsersController < ApplicationController

  def create 
    
    @user = User.new(user_params)
    
    if @user.save
      log_in!(@user)
      render 'api/users/show'
    else 
      render json: { 
        #style this v
        user_errors: @user.errors.full_messages
        }, status: 400
    end
  end
  
  def show
    @user = User.find(params[:id])
    if @user
        # TEST
        # render json: @user
      else
        render json: "missing criteria",status: 406
      end
  end
    
  def follows
    # TEST CONSIDER BREAKING INTO PARTS FOR ERROR CLARITY
    @follows = User.find(params[:id]).follows
    if @follows.save
      render json: 'api/follows'
    else 
      render json: {
        follows_errors:
        { msg: "no follows found", 
          err: @follows.errors.full_messages
        }}
    end
  end

  def followers
    @followers = User.find(params[:id]).followers
    if @follows.save
      render json: 'api/followers'
    else 
      render json: {
        follows_errors:
        { msg: "no followers found", 
          err: @follows.errors.full_messages
        }}
    end
  end
  
  def new_follow
    @user = User.find(params[:id])
    @follow = @User.follows.new(user_params[:content])
    if @follow.save
        #render updated follows to state
    else
      render json: {
        user_errors: @user.errors.full_messages,
        follow_errors: @follow.errors.full_messages
      }
    end

  end

  def unfollow
    
  end
  
  protected 

  def user_params
    params.require(:user).permit(:id, :username, :password, :email, :content)
  end
  
end
