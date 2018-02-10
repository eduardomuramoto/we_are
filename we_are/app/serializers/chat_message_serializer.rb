class ChatMessageSerializer < ActiveModel::Serializer
attributes :id, :content, :proposal_id, :user_id, :user_name, :created_at


  def created_at
    object.created_at.strftime('%H:%M')
  end
end
