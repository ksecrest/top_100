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
    <h1 style={{background: "yellow", fontSize: '40px'}}>Welcome</h1>
    <h1 style={styles.mainHeader}>For Easy Listening</h1>
    <h1 style={styles.subHeader}>At Home, in the Car, or at Work</h1>
    <h1 className="title">this is the ultimate in listening satisfaction</h1>
    <h1 className="subTitle">for those that love music</h1>
</>
)
export default Home;