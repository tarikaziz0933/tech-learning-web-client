import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Shared/Courses/Courses';

const Home = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div className='text-center'>
            {
                allCourses.map(course => <Courses
                    key={course._id}
                    course={course}
                ></Courses>)
            }
        </div>
    );
};

export default Home;