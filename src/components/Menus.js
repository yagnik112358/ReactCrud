import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menus =()=>{
    
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag='a' to="/" action> Home </Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/add-course" action>AddCourses</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/view-courses" action>View Courses</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="#!" action>About</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="#!" action>Contact us</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/view-employees" action>view employees</Link>
            <Link className="list-group-item list-group-item-action" tag='a' to="/add-employee" action>add employee</Link>
        </ListGroup>
    );
};

export default Menus;