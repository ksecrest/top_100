import React from "react";

const ArtistEdit = ({ artist, billboard }) => {
  const { id } = billboard;
  const { name, album, artist_id } = artist;
  const defaultName = name ? name : "";
  const defaultAlbum = album ? album : "";
  return (
    <>
      <h1>Edit Artist!</h1>
      <form action={`/billboards/${id}/artists/${artist.id}`} method="post">
        
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={defaultName} name="artist[name]" type="text" />
        <input type="hidden" name="_method" value="patch" />

        <p>Album</p>
        <input defaultValue={defaultAlbum} name="album[name]" type="text" />
        <button type="submit">edit</button>
      </form>
    </>
  );
};

export default ArtistEdit;