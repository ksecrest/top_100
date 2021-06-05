import React from 'react';

const Song = ({ artist, song }) => {
  const { name, album, id } = artist;
  return (
    <>
      <div className="song-card">
        <h1>{ song.title}</h1>
        <h6>Artist: { name } {album} </h6>
        {/* <a href={`/bill`}>billboards</a>
        <a href={`/billboards/${billboard.id}`}>billboard show</a>
        <a href={`/billboards/artists`}>artists</a>
        <a href={`/billboards/artists/${id}`}>artist show</a> */}
        <a href={`/artists/${id}/songs`}>view songs</a>
      </div>
    </>
  );
};

export default Song;