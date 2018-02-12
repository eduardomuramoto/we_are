class Api::V1::PersonProfilesController < Api::ApplicationController
  before_action :authenticate_user!
  before_action :find_person_profile, only: [:show, :destroy, :update]

  def index
    @person_profiles = PersonProfile.order(created_at: :desc)
    render json: @person_profiles, each_serializer: PersonProfileSerializer
  end

  def show
    render json: @person_profile
  end

  def create
    person_profile = PersonProfile.new person_profile_params
    person_profile.user = current_user

    if person_profile.save
      render json: person_profile
    else
      render json: { error: person_profile.errors.full_messages }
    end
  end

  def update
    if @person_profile.update person_profile_params
      render json: @person_profile
    else
      render json: { error: @person_profile.errors.full_messages }
    end
  end

  def destroy
    if @person_profile.destroy
      render json: { message: 'Successfully deleted!!!' }
    else
      head :bad_request
    end
  end


  private

  def find_person_profile
    @person_profile = PersonProfile.find params[:id]
  end

  def person_profile_params
     params.require(:person_profile).permit( :first_name, :last_name, :email, :portfolio, :linkedin, :education, :experience, :skills, :address,
       :city, :state, :country, :job_title)
  end
end
