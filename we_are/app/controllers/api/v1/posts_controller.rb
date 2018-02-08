class Api::V1::PostsController < Api::ApplicationController
  before_action :authenticate_user!
  before_action :find_post, only: [:show, :destroy, :update]

  def index
    @posts = Post.order(created_at: :desc)
    render json: @posts, each_serializer: PostSerializer
  end

  def show
    render json: @post
  end

  def create
    post = Post.new post_params
    post.user = current_user

    if post.save
      render json: post
    else
      render json: { error: post.errors.full_messages }
    end
  end

  def update
    if @post.update post_params
      render json: @post
    else
      render json: { error: @post.errors.full_messages }
    end
  end

  def destroy
    if @post.destroy
      render json: { message: 'Successfully deleted!!!' }
    else
      head :bad_request
    end
  end


  private

  def find_post
    @post = Post.find params[:id]
  end

  def post_params
     params.require(:post).permit( :first_name, :last_name, :email, :education, :experience, :skills, :address,
       :city, :state, :country, :job_title)
  end
end
