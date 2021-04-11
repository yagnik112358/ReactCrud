import React, { useEffect, useState } from 'react'
import Course from './Course';


const AllCourses=()=>{

    useEffect(
        ()=>{
            document.title="All Courses"
        },[]
    );
    
    const [courses,setCourses]=useState([
        {title:"java",description:"This is a good course"},
        {title:"C#",description:"This is a good course"},
        {title:"maths",description:"This is a good course"}
    ]);

    return(
        <div>
            <h1>List of courses</h1>
            {
                courses.length>0? courses.map((item)=>(
                    <Course key={item.id} course={item}/>
                )):"No courses found"
            }    
        </div>
    );
};

export default AllCourses;