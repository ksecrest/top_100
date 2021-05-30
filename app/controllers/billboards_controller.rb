class BillboardsController < ApplicationController

before_action :set_billboard, only: [:show, :update, :edit, :destroy]
  def index
    @billboards = Billboard.all
    render component: 'Billboards', props:{billboards: @billboards}
  end

  def show
    render component: 'Billboard', props: {billboard: @billboard}
  end

  def new
    @billboard = Billboard.new
    render component: 'BillboardNew', props: {billboard: @billboard}
  end

  def create
    @billboard = Billboard.new(billboard_params)
    if @billboard.save

  def edit
  end
end
