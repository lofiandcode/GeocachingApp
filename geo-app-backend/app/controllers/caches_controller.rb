class CachesController < ApplicationController
    def index
        @caches = Cache.all
        render :json => @caches
    end

    def show
        @cache = Cache.find(params[:id])
        render :json => @cache
    end

    def new
        @cache = Cache.new
    end

    def create
        @cache = Cache.new(cache_params)
        @cache.save
        render :json => @cache
    end

    def edit
        @cache = Cache.find(params[:id])
    end

    def update
        @cache = Cache.find(params[:id])
        @cache.update(cache_params)
        render :json => @cache
    end

    def destroy
        @cache = Cache.find(params[:id])
        @cache.destroy
    end 

    def cache_params
        params.require(:cache).permit(:id, :name, :photo, :size, :mystery, :hint, :coordinates, :warnings, :description)
    end
end
