import axios from 'axios';
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


function Sheep_info() {

    const [reviewCow, setReviewCow] = useState([]);
    const [newMilk, setNewMilk] = useState(0);

    const updateInfoMilk = (animalID) =>{
        axios.put('http://localhost:3001/api/update-cow', {milk: newMilk, animalID: animalID}).then(
            (response)=>{
            alert("update");
        } 
        );
    };

    useEffect(() =>{
        axios.get('http://localhost:3001/api/sheepI').then((response) =>{
            setReviewCow(response.data)
        })
    }, [])


  return (
    <div>
        <h1>Brown SWiss</h1>
        <Table striped bordered hover variant="dark">

        </Table>
        {reviewCow.map((val)=>{
            return (
                <div>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                         <th>#</th>
                         <th>Breed</th>
                         <th>Sex</th>
                         <th>Age</th>
                         <th>Color</th>
                         <th>height</th>
                         <th>Weight</th>
                         <th>Milk</th>
                         <th>Income</th>
                         <th>Update Milk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>{val.animalID}</td>
                          <td>{val.breed}</td>
                          <td>{val.sex}</td>
                          <td>{val.age}</td>
                          <td>{val.color}</td>
                          <td>{val.height}</td>
                          <td>{val.weight}</td>
                          <td>{val.milk}</td>
                          <td>{val.income }</td>
                          <td>
                            <input type="text" placeholder='2000...'
                              onChange={(event)=>{
                                  setNewMilk(event.target.value);
                              }}      
                              />
                              <Button onClick={() => {updateInfoMilk(val.animalID)}}
                              style={{marginTop: "0px"}}
                              >
                                  Update
                              </Button>
                          </td>
                        </tr>
                    </tbody>
                </Table>

                </div>
                
                )
            })}
    </div>
  )
}

export default Sheep_info