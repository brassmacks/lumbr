class Api::BlogsController < ApplicationController
  
  def show
    # @user = User.find(params[:user_id])
    
    @blog = Blog.find_by({ user_id: params[:user_id] })
    @user = User.find(params[:user_id])
    @posts = Post.list_by_user(params[:user_id])[:post_ids].last(15)
      
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
