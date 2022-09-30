import 'bootstrap/dist/css/bootstrap.min.css';
import pic2 from './Pictures/slide2.jpg';
import pic3 from './Pictures/slide3.jpg';
import { Button, Card, Carousel } from 'react-bootstrap';
import NavBar from './NavBar';


function Home() {
    return (
      <div>
        <NavBar/>

        {/* First div */}
        <div className=''>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={"https://cdn.pixabay.com/photo/2013/10/09/02/26/cattle-192976__480.jpg"}
                        alt="First Slide"
                        style={{height:"700px",width:"100%",objectFit:"cover"}}

                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={pic2}
                        alt="Second Slide"
                        style={{height:"700px",width:"100%",objectFit:"cover"}}

                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={pic3}
                        alt="Third Slide"
                        style={{height:"700px",width:"100%",objectFit:"cover"}}

                    />
                </Carousel.Item>

                
            </Carousel>
        </div>


        {/* Second div */}
        <div>
            <div className='d-flex justify-content-center mt-5 m-5'>
                <Card style={{width: '18rem'}} className='m-5'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body >
                    <Card.Text className='m-3'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv
                    </Card.Text>
                    <Button varient="primary" style={{width: '286px'}}>Read More</Button>
                </Card>

                <Card style={{width: '18rem'}} className='m-5'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                    <Card.Text className='m-3'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv
                    </Card.Text>
                    <Button varient="primary" style={{width: '286px'}}>Read More</Button>
                </Card>

                <Card style={{width: '18rem'}} className='m-5'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                    <Card.Text className='m-3'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv
                    </Card.Text>
                    <Button varient="primary" style={{width: '286px'}}>Read More</Button>
                </Card>
            </div>


            <div className='d-flex justify-content-center'>
            <Card style={{width: '18rem'}} className='m-5'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                    <Card.Text className='m-3'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv
                    </Card.Text>
                    <Button varient="primary" style={{width: '286px'}}>Read More</Button>
                </Card>

                <Card style={{width: '18rem'}} className='m-5'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                    <Card.Text className='m-3'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv
                    </Card.Text>
                    <Button varient="primary" style={{width: '286px'}}>Read More</Button>
                </Card>

                <Card style={{width: '18rem'}} className='m-5'>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                    <Card.Text className='m-3'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fiv
                    </Card.Text>
                    <Button varient="primary" style={{width: '286px'}}>Read More</Button>
                </Card>

            </div>
        </div>

        {/* Footer */}
        <div>
             <footer className="bg-dark text-center">
              <div className="text-center p-3">
                <p className="text-dark text-white" > ©2022 Copyright: DairyFarm.com</p>
              </div>
            </footer>
        </div>
        
      </div>
    );  
  } 

  export default Home;
