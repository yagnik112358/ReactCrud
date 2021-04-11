// import { Button } from 'bootstrap'
import React, { useEffect } from 'react';
import {Jumbotron, Button , Container} from 'reactstrap';

const Home=()=>{

    useEffect(
        ()=>{
            document.title="Home"
        },[]
    );

    return(
        <div>
            <Jumbotron>
                <h1>Hello World</h1>
                
                <p>This is a home page of our first application.<br/>
                It is a jumbotron component.
                I wonder why br is not working here.! </p>

                <Button color="primary" outline>Click me</Button>

            </Jumbotron>
        </div>
    );
}
  
export default Home;
