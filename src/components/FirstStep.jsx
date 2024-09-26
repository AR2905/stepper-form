/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */



import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { UseInformation } from "../ContextApi/InfoContext";

const FirstStep = () => {
  const { userData, setUserData, errors, setErrors } = UseInformation();

  // Handle changes in form-fields
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  return (
    <Container>
    <Form>
      <Row>
        <Col md={6} className="form-field">
          <Form.Group controlId="formFirstName">
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={userData.firstName}
              className={errors.firstName ? "is-invalid" : ""}
            />
            {errors.firstName && (
              <small className="text-danger">{errors.firstName}</small>
            )}
          </Form.Group>
        </Col>
        <Col md={6} className="form-field">
          <Form.Group controlId="formMiddleName">
            <Form.Control
              type="text"
              name="middleName"
              placeholder="Middle Name"
              onChange={handleChange}
              value={userData.middleName}
              className={errors.middleName ? "is-invalid" : ""}
            />
            {errors.middleName && (
              <small className="text-danger">{errors.middleName}</small>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="form-field">
          <Form.Group controlId="formLastName">
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={userData.lastName}
              className={errors.lastName ? "is-invalid" : ""}
            />
            {errors.lastName && (
              <small className="text-danger">{errors.lastName}</small>
            )}
          </Form.Group>
        </Col>
        <Col md={6} className="form-field">
          <Form.Group controlId="formPhoneNumber">
            <Form.Control
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              value={userData.phoneNumber}
              className={errors.phoneNumber ? "is-invalid" : ""}
            />
            {errors.phoneNumber && (
              <small className="text-danger">{errors.phoneNumber}</small>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="form-field">
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={userData.email}
              className={errors.email ? "is-invalid" : ""}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </Form.Group>
        </Col>

        <Col md={6} className="form-field">
          <Form.Group controlId="formBirthday">
            <Form.Control
              type="text"
              id="Bday"
              name="birthday"
              placeholder={`Birthday`}
              onChange={handleChange}
              value={userData.birthday}
              className={errors.birthday ? "is-invalid" : ""}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
            {errors.birthday && (
              <small className="text-danger">{errors.birthday}</small>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="form-field">
          <Form.Group controlId="formAge">
            <Form.Control
              type="number"
              name="age"
              placeholder="Age (year)"
              onChange={handleChange}
              value={userData.age}
              className={errors.age ? "is-invalid" : ""}
            />
            {errors.age && (
              <small className="text-danger">{errors.age}</small>
            )}
          </Form.Group>
        </Col>
        <Col md={6} className="form-field">
          <Form.Group controlId="formBlood">
            <Form.Control
              type="text"
              name="blood"
              placeholder="Blood Group"
              onChange={handleChange}
              value={userData.blood}
              className={errors.blood ? "is-invalid" : ""}
            />
            {errors.blood && (
              <small className="text-danger">{errors.blood}</small>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="form-field">
          <Form.Group controlId="formHeight">
            <Form.Control
              type="number"
              name="height"
              placeholder="Height (Cm)"
              onChange={handleChange}
              value={userData.height}
              className={errors.height ? "is-invalid" : ""}
            />
            {errors.height && (
              <small className="text-danger">{errors.height}</small>
            )}
          </Form.Group>
        </Col>
        <Col md={6} className="form-field">
          <Form.Group controlId="formWeight">
            <Form.Control
              type="text"
              name="weight"
              placeholder="Weight (Kg)"
              onChange={handleChange}
              value={userData.weight}
              className={errors.weight ? "is-invalid" : ""}
            />
            {errors.weight && (
              <small className="text-danger">{errors.weight}</small>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6} className="form-field">
          <Form.Group
            controlId="formGender"
            className={errors.gender ? "is-invalid" : ""}
          >
            <Form.Label>Gender</Form.Label>
            <div className="d-flex justify-content-start">
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                id="genderMale"
                value="male"
                checked={userData.gender === "male"}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                id="genderFemale"
                value="female"
                checked={userData.gender === "female"}
                onChange={handleChange}
              />
            </div>
            {errors.gender && (
              <small className="text-danger">{errors.gender}</small>
            )}
          </Form.Group>
        </Col>
        <Col md={6} className="form-field">
          <Form.Group
            controlId="formMaritalStatus"
            className={errors.maritalStatus ? "is-invalid" : ""}
          >
            <Form.Label>Marital Status</Form.Label>
            <div className="d-flex justify-content-start">
              <Form.Check
                type="radio"
                label="Single"
                name="maritalStatus"
                id="statusSingle"
                value="single"
                checked={userData.maritalStatus === "single"}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Married"
                name="maritalStatus"
                id="statusMarried"
                value="married"
                checked={userData.maritalStatus === "married"}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Divorced"
                name="maritalStatus"
                id="statusDivorced"
                value="divorced"
                checked={userData.maritalStatus === "divorced"}
                onChange={handleChange}
              />
            </div>
            {errors.maritalStatus && (
              <small className="text-danger">{errors.maritalStatus}</small>
            )}
          </Form.Group>
        </Col>
      </Row>
    </Form>
  </Container>
  );
};

export default FirstStep;
