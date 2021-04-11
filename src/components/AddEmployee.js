import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button,Form, FormGroup, Input, Label } from 'reactstrap';
import booturl from '../api/bootapi';

const AddEmployee = ()=>{


    useEffect(
        ()=>{
            document.title="Add Employee"
        },[]
    );

    const [employee,addEmployee] =useState(
        {}
    );    

    const handleForm=(e)=>{
        console.log(employee);
        addEmployeeToServer(employee);
        // console.log("success");
        e.preventDefault();
    };

    const addEmployeeToServer=(data)=>{
        axios.post(`${booturl}/api/employees`,data).then(
            (response)=>{
                toast.success("Employee added to server");
            },
            (error)=>{
                console.log(error);
                toast.error("Unable to add");
            }
        )
    }
    return (
        <div>

            <h1> Add Employee</h1>

            <Form onSubmit={handleForm}>

                <FormGroup>
                    <Label>Employee Id</Label>
                    <Input onChange={(e)=>{
                        addEmployee({...employee,id:e.target.value});
                    }} name="employeeId" id="employeeId" type="text"/>
                </FormGroup>

                <FormGroup>
                    <Label>First Name</Label>
                    <Input onChange={(e)=>{
                        addEmployee({...employee,firstName:e.target.value})
                    }} name="firstName" id="firstName" type="text"/>
                </FormGroup>

                <FormGroup>
                    <Label>Last Name</Label>
                    <Input onChange={(e)=>{
                        addEmployee({...employee,lastName:e.target.value})
                    }} name="lastName" id="lastName" type="text"/>
                </FormGroup>

                <FormGroup>
                    <Label>Email</Label>
                    <Input onChange={(e)=>{
                        addEmployee({...employee,email:e.target.value})
                    }} name="email" id="email" type="text"/>
                </FormGroup>

                <FormGroup>
                    <Button type="submit" className="bg-success">
                        Add Employee
                    </Button>
                    <Button type="reset" onClick={()=>{
                        addEmployee({})
                    }}> Clear</Button>
                </FormGroup>                
            </Form>

        </div>
    );

};

export default AddEmployee;