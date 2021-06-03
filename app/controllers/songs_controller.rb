class SongsController < ApplicationController
  #crud, create, read, update, delete, first
  


before_action :set_artist
before_action :set_song, only: [:show, :edit, :update, :destroy]
#crud
#read

  def index
    @songs = @artist.songs
    render component: "Songs", props: { songs: @songs, artist: @artist }
  end

  def show
    #grabs individual
    render component: "Song", props: { song: @song, artist: @artist }
  end

#create/post
  def new
    @song = @artist.songs.new
    render component: "SongNew", props: { song: @song, artist: @artist }
  end

  def create
    @song = @artist.songs.new(song_params)
    if @song.save
      redirect_to [@artist, @song]
      # redirect_to artist_songs_path(@artist)
    else
     render component: "SongNew", props: {song: @song, artist: @artist } 
    end
  end

  #update
  def edit
    render component: "SongEdit", props: { song: @song, artist: @artist }
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
    @song = Song.find(params[:id])
  end

  def song_params
    params.require(:song).permit(:title, :length)
  end
end