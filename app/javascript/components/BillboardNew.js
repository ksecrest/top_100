import React from 'react';

const BillboardNew = ({ billboard }) => {
    // if we fail the form, it doesn't lose all data because we're doing some defaults
    const { theme } = billboard
    const defaultTheme = theme ? theme : "";
    //if the title is there, return title, if not, return empty string
    // const defaultBody = body ? body : ""
    // const defaultAuthor = author ? author : ""

    return (
        <>
        <h1>New Billboard</h1>
            <form action='/billboards' method='post'>

                <input
                    placeholder="Theme"
                    type='text'
                    required
                    defaultValue={defaultTheme}
                    name="billboard[theme]"
                />
                {/* /* <input
                    placeholder="body"
                    type='text'
                    defaultValue={defaultBody}
                    name="billboard[body]"
                />
                <input
                    placeholder="author"
                    type='text'
                    defaultValue={defaultAuthor}
                    name="billboard[author]" 
                /> */}

                <button type="submit">Add</button>
            </form>
        </>

    );
};

export default BillboardNew;