import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    const {
        image_url,
        title,
        author,
        rating,
        details,
        category_name,
    } = courseDetails;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
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
                    <Link to={`/home`}>
                        <Button variant="primary w-100  card-button">DBack To Home</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetails;