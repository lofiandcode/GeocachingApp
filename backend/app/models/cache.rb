class Cache < ApplicationRecord
    has_many :usercaches
    has_many :users, through: :usercaches
    serialize :coordinates
end
