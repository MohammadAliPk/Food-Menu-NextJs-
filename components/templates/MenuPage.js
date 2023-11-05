import React from 'react';

// styles
import styles from './MenuPage.module.css';

// Modules
import Card from '../modules/Card';

const MenuPage = ({ data }) => {
    return (
        <div className={styles.container}>
            <h2>Menu</h2>
            <div className={styles.subContainer}>
                {data.map(food => <Card key={food.id} {...food} />)}
            </div>
        </div>
    );
};

export default MenuPage;