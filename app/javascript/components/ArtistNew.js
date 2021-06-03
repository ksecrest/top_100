import React from 'react';

const ArtistNew = ({ artist, billboard }) => {
  const { id } = billboard;
  const { name, album, errors } = artist
  const defaultName = name ? name : ""
  const defaultAlbum = album ? album : ""
  return (
    <>
      <h1>New Artist!</h1>
      { errors && errors } 
      {/* if there are errors render errors, if not don't render anything */}
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
        required
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