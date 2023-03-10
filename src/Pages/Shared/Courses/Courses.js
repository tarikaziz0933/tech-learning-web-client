import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    const {
        image_url,
        title,
        author,
        rating,
        details,
        category_name,
        _id
    } = course;
    console.log(course);
    return (
        <div className='mb-5'>
            <Card className='h-10'>
                <Card.Img style={{ height: "200px" }} variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p className="d-flex justify-content-between">
                        <small>category: {category_name}</small>{" "}
                        <small>rating: {rating}</small>
                    </p>
                    <p>
                        <img style={{ width: "30px", borderRadius: "50%" }} src={author.img} alt='' />{" "}
                        {author.name}
                    </p>
                    <Card.Text className="fs-5 text-muted">{details}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted text-center p-0">
                    <Link to={`/courseDetails/${_id}`}>
                        <Button variant="primary w-100  card-button">Details</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div >
    );
};

export default Courses;