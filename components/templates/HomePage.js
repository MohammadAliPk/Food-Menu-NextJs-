import React from 'react';

// styles
import styles from './HomePage.module.css'

// Modules
import Banner from '../modules/Banner';
import Attributes from '../modules/Attribute';
import Definition from '../modules/Definition';
import Companies from '../modules/Companies';
import Instruction from '../modules/Instruction';
import Guide from '../modules/Guide';
import Restrictions from '../modules/Restrictions';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner />
            <Attributes />
            <Definition />
            <Companies />
            <Instruction />
            <Guide />
            <Restrictions />
        </div>
    );
};

export default HomePage;