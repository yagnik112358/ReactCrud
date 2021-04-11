import React, { useEffect, useState } from 'react';
import axios from 'axios';
import booturl from "../api/bootapi"
import { toast } from 'react-toastify';

const AllEmployees=()=>{

    useEffect(
        ()=>{
            document.title="All Employees"

        },[]
    );

        const [employees,addEmployee]=useState(
            []            
        )


    const getAllEmployeesFromServer = ()=>{
        axios.get(`${booturl}/api/employees`).then(
            (response)=>{
                console.log(response);
                toast.success("Data loaded from server");
                addEmployee(response);
            },
            (error)=>{
                console.log(error);
                toast.error("server down");
            }
        )
    };

    useEffect(()=>{
            getAllEmployeesFromServer();
        },[]
    );


    return (
        <div>
            <h1>List of Employees</h1>
            {
                                
            }    
        </div>
    );
};

export default AllEmployees;