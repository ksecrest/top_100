import React from 'react';

const Billboard = ({ billboard }) => {
  const { theme, id, created_at  } = billboard;
  return (
    <>
      <h3>{ theme }</h3>
      <p>
        Created:  {created_at}
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