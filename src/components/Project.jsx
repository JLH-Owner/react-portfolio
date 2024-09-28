import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Placeholder from 'react-bootstrap/Placeholder';
import Nav from 'react-bootstrap/Nav'

const ProjectList = ({ title, image, liveURL, github }) => {
  return (
    
        <Col>
          <div className="d flex justify-content-around">
            <Card style={{ width: '18rem '}}>
              <Card.Img variant="top" src={image} alt={`${title} Screenshot`} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>         
                  <Nav className="project-links">
                    <Nav.Item>                      
                    <Nav.Link href={liveURL} target="_blank" rel="noopener noreferrer">&#8594; Live URL</Nav.Link>
                    </Nav.Item>                                       
                    <Nav.Item>
                    <Nav.Link href={github} target="_blank" rel="noopener noreferrer">&#8594; GitHub Repo</Nav.Link>
                    </Nav.Item>
                  </Nav>
              </Card.Body>
            </Card>
          </div>
        </Col>        
      
  );
}

export default ProjectList