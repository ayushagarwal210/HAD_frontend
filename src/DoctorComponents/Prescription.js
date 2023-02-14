import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Prescription() {
    return (
        <div className="container">
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Medicine</Form.Label>
            <Form.Control   />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Observation</Form.Label>
            <Form.Control   />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Advice</Form.Label>
            <Form.Control   />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </div>
      );
}
export default Prescription