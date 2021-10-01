# require 'open_uri'

class Api::PostsController < ApplicationController
  
  def show    
    @post = Post.find_by(params[:id])
    render :show
  end
  
  def index
    @posts = Post.last(10)
  end
  
  def create 
    # REFACTOR 
    # build Post instance base as part of params
    @post = Post.new({
      title: post_params[:title],
      content_type: post_params[:content_type],
      user_id: post_params[:user_id],
      body: post_params[:body] })
    
      # MUST RETURN POST INSTANCE OR ERRORS
    @post._render_errors unless @post.save

    if post_params[:media]
      Post.new_from_params(@post.id, post_params[:media])
    end

    #call create tags on tagstring
    render 'api/post/show' 

  end

  def update

    puts post_params
    @post = Post.find(post_params[:id].to_i)

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.follows
    if @post.destroy
      render :show
    else
      render json:@post.errors.full_messages, status: 422
    end
  end

  def post_params
    params.require(:post).permit(:id, :title, :body, :content_type, :media, :media_attached, :user_id, :url, :tags, :linked_content_type)
  end

end
