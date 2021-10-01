class Api::BlogsController < ApplicationController
  
  def show
    @user = User.find(params[:user_id])
    
    @blog = @user.blog
    posts = @user.posts
    @post_ids = posts.map { |post| post.id }
      
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
