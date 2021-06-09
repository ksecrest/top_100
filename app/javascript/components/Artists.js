
import React from 'react';

const Artists = ({ billboard, artists }) => {
  const { theme, id } = billboard
  
  //  billboard.id
  const url = `/billboards/${id}/artists`
  return (
    <>
      <h1>Artists from {theme} Billboard</h1>
      <a href={`/billboards/${id}`}>Back to {theme}</a>
      <br />
      <a href={url + '/new'}>New Artist</a>
      {
        artists.map( (artist) => (
          <div>
            <h3>{artist.name}</h3>
            <a href={url + '/' + artist.id}>Show Artist</a>
            {' '}
            <a href={url + '/' + artist.id + '/edit'}>Edit Artist</a>
            {' '}
            <a href={url + '/' + artist.id} data-method="delete">Delete Artist</a>
          </div>
        ))
      }
    </>
  )
}
export default Artists;

