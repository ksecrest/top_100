import React from 'react';

const SongNew = ({ song, artist }) => {
  const { id } = artist
  const { title, errors } = song
  const defaultTitle = title ? title : ''

  return (
    <>
      <h1>New Song</h1>
      { errors && errors }
      <form action={`/artists/${id}/songs`} method="post">
        <input
          type="text"
          required
          placeholder='Title'
          defaultValue={defaultTitle}
          name="song[title]" 
        />
        
        <button type="submit">Add Song</button>
      </form>
    </>
  )
}

export default SongNew;