import React from "react";

const Song = ({ song, artist }) => {
  const { title } = song;
  return (
    <>
      <div className="song-card">
        <h1>{title}</h1>
        <h6>Artist: {artist.name}</h6>
        <a href={`/billboards`}>billboards</a>
        <a href={`/billboards/${billboard.id}`}>billboard show</a>
        <a href={`/billboards/artists`}>artists</a>
        <a href={`/billboards/artists/${artist.id}`}>artist show</a>
        <a href={`/artists/${artist.id}/songs`}>view songs</a>
      </div>
    </>
  );
};

export default Artist;