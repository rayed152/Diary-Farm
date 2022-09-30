import axios from 'axios';
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

function Allanimals() {

    const [reviewCow, setReviewCow] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/api/allanimalI').then((response) =>{
            setReviewCow(response.data)
        })
    }, [])


  return (
    <div>
<h1>All Informations</h1>
        <Table striped bordered hover variant="dark">

        </Table>
        {reviewCow.map((val)=>{
            return (
                <div>
                    {/* <h3>ID Number: {val.animalID}</h3>
                    <ul>
                        <li>SEX: {val.sex} </li>
                        <li>AGE: {val.age}</li>
                        <li>COLOR: {val.color}</li>
                        <li>Father's ID: {val.fathersID} </li>
                        <li>Mother's ID: {val.mothersID} </li>
                        <li>Height: {val.height}  </li>
                        <li>Weight: {val.weight}  </li>
                        <li>Milk: {val.milk}</li>
                        <li>Income: {val.income}</li>
                    </ul>  */}
                    
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
                        </tr>
                    </tbody>
                </Table>

                </div>
                
                )
            })}
    </div>
  )
}

export default Allanimals