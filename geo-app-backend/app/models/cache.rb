class Cache < ApplicationRecord
    has_many :histories
    has_many :users, through: :histories
    serialize :coordinates
end
