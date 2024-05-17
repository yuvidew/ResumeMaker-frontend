import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeleteIcon from '@mui/icons-material/Delete';

const WorkExpListComp = ({ setList , indx , ele}) => {
    return (<>
        <Card>
            <Card.Header as="h3">{ele.organization}</Card.Header>
            <Card.Body>
                <Card.Title>{ele.designation}</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button 
                    variant='danger' 
                    className=' 
                    d-flex align-items-center gap-4 
                    justify-content-center w-25 fs-4'

                    onClick={() => setList(indx)}>
                    Delete
                    <DeleteIcon style={{
                        fontSize : '2rem'
                    }} />
                </Button>
            </Card.Body>
        </Card>
    </>)
}

export default WorkExpListComp