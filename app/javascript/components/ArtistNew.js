import React from "react";

const ArtistNew = ({ artist, billboard }) => {
  const { id } = billboard;
  const { name, album } = artist
  const defaultName = name ? name : "";
  const defaultAlbum = album ? album : "";
  return (
    <>
      <h1>New Artist!</h1>
      { errors && errors }
      <form action={`/billboards/${id}/artists`} method="post">
        
        
        <input 
          type="text"
          required
          placeholder="Name"
          defaultValue={defaultName} 
          name="artist[name]"/>
      
        <textarea
        required
        placeholder="album"
        defaultValue={defaultAlbum} 
        name="artist[album]" type="text" />
        
        <button type="submit">add artist</button>
      </form>
    </>
  );
};

export default ArtistNew;