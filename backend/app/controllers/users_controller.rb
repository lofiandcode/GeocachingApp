class UsersController < ApplicationController
    def index
        @users = User.all
        render :json => @users
    end

    def show
        @user = Task.find(params[:id])
        render :json => @tasks
    end

    def new
        @task = Task.new
    end

    def create
        @task = Task.new(task_params)
        @task.save
        render :json => @task
    end

    def edit
        @task = Task.find(params[:id])
    end

    def update
        @task = Task.find(params[:id])
        @task.update(task_params)
        render :json => @task
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
    end 

    def task_params
        params.require(:task).permit(:id, :text, :state, :user_id, :task => {})
    end
end
