class Api::V1::CompanyProfilesController < Api::ApplicationController
  before_action :authenticate_user!
  before_action :find_company_profile, only: [:show, :destroy, :update]

  def index
    @company_profiles = CompanyProfile.order(created_at: :desc)
    render json: @company_profiles, each_serializer: TravelSerializer
  end

  def show
    render json: @company_profile
  end

  def create
    company_profile = CompanyProfile.new company_profile_params
    company_profile.user = current_user

    if company_profile.save
      render json: company_profile
    else
      render json: { error: company_profile.errors.full_messages }
    end
  end

  def update
    if @company_profile.update company_profile_params
      render json: @company_profile
    else
      render json: { error: @company_profile.errors.full_messages }
    end
  end

  def destroy
    if @company_profile.destroy
      render json: { message: 'Successfully deleted!!!' }
    else
      head :bad_request
    end
  end


  private

  def find_company_profile
    @company_profile = CompanyProfile.find params[:id]
  end

  def company_profile_params
     params.require(:company_profile).permit( :name, :email, :about, :sector, :address,
       :city, :state, :country)
  end
end
