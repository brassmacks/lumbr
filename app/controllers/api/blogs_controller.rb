class Api::BlogsController < ApplicationController
  
  def show
    @blog = Blog.find_by(user_id: params[:user_id])
    @posts = @blog.author.posts
    #not great ^
    
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
