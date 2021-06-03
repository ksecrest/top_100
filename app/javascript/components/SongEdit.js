import React from 'react';

const SongEdit = ({ song, artist }) => {
  const {id} = artist;
  const { title } = song;
  const defaultTitle = title ? title : "";
  return (
    <>
      <h1>Edit Song!</h1>
      <form action={`/artist/${id}/songs/${song.id}`} method="post">
      <input type="hidden" name="_method" value="patch" />
      <p>Name</p>
      <input
          type="text"
          required
          placeholder='Title'
          defaultValue={defaultTitle}
          name="song[title]" 
        />

       
        
        <button type="submit">edit</button>
       
        
      </form>
    </>
  );
};

export default SongEdit;