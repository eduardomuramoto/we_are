class Api::ApplicationController < ApplicationController
  skip_before_action :verify_authenticity_token

  def user_signed_in?
    current_user.present?
  end
  helper_method :user_signed_in?

  def current_user
    token_type, token = request.headers["AUTHORIZATION"]&.split(" ") || []

    case token_type&.downcase
    when 'api_key'
      @user ||= User.find_by(api_key: token)
    when 'jwt'
      begin
        payload = JWT.decode(
          token,
          Rails.application.secrets.secret_key_base
        )&.first
        @user ||= User.find(payload["id"])
      rescue JWT::DecodeError => error
        nil
      end
    end
  end
  helper_method :current_user

  private
  def api_key
    request.headers['AUTHORIZATION']
  end

  def authenticate_user!
    head :unauthorized unless current_user.present?
  end
end
