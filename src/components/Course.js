import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Course=({course})=>{

    return(
        <div>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle tag="h5">{course.title}</CardTitle>
                        <CardText>{course.description}</CardText>
                        <Button>Info</Button>
                </Card>
        </div>
    );
}

export default Course;