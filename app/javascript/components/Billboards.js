import React from 'react';

const url = "http://localhost:3000/billboards/";
const Billboards = ({ billboards }) => {
  const cssBlock = 'billboards';
    return (
<>
    <h1 className={`${cssBlock}_title`}> Billboards </h1>
    <a href={`${url}new`}>Add Billboard</a>
      <hr />
      <div className={`${cssBlock}_column`}>
        {billboards.map((billboard) => (
          <div className={`${cssBlock}_billboard`}>
            <h3>{billboard.theme}</h3>
            <a href={`${url}${billboard.id}`} style={{ paddingLeft: "10px" }}>
              Go to Billboard
            </a>
            <a href={`${url}${billboard.id}/edit`} style={{ paddingLeft: "10px" }}>
              Edit Billboard
            </a>
            <a
              href={`${url}${billboard.id}`}
              data-method="delete"
              style={{ paddingLeft: "10px" }} >
              Delete Billboard
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
export default Billboards; 

