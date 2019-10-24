class History < ApplicationRecord
  belongs_to :user
  belongs_to :cache

  def reviewer
    return 0
    # History.all.each do |history|
    #   reviewer = history.id
    # end
  end

end
