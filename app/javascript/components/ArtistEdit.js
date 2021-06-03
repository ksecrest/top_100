
import React from "react";

const ArtistEdit = ({ artist, billboard}) => {
  const { theme, id } = billboard;
  const { name } = artist;
  const defaultName = name ? name : "";
  return (
    <>
      <h1>Edit Artist!</h1>
      <form action={`/billboards/${id}/artists/${artist.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input defaultValue={defaultName} name="artist[name]" type="text" />
        <button type="submit">edit</button>
      </form>

      <a href={`/billboards/${id}`}>Back to {theme}</a>
      <br />
      <a href={`/billboards/${id}/artists/`}>Back to artists</a>
      <br />
      {/* <a href={url + '/new'}>New Artist</a> */}
    </>
  );
};

export default ArtistEdit;