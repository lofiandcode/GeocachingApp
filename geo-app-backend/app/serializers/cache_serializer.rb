class CacheSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo, :size, :mystery, :hint, :coordinates, :warnings, :description, :users
end
