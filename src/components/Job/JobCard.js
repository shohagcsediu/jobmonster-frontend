import React from 'react';
import { Button, Col } from 'react-bootstrap';

const JobCard = (props) => {
    const {title, company, location,education, experience} = props.job;
    return (
        <Col xs={4}  >
            <h2>{title}</h2>
            <h4>{company}</h4>
            <h6>{location}</h6>
            <h6>{education}</h6>
            <h6>{experience}</h6>
            <Button>Apply Now</Button>
        </Col>
    );
};

export default JobCard;