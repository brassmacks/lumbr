class Api::TagsController < ApplicationController

  
  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render 'api/tags/show'
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def show
    @tag = Tag.find(params[:tag_content])
    
  end

  def index
    @tags = Tag.all 
  end

  def tag_params 
    params.require(:tag).permit(:tag_content, :id, :tag_content_id) 
  end
  
end
