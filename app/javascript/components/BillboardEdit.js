import React from "react";
const BillboardEdit = ({ billboard }) => {
  const { theme, id } = billboard
  const defaultTheme= theme ? theme : "";
  return (
    <>
      <h1>Editing {theme} billboard</h1>
      <form action={`/billboards/${id}`} method="post">
        <input type='hidden' name="_method" value="patch" />
        <input
          placeholder="Theme"
          type="text"
          required
          defaultValue={defaultTheme}
          name="billboard[theme]"
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}
export default BillboardEdit;