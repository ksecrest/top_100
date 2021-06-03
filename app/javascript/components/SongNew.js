import React from 'react';

const SongNew = ({ song, artist }) => {
  const { id } = billboard;
  const { name, album, artist_id } = artist;
  const { title, length } = song;
  const defaultName = name ? name : "";
  const defaultTitle = title ? title : "";
  return (
    <>
      <h1>New Song!</h1>
      <form action={`/billboards/artists/${id}/songs`} method="post">
        <p>Title</p>
        <input defaultValue={defaultName} name="song[title]" type="text" />
        <p>Length</p>
        <input defaultValue={defaultLength} name="song[length]" type="text" />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default SongNew;