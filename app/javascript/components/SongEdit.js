import React from 'react';

const SongEdit = ({ song, artist }) => {
  const { id } = billboard;
  const { name, album, artist_id} = artist;
  const { title } = song;
  const defaultTitle = Title ? Title : "";
  return (
    <>
      <h1>Edit Song!</h1>
      <form action={`billboards/artist/${id}/songs/${song.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Title</p>
        <input defaultValue={defaultName} name="song[title]" type="text" />
        <button type="submit">edit</button>
        <input type="hidden" name="_method" value="patch" />
        <p>Length</p>
        <input defaultValue={defaultLength} name="song[length]" type="text" />
        <button type="submit">edit</button>
      </form>
    </>
  );
};

export default SongEdit;