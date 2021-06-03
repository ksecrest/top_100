

import React from 'react';

const Songs = ({ artist, songs }) => {
  // const { id } = billboard;
  const { name, id } = artist;
  return (
    <>
      <h1>Songs of {name}</h1>
      <a href={`/artists/${id}`}>back to artist</a>
      <br />
      {/* /billboards/:billboard_id/artists(.:format) */}
      {/* <a href={`/billboards/${id}/artists`}>Back to artists</a>
        <br /> */}
    
      <a href={`/artists/${id}/songs/new`}>Add New Song</a>
      <br />
      {songs.map((song) => (
          <div>
            <h3>{song.title}</h3>
            {/* /artists/:artist_id/songs/:id(.:format) */}
            <a href={`/artists/${id}/songs/song.id`}>Show Song</a>

            {' '}
            {/* /artists/:artist_id/songs/:id/edit(.:format) */}
            <a href={`/artists/${id}/songs/song.id/edit`}>Edit Song</a>
            {' '}
            {/* /artists/:artist_id/songs/:id(.:format) */}
            <a href={`/artists/${id}/songs/song.id/`} data-method="delete">Delete Song</a>
          </div>
      ))}
    </>
  );
};

export default Songs;