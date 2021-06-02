// import React from "react";

// const Songs = ({ artist, songs }) => {
//   const { name, album, id } =  artist;
//   return (
//     <>
//       <h1>Songs by {name} </h1>
//       {songs.map((song) => (
//         <p>{song.length}</p>
//       ))}
//     </>
//   );
// };
// export default Songs;

import React from "react";

const Songs = ({ songs, artist }) => {
  const { name, album, id } = artist;
  return (
    <>
      <h1>Songs of {name}</h1>
      <a href={`/billboards/artists/${id}`}>back to artist</a>
      <br />
      <a href={`/`}>back to artists</a>
      <br />
      <a href={`/billboards/artists/${id}/songs/new`}>song new</a>
      <br />
      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>{song.length}</p>
          <a
            href={`billboards/artists/${artist.id}/songs/${song.id}`}
            style={{ paddingLeft: "10px" }}
          >
            song show
          </a>
          <a
            href={`billboards/artists/${artist.id}/songs/${song.id}/edit`}
            style={{ paddingLeft: "10px" }}
          >
            song edit
          </a>
          <a
            href={`billboards/artists/${artist.id}/song/${song.id}`}
            data-method="delete"
            style={{ paddingLeft: "10px" }}
          >
            song delete
          </a>
        </div>
      ))}
    </>
  );
};

export default Songs;