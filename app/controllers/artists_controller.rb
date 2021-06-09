class ArtistsController < ApplicationController
  
before_action :set_billboard
before_action :set_artist, only: [:show, :edit, :update, :destroy ]
  
  #read
  def index
    @artists = @billboard.artists
    render component: 'Artists', props: { artists: @artists, billboard: @billboard }
  end


  def show
    render component: 'Artist', props: { artist: @artist, billboard: @billboard }
  end

  def new
    @artist = @billboard.artists.new
    render component: "ArtistNew", props: { artist: @artist, billboard: @billboard }  
  end

  def create
    @artist = @billboard.artists.new(artist_params)
    if @artist.save
      redirect_to billboard_artists_path
      # redirect_to billboard_artists_path(@billboard)
      # redirect_to root_path
    else
      render component: "ArtistNew", props: { artist: @artist, billboard: @billboard }
    end
  end

  def edit
    render component: "ArtistEdit", props: { artist: @artist, billboard: @billboard }
  end

  def update
    if @artist.update(artist_params)
      # redirect_to [@billboard, @artist]
      redirect_to billboard_artists_path(@billboard)
      
    else
      render component: "ArtistEdit", props: { artist: @artist, billboard: @billboard }
    end
  end

  def destroy
    @artist.destroy
     # redirect_to [@billboard, @artist]
    redirect_to billboard_artists_path(@artist)
 
  end

  private
  def set_billboard
    @billboard = Billboard.find(params[:billboard_id])
  end

  def set_artist
    @artist = Artist.find(params[:id])
  end

  def artist_params
    params.require(:artist).permit( :name, :album )
  end

end

