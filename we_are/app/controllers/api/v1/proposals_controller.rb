class Api::V1::ProposalsController < Api::ApplicationController
  before_action :authenticate_user!
  before_action :find_proposal, only: [:show, :destroy, :update]

  def index
    @proposals = Proposal.order(created_at: :desc)
    render json: @proposals, each_serializer: ProposalSerializer
  end

  def show
    render json: @proposal
  end

  def create
    proposal = Proposal.new proposal_params
    proposal.post = current_post
    if proposal.save
      render json: proposal
    else
      render json: { error: proposal.errors.full_messages }
    end
  end

  def update
    if @proposal.update proposal_params
      render json: @proposal
    else
      render json: { error: @proposal.errors.full_messages }
    end
  end

  def destroy
    if @proposal.destroy
      render json: { message: 'Successfully deleted!!!' }
    else
      head :bad_request
    end
  end


  private

  def current_post
    @post = Post.find params.require(:post_id)
  end

  def find_proposal
    @proposal = Proposal.find params[:id]
  end

  def proposal_params
     params.require(:proposal).permit( :project_owner_id, :proposer_id , :ice_breaker)
  end
end
