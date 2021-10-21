# require 'open_uri'

class Api::PostsController < ApplicationController
  
  def show    
    @post = Post.find_by(params[:id])
    render :show
  end
  
  def index
    @posts = Post.last(15)
  end

  def of_blog
    @author = User.find(params[:id])
    @posts = @author.posts.last(10)
    render :index
  end

  def create 

    @post = Post.new({
      title: post_params[:title],
      content_type: post_params[:content_type],
      user_id: post_params[:user_id],
      body: post_params[:body] })
    @post._render_errors unless @post.save

    if post_params[:media]
      Post.new_from_params(@post.id, post_params[:media])
    end
    puts "haherehehrhehre"
    puts post_params
    #call create tags on tagstring
    render 'api/posts/show' 

  end

  def update
    p post_params
    puts post_params
    
    @post = Post.find(post_params[:id])

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render json: ['post deleted', params[:id]], status: 200
    else
      render json:@post.errors.full_messages, status: 422
    end
  end

  def post_params
    params.require(:post).permit(:post, :id, :title, :body, :content_type, :media, :media_attached, :user_id, :url, :tags, :linked_content_type)
  end

end
