import React from 'react';

import './home-page.styles.css';

import Directory from './components/directory/directory.component'

const HomePage = () => {
    return(

    <div className='homepage'>
        <p>home page component</p>
        <Directory/>
    </div>

    )

    
}


export default HomePage;