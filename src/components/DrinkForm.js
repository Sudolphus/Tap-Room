import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/DrinkForm.css';

function DrinkForm(props) {
  const { onLinkClick, onSubmittingForm, buttonText, defaultName, defaultBrand, defaultPrice, defaultContent } = props;
  
  function handleSubmittingForm(event) {
    event.preventDefault();
    onSubmittingForm(event);
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmittingForm}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Product Name' defaultValue={defaultName} required />
        </Form.Group>
        <Form.Group controlId='brand'>
          <Form.Label>Brand</Form.Label>
          <Form.Control type='text' placeholder='Brand' defaultValue={defaultBrand} required />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type='text' placeholder='Price' defaultValue={defaultPrice} pattern='^\d+\.\d{2}$' required />
              </InputGroup>
              <Form.Text className="text-muted">Price takes a decimal input (e.g. 5.50 or 12.00)</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='content'>
              <Form.Label>Alcohol Content</Form.Label>
              <InputGroup>
                <Form.Control type='text' placeholder='Content' defaultValue={defaultContent} pattern='^\d{1,2}\.\d+$' required />
                <InputGroup.Append>
                  <InputGroup.Text>%</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
              <Form.Text className='text-muted'>Alcohol Content takes a decimal input (e.g. 5.5 or 6.75)</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button variant='success' type='submit' size='lg' block>{buttonText}</Button>
      </Form>
      <Button variant='secondary' type='button' size='lg' block onClick={()=>onLinkClick('index')}>Back To Index</Button>
    </React.Fragment>
  )
}

DrinkForm.propTypes = {
  onLinkClick: PropTypes.func.isRequired,
  onSubmittingForm: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  defaultName: PropTypes.string,
  defaultBrand: PropTypes.string,
  defaultPrice: PropTypes.string,
  defaultContent: PropTypes.string,
}

export default DrinkForm;