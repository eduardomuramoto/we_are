class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    p 'create'
    p params[:picture]
    @picture = Picture.new(photo: params[:picture])
    @picture.save
    p @picture.errors.full_messages
    render json: @picture
  end

  def post_params
     params.require(:post).permit( :title, :executive_summary,:product_details, :project_description, :market_sales,
        posts_attributes: [
          :id,
          :photo,
          :_destroy
        ])
  end
end
