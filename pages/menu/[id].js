import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

const FoodDetails = () => {

    const router = useRouter();
    if (router.isFallback) {
        return <h2>Loading page ...</h2>
    }

    return (
        <div>
            Details
        </div>
    );
};

export default FoodDetails;

export async function getStaticPaths() {
    const res = await axios.get('http://localhost:4000/data');
    const data = res.data.slice(0, 10);
    const paths = data.map(food => ({ params: { id: food.id.toString() } }))
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    try {
        const { params: { id } } = context;
        const res = await axios.get(`http://localhost:4000/data/${id}`);
        const data = res.data;

        return {
            props: {
                data
            },
            revalidate: 3600,
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
}