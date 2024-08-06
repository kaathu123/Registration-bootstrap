import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Registration.css';
const Registration = () => {
    return (
        <div className=" d-flex flex-row  justify-content-center mt-5 " style={{height:'100vh'}}>
         
         <div className="d-flex flex-column mx-auto align-self-center justify-content-center " >  
            <Card style={{ width: '28rem',height: '40vh' }}  className='card text-white bg-info mb-3'>

                <div className="d-flex flex-column mx-auto align-self-center justify-content-center  " style={{ width: '200px', height: '270px' }} >


                    <Form.Control type="text" placeholder="Username" />
                    <br />
                    <Form.Control type="text" placeholder="Email" />
                    <br />
                    <Form.Control type="text" placeholder="Password" />
                    <br />
                    <div className='d-flex flex-row'>
                    <Button variant="btn btn-primary" className="mx-auto" >Submit</Button>{' '}
                    <Button variant="btn btn-dark" className="mx-auto" >Reset</Button>{' '}
                    </div>
                </div>
            </Card>
            </div> 
        </div>

    )
}

export default Registration