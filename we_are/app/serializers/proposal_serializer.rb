class ProposalSerializer < ActiveModel::Serializer
attributes :id, :project_owner_id, :proposer_id, :ice_breaker

end
