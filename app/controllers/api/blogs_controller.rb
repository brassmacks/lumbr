class Api::BlogsController < ApplicationController
  
  def show
    @blog = Blog.find_by({ user_id: params[:user_id] })
    @user = User.find(params[:user_id])
    posts_by_user = Post.list_by_user(params[:user_id])
    @post_ids = posts_by_user[:post_ids].last(15)
    @posts = posts_by_user[:posts].last(15)
    
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
