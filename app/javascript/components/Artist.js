import React from "react";

const Artist = ({ artist, billboard }) => {
  const { name } = artist;
  return (
    <>
      <div className="artist-card">
        <h1>{name}</h1>
        <h6>Billboard: {billboard.name}</h6>
        <a href={`/billboards`}>billboards</a>
        <a href={`/billboards/${billboard.id}`}>billboard show</a>
        <a href={`/artists/${artist.id}/songs`}>view songs</a>
      </div>
    </>
  );
};

export default Artist;