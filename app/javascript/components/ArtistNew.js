import React from 'react';

const ArtistNew = ({ artist, billboard }) => {
  const { theme, id } = billboard;
  const { name, album, errors } = artist;
  const defaultName = name ? name : ""
  const defaultAlbum = album ? album : ""
  return (
    <>
      <h1>New Artist for {theme} !</h1>
      { errors && errors } 
   
      <form action={`/billboards/${id}/artists`} method="post">
        
        <input 
          type="text"
          required
          placeholder='Name'
          defaultValue={defaultName} 
          name="artist[name]"
          />
      
        <input
        type="text"
        placeholder='Album'
        defaultValue={defaultAlbum} 
        name="artist[album]"
         />
        
        <button type="submit">Add Artist</button>
      </form>
    </>
  )
}

export default ArtistNew;