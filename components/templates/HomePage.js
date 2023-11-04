import React from 'react';

import styles from './HomePage.module.css'
import Banner from '../modules/Banner';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner />
        </div>
    );
};

export default HomePage;