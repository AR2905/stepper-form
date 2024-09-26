/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { InfoContext } from "../ContextApi/InfoContext";

const ThirdStep = () => {
  const { userData, addressData } = useContext(InfoContext);

  // Array to hold the data in the desired order
  const AllInformation = [
    { label: "Name", value: userData.firstName + " " + userData.middleName + " " + userData.lastName  },
    { label: "First Name", value: userData.firstName },
    { label: "Middle Name", value: userData.middleName },
    { label: "Last Name", value: userData.lastName },
    { label: "Phone Number", value: userData.phoneNumber },
    { label: "Email", value: userData.email },
    { label: "Age", value: userData.age },
    { label: "Birthday", value: userData.birthday },
    { label: "Blood Group", value: userData.blood },
    { label: "Weight", value: userData.weight },
    { label: "Height", value: userData.height },
    { label: "Gender", value: userData.gender },
    { label: "Marital Status", value: userData.maritalStatus },
    { label: "Address Line 1", value: addressData.addressLine1 },
    { label: "Address Line 2", value: addressData.addressLine2 },
    { label: "City", value: addressData.city },
    { label: "State", value: addressData.state },
    { label: "Country", value: addressData.country },
    { label: "Pin Code", value: addressData.pinCode },
  ];

  return (
    <Container fluid="lg" className="information-box">
      <h2 className="success-msg">Data added successfully</h2>

      {AllInformation.map((item, index) => (
        <Row className="Information" key={index}>
          <Col>{item.label}</Col>
          <Col className="data-value">{item.value || "N/A"}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default ThirdStep;
