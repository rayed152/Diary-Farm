import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import Axios from 'axios';


export const Cow = () => {

  const [staffIDReg, setStaffID] = useState('');
  const [colorReg,setColor] = useState('');
  const [ageReg, setAge] = useState('');
  const [breedReg, setBreed] = useState(''); 
  const [sexReg, setSex] = useState('');
  const [fathersIDReg, setFathersID] = useState('');
  const [mothersIDReg, setMothersID] = useState('');
  // const [birthDateReg, setBirthDate] = useState('');
  const [heightReg, setHeight] = useState('');
  const [weightReg, setWeight] = useState('');
  const [milkReg, setMilk] = useState('');
  const [incomeReg, setIncome] = useState('');

   

  const updateOne = (event) => {
    event.preventDefault()
    Axios.post('http://localhost:3001/cow', {


      staffID: staffIDReg,
      color: colorReg,
      age:  ageReg,
      breed: breedReg,
      sex: sexReg,
      fathersID: fathersIDReg,
      mothersID: mothersIDReg,
      // birthDate: birthDateReg,
      height: heightReg,
      weight: weightReg,
      milk: milkReg,
      income: incomeReg, 

    }).then((response)=>{
      console.log(response);
    })
  }


  return (
    <div>
      <Form onClick={updateOne}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>ID</Form.Label>
                <Form.Control type="number" placeholder="Animal ID" onChange={(e)=> {setAnimalID(e.target.value);
                }}/> */}
                

                <Form.Label>Staff ID</Form.Label>
                <Form.Control type="number" placeholder="Staff ID" onChange={(e)=> {setStaffID(e.target.value);
                }}/>

                <Form.Label>Color</Form.Label>
                <Form.Control type="text" placeholder="Color" onChange={(e)=> {setColor(e.target.value);
                }}/>
                
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Age" onChange={(e)=> {setAge(e.target.value);
                }}/>
                
                <Form.Label>Breed Name</Form.Label>
                <Form.Control type="text" placeholder="Breed Name" onChange={(e)=> {setBreed(e.target.value);
                }}/>

                <Form.Label>Sex</Form.Label>
                <Form.Control type="text" placeholder="Sex" onChange={(e)=> {setSex(e.target.value);
                }}/>
                
                <Form.Label>Father's ID</Form.Label>
                <Form.Control type="number" placeholder="Fathers ID" onChange={(e)=> {setFathersID(e.target.value);
                }}/>

                <Form.Label>Mother's ID</Form.Label>
                <Form.Control type="number" placeholder="Mothers ID" onChange={(e)=> {setMothersID(e.target.value);
                }}/>

                {/* <Form.Label>Date Of Birth</Form.Label>
                <Form.Control type="Date" placeholder="Enter Date"/> */}

                <Form.Label>Current Height</Form.Label>
                <Form.Control type="number" placeholder="Height" onChange={(e)=> {setHeight(e.target.value);
                }}/>

                <Form.Label>Current Weight</Form.Label>
                <Form.Control type="number" placeholder="Weight" onChange={(e)=> {setWeight(e.target.value);
                }}/>

                <Form.Label>Total Milk</Form.Label>
                <Form.Control type="number" placeholder="Milk" onChange={(e)=> {setMilk(e.target.value);
                }}/>

                <Form.Label>Total Income</Form.Label>
                <Form.Control type="number" placeholder="Income" onChange={(e)=> {setIncome(e.target.value);
                }}/>


            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}


export default Cow;