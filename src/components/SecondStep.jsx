/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { InfoContext } from '../ContextApi/InfoContext';

const SecondStep = () => {
  const {addressData, setAddressData, errors, setErrors } = useContext(InfoContext)

  // Handle change in form-fields
  const handleChange = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
    setErrors({...errors, [e.target.name] : null})

  };

  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formAddressLine1" className='form-field'>
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                name="addressLine1"
                placeholder="Enter Address Line 1"
                onChange={handleChange}
                value={addressData.addressLine1}
                className={`form-control ${errors.addressLine1 ? 'is-invalid' : ''}`}
              />
              {errors.addressLine1 && <small className="text-danger">{errors.addressLine1}</small>}
            </Form.Group>

            <Form.Group controlId="formAddressLine2" className='form-field'>
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                name="addressLine2"
                placeholder="Enter Address Line 2"
                onChange={handleChange}
                value={addressData.addressLine2}
                className={`form-control ${errors.addressLine2 ? 'is-invalid' : ''}`}
              />
              {errors.addressLine2 && <small className="text-danger">{errors.addressLine2}</small>}
            </Form.Group>

            <Form.Group controlId="formCity" className='form-field'>
              <Form.Label>City</Form.Label>
              <Form.Control
                as="select"
                name="city"
                onChange={handleChange}
                value={addressData.city}
                className={`form-control ${errors.city ? 'is-invalid' : ''}`}
              >
                <option>Select City</option>
                <option>City 1</option>
                <option>City 2</option>
                <option>City 3</option>
              </Form.Control>
              {errors.city && <small className="text-danger">{errors.city}</small>}
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="formState" className='form-field'>
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                name="state"
                onChange={handleChange}
                value={addressData.state}
                className={`form-control ${errors.state ? 'is-invalid' : ''}`}
              >
                <option>Select State</option>
                <option>State 1</option>
                <option>State 2</option>
                <option>State 3</option>
              </Form.Control>
              {errors.state && <small className="text-danger">{errors.state}</small>}
            </Form.Group>

            <Form.Group controlId="formCountry" className='form-field'>
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                name="country"
                onChange={handleChange}
                value={addressData.country}
                className={`form-control ${errors.country ? 'is-invalid' : ''}`}
              >
                <option>Select Country</option>
                <option>Country 1</option>
                <option>Country 2</option>
                <option>Country 3</option>
              </Form.Control>
              {errors.country && <small className="text-danger">{errors.country}</small>}
            </Form.Group>

            <Form.Group controlId="formPinCode" className='form-field'>
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                name="pinCode"
                placeholder="Enter Pin Code"
                onChange={handleChange}
                value={addressData.pinCode}
                className={`form-control ${errors.pinCode ? 'is-invalid' : ''}`}
              />
              {errors.pinCode && <small className="text-danger">{errors.pinCode}</small>}
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SecondStep;
