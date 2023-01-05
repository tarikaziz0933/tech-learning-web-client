import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Shared/Courses/Courses';
const Category = () => {

    const categoryCourses = useLoaderData();
    console.log(categoryCourses);
    return (
        <div className='text-center'>
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