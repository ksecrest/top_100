import React from 'react';

const Artist = ({ artist, billboard }) => {
  const { theme, id, created_at  } = billboard;
  const { name, album, id } = artist;
  return (
    <>
      <h3>{ name }</h3>
      <p>
        {album}
      </p>
      <p>
        id: {id}
      </p>

      <a href="/">back</a>
      <br />
      <a href={'/billboards/' + id } data-method="delete">Delete Billboard</a>
      <br />
      <a href={'/billboards/' + id + '/edit'}>Edit Billboard</a>
      <br />
      <a href={`/billboards/${id}/artists`}>Show Artists</a>
    </>
  );
};

export default Billboard;