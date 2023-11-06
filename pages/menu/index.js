import MenuPage from '@/components/templates/MenuPage';
import axios from 'axios';
import React from 'react';

const Menu = ({ data }) => {
    return (
        <MenuPage data={data} />
    );
};

export default Menu;


export async function getStaticProps() {
    const res = await axios.get(`${process.env.BASE_URL}data`);
    const data = res.data;
    return {
        props: {
            data
        },
        revalidate: 3600,
    }

}