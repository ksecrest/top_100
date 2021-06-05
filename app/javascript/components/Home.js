import React from 'react'

const styles = {
    mainHeader: {
        background: 'light blue',
        color: 'black',
        fontSize: '67px'
    },
    subheader: {
        fontSize: '12px',
        background: 'beige',
        color: 'white'
    }
}




const Home = () => (

<>
    <h1 style={{background: "yellow", fontSize: '40px'}}>Home Page</h1>
    <h1 style={styles.mainHeader}>Home Page</h1>
    <h1 style={styles.subHeader}>Home Page</h1>
    <h1 className="title">this is the next heading</h1>
    <h1 className="subTitle">next subheading: I love cats</h1>
</>
)
export default Home;