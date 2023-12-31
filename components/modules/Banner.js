import React from 'react';

import styles from './Banner.module.css';

import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>Food App</h2>
                <p>Food Delivery and Takeout!</p>
                <span>
                    Food App is an online food ordering and delivery platform launched by
                    Uber in 2014. Meals are delivered by couriers using cars, scooters,
                    bikes, or on foot.
                </span>
                <Link href="/menu">See All</Link>
            </div>
            <div className={styles.right}>
                <Image width={800} height={600} src="/images/banner.png" alt="Food image" />
            </div>
        </div>
    );
};

export default Banner;