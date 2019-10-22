class UserCache < ApplicationRecord
    belongs_to :user
    belongs_to :cache
end
