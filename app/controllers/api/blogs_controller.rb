class Api::BlogsController < ApplicationController
  
  def show
    @user = User.find(params[:user_id])
    @blog = @user.blog
    @posts = @user.posts.with_attached_photo
    #not great ^ Slightlybetter
    
    if @blog
      render :show
    else 
      render @blog.errors.full_messages
    end
  end
  
  def blog_params
    params.require(:blog).permit(:id, :user_id, :url)
  end

end
