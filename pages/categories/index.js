import axios from 'axios';
import React from 'react';

import CategoriesPage from '@/components/templates/CategoriesPage';

const Categories = ({ data }) => {
    return (
        <div>
            <CategoriesPage data={data} />
        </div>
    );
};

export default Categories;


export async function getServerSideProps(context) {
    const { query: { difficulty, time } } = context;
    const res = await axios.get('http://localhost:4000/data');
    const data = res.data;
    const filteredData = data.filter(item => {
        const difficultyResult = item.details.filter(detail => detail.Difficulty && detail.Difficulty === difficulty)

        const timeResult = item.details.filter(detail => {
            const cookingTime = detail['Cooking Time'] || "";
            const [timeDetail] = cookingTime.split(' ');
            if (time === "less" && +timeDetail <= 30) {
                return detail;
            } else if (time === "more" && +timeDetail >= 30) {
                return detail;
            }
        })
        if (difficulty && time && difficultyResult.length && timeResult.length) {
            return item;
        } else if (!time && difficulty && difficultyResult.length) {
            return item;
        } else if (time && !difficulty && timeResult.length) {
            return item;
        }
    });
    return {
        props: {
            data: filteredData
        }
    }
}