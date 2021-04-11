import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const AddCourses =()=>{


    useEffect(
        ()=>{
            document.title="Add Courses"
        },[]
    );


    return(
        <div>
            <h1 className="text-center" > Add Courses</h1>
            <Form>
                <FormGroup>
                    <Label> Course Id </Label>
                    <Input type="text" name="courseId" id="courseId" placeholder="Enter Id here"/>
                </FormGroup>
                <FormGroup>
                    <Label> Course Title </Label>
                    <Input type="text" name="title" id="title" placeholder="Enter title here"/>
                </FormGroup>
                <FormGroup>
                    <Label> Course Description </Label>
                    <Input type="textarea" name="Description" id="Description" placeholder="Enter Description here"/>
                </FormGroup>

                <FormGroup>
                    <Button className="bg-success">
                        Add Courses
                    </Button>
                    <Button className="bg-warning">
                        Clear
                    </Button>
                </FormGroup>
                
            </Form>
        </div>
    );

};

export default AddCourses;
