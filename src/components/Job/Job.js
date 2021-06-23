import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import JobCard from './JobCard';
import FakeJob from '../../fakeData/jobsource.json';

const Job = () => {

    const [jobs, setjobs] = useState([]);

    useEffect(() => {
        setjobs(FakeJob)
    }, [])

    return (
        <Row>
            {
                jobs.map(job=> <JobCard job={job} key={job.key}></JobCard>)
            }
        </Row>
    );
};

export default Job;