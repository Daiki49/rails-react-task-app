class TasksController < ApplicationController
  before_action :set_task, only: %i[show update destroy]

  def index
    tasks = Task.order(created_at: :desc)
    render json: tasks.as_json(only: %i[id title description priority due_date status created_at updated_at])
  end

  def show
    render json: @task.as_json(only: %i[id title description priority due_date status created_at updated_at])
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: task, status: :created
    else
      render json: { errors: task.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: { errors: @task.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @task.destroy
    head :no_content
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :description, :priority, :due_date, :status)
  end
end
