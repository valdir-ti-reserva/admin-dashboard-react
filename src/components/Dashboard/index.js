import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import NavBar from '../NavBar';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

export default function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <NavBar />        
        </Col>
      {/* <Sidebar />
      <Main />
      <Footer /> */}
      </Row>
    </Container>
  )
}