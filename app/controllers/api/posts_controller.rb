class Api::PostsController < ApplicationController
  
  def show    
    @post = Post.find_by(params[:id])
    render :show
  end
  
  def index
    @posts = Post.all
  end

  def create 
    @post = Post.new(post_params)
    
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render :show
    else
      render json:@post.errors.full_messages, status: 422
    end
  end

  def post_params
    params.require(:post).permit(:title, :body, :content_type, :photo, :user_id, :photo_file)
  end

end
