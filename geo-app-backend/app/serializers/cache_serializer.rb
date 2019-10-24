class CacheSerializer < ActiveModel::Serializer
  attributes :id, :name, :size,  :average_difficulty, :average_rating, :creator, :description, :mystery, :hint, :warnings, :coordinates, :photo, :histories
end
