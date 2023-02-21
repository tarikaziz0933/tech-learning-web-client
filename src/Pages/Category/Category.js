import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Shared/Courses/Courses';
import '../Home/Home.css';
const Category = () => {

    const categoryCourses = useLoaderData();
    console.log(categoryCourses);
    return (
        <div className='category-container text-center'>
            {
                categoryCourses.map(categoryCourse => <Courses
                    key={categoryCourse._id}
                    course={categoryCourse}
                ></Courses>)
            }
        </div>
    );
};

export default Category;