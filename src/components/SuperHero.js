import {Card, Container, Row, Col, Image} from "react-bootstrap"
import cicipan from "../assets/img/cicipan.jpg"
import gatotkaca from "../assets/img/gatotkaca.jpeg"
import cektoko from "../assets/img/cek toko.jpg"

const SuperHero = () => {
  return (
      <div>
      <Container>
          <br></br>
          <br></br>

          <h1 className="text-white text-center">TRENDING MOVIES</h1>
          <Row className="mt-3">
              <Col md={4} className="moviewrapper" id="SuperHero">
                <Card className="movieimg">
                <Image src={cicipan} alt="cicipan" className="images" />
                <div className="bg-dark">
                    <div className="p-2 mt-3 text-white">
                    <Card.Title className="text-center">CICIPAN SURGAWI</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                    </Card>                   
              </Col>
              <Col md={4} className="moviewrapper">
                <Card className="movieimg">
                <Image src={cektoko} alt="cicipan" className="images" />
                <div className="bg-dark">
                    <div className="p-2 mt-3 text-white">
                    <Card.Title className="text-center">CICIPAN SURGAWI</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                    </Card>                   
              </Col>
              <Col md={4} className="moviewrapper">
                <Card className="movieimg">
                <Image src={gatotkaca} alt="cicipan" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 mt-3 text-white">
                    <Card.Title className="text-center">CICIPAN SURGAWI</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                    </Card>                   
              </Col>
              <Col md={4} className="moviewrapper mt-4">
                <Card className="movieimg">
                <Image src={gatotkaca} alt="cicipan" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 mt-3 text-white">
                    <Card.Title className="text-center">CICIPAN SURGAWI</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                    </Card>                   
              </Col>
              <Col md={4} className="moviewrapper mt-4">
                <Card className="movieimg">
                <Image src={cektoko} alt="cicipan" className="images"/>
                <div className="bg-dark">
                    <div className="p-2 mt-3 text-white">
                    <Card.Title className="text-center">CICIPAN SURGAWI</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                    </Card>                   
              </Col>
              <Col md={4} className="moviewrapper mt-4">
                <Card className="movieimg">
                <Image src={cicipan} alt="cicipan" className="images" />
                <div className="bg-dark">
                    <div className="p-2 mt-3 text-white">
                    <Card.Title className="text-center">CICIPAN SURGAWI</Card.Title>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                    </Card>                   
              </Col>
              
              
          </Row>
          <br></br>
          <br></br>

      </Container>
      </div>
   
  )
}

export default SuperHero 