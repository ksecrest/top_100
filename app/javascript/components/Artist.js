

import React from "react";

const Artist = ({ artist, billboard }) => {
  const { theme, id } = billboard;
  // const { name, id } = artist;

  return (
    <>
      <div className="artist-card">
        <h1>{artist.name}</h1>
        <h6>Billboard: {billboard.theme}</h6>
        <br />
        <a href={`/billboards`}>billboards</a>
        <br />
        <a href={`/billboards/${id}`}>go back to {theme}</a>
        <br />
        <a href={`/billboards/${id}/artists/`}>Back to artists</a>
        <br />
        {/* /artists/:artist_id/songs(.:format) */}
        <a href={`/artists/${artist.id}/songs`}>view songs</a><br />

      </div>
    </>
  );
};

export default Artist;

// import React from 'react';

// const Artist = ({ artist, billboard }) => {
//   const { theme, id, created_at  } = billboard;
//   const { name, album, id } = artist;
//   return (
//     <>
//       <h3>{ name }</h3>
//       <p>
//         {album}
//       </p>
//       <p>
//         id: {id}
//       </p>

//       <a href="/">back</a>
//       <br />
//       <a href={'/billboards/' + id } data-method="delete">Delete Billboard</a>
//       <br />
//       <a href={'/billboards/' + id + '/edit'}>Edit Billboard</a>
//       <br />
//       <a href={`/billboards/${id}/artists`}>Show Artists</a>
//     </>
//   );
// };

// export default Billboard;