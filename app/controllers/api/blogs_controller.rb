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
  
  def feed
    @blogs = []
    @posts = []
    list = blog_params[:user_ids]

    list.each do |id| 

      blog = Blog.find_by({ user_id: id })
      posts = User.find(id).posts 
      post_list = posts.map { |post| post.id } if posts
      @blogs.push([blog, post_list]) if blog 
      @posts += posts.last(5) if posts
      
    end

    if @posts.length >= 1 || @blogs.length >=1
      render :feed
    else 
      render json: {
        post_ERR: @posts.errors.full_messages,
        blog_ERR: @blogs.errors.full_messages
      }, status: 422

    end

      
  end

  def blog_params
    params.require(:blog).permit(:id, :user_id, :url, :user_ids => [])
  end

end
