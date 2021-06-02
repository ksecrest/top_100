class BillboardsController < ApplicationController

before_action :set_billboard, only: [:show, :update, :edit, :destroy]
  #new index page 

  # def index
  #   render component: "testing"
  # end
  def index
    @billboards = Billboard.all
    render component: 'Billboards', props: {billboards: @billboards}
  end
# new show page
  def show
    render component: 'Billboard', props: { billboard: @billboard}
  end
# new new page
  def new
    @billboard = Billboard.new
    render component: 'BillboardNew', props: { billboard: @billboard}
  end

  def create
    @billboard = Billboard.new(billboard_params)
    if @billboard.save
      redirect_to root_path
    else 
      render component: 'BillboardNew', props: { billboard: @billboard}
    end
  end
# new edit page
  def edit
    render component: 'BillboardEdit', props: { billboard: @billboard }
  end

  def update
    if @billboard.update(billboard_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @billboard.destroy
    redirect_to root_path
  end

  private
  def set_billboard
    @billboard = Billboard.find(params[:id])
  end

  def billboard_params
    params.require(:billboard).permit( :theme )
  end

end
