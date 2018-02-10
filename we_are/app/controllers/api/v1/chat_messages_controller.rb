class Api::V1::ChatMessagesController < Api::ApplicationController
  before_action :authenticate_user!
  def index
    @chatLog = ChatMessage.order(created_at: :asc)
    render json: @chatLog, each_serializer: ChatMessageSerializer
  end
end
