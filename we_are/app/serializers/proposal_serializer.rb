class ProposalSerializer < ActiveModel::Serializer
attributes :id, :project_owner_id, :proposer_id , :ice_breaker, :proposer_is_company, :proposer_profile_id, :proposer_name

end
