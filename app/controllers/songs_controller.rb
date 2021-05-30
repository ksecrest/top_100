class SongsController < ApplicationController
  #crud, create, read, update, delete, first
  


before_action :set_artist
before_action :set_song, only: [:show, :update, :destroy]
#crud
#read

  def index
    @songs = @artist.songs
    render component: "Songs", props: {artist: @artist, songs: @songs}
  end

  def show
    #grabs individual
    render component: "Song", props: {artist: @artist, song: @song}
  end

#create
  def new
    @song = @artist.songs.new
    render component: "SongNew", props: {artist: @artist, song: @song}
  end

  def create
    @song = @artist.songs.new(song_params)
    if @song.save
      redirect_to [@artist, @song]
    else
     render component: "SongNew", props: {artist: @artist, song: @song} 
    end
  end

  #update
  def edit
    render component: "SongEdit", props: {artist: @artist, song: @song}
  end
  
  def update
    if @song.update(song_params)
      redirect_to [@artist, @song]
    else
      render component: "SongEdit", props: {artist: @artist, song: @song}
    end
  end
#delete
  def destroy
    @song.destroy
    redirect_to artist_songs_path(@artist)
  end

  private 

  def set_artist
    @artist = Artist.find(params[:artist_id])
  end

  def set_song
    @song = Song.find(params[:artist_id])
  end

  def song_params
    params.require(:song).permit(:title, :length)
  end
end