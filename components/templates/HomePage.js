import React from 'react';

import styles from './HomePage.module.css'
import Banner from '../modules/Banner';
import Attributes from '../modules/Attribute';
import Definition from '../modules/Definition';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner />
            <Attributes />
            <Definition />
        </div>
    );
};

export default HomePage;