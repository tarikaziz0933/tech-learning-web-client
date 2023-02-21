import React from 'react';
// import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Shared/Courses/Courses';
import './Home.css'

const Home = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (

        <div className='category-container text-center'>
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