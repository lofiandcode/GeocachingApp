class Cache < ApplicationRecord
    has_many :histories
    has_many :users, through: :histories
    serialize :coordinates

    def average_rating
        ratings = histories.map {|history| history.rating}
        ratings.inject{ |sum, el| sum + el }.to_f / ratings.length
    end

    def average_difficulty
        difficulties = histories.map {|history| history.difficulty}
        difficulties.inject{ |sum, el| sum + el }.to_f / difficulties.length
    end

    def creator
        creator = ""
        histories.each do |history|
            if history.created == true
                creator = history.user.username
                break
            end
        end
        creator
    end

    def reviewer
        # reviewer = ""
        # histories.map do |history|
        #     if history.id
        #     reviewer = history.user.username
        # end
        # reviewer
        
        # histories.user_id == histories.user.id
        # return histories.user.username

        reviwer = ""
        histories.map do |cache_history|
            sought_user = User.find(cache_history.user_id)
            if cache_history.user_id == sought_user.id
                reviewer = [cache_history.id, sought_user.username]
            end
        end
    end
end