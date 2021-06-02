import React from 'react';

const url = "http://localhost:3000/billboards/";
const Billboards = ({ billboards }) => {
    return (
<>
    <h1> Billboards </h1>
    <a href={url + "new"}>Add Billboard</a>
      <hr />
      {billboards.map((billboard) => (
        <div>
          <h3>{billboard.theme}</h3>
          <a href={url + billboard.id} style={{ paddingLeft: "10px" }}>
            show billboard
          </a>
          <a href={url + billboard.id + "/edit"} style={{ paddingLeft: "10px" }}>
            edit billboard
          </a>
          <a
            href={url + billboard.id}
            data-method="delete"
            style={{ paddingLeft: "10px" }} >
            delete billboard
          </a>
        </div>
      ))}
    </>
  );
};
export default Billboards; 

