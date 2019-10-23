class HistoriesController < ApplicationController
    def index
        @histories = History.all
        render :json => @histories
    end

    # def show
    #     @user_cache = History.find(params[:id])
    #     render :json => @user_cache
    # end

    # def new
    #     @user_cache = UserCache.new
    # end

    # def create
    #     @user_cache = UserCache.new(usercache_params)
    #     @user_cache.save
    #     render :json => @user_cache
    # end

    # def edit
    #     @user = UserCache.find(params[:id])
    # end

    # def update
    #     @user_cache = UserCache.find(params[:id])
    #     @user_cache.update(usercache_params)
    #     render :json => @user_cache
    # end

    # def destroy
    #     @user_cache = UserCache.find(params[:id])
    #     @user_cache.destroy
    # end 

    # def usercache_params
    #     params.require(:usercache).permit(:id, :created, :favorite, :to_do, :done, :difficulty, :rating, :comment, :user_id, :cache_id)
    # end
end
