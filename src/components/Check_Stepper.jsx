/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { InfoContext } from "../ContextApi/InfoContext";
import { fieldMappings, validateFields } from "../Features/Validation";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const { userData, addressData, setErrors} = useContext(InfoContext);
  const [currentStep, setCurrentStep] = useState(1);

  // === Handle Next button === //
  const handleNext = () => {
    let newErrors = {};
    if (currentStep === 1) {
      newErrors = validateFields(userData, fieldMappings[1]);
    } else if (currentStep === 2) {
      newErrors = validateFields(addressData, fieldMappings[2]);
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setCurrentStep((prevStep) => Math.min(prevStep + 1, stepsConfig.length));
    setErrors({});
  };


  // === Handle Previous button === //
  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  useEffect(() => {
    if (!stepsConfig.length) return;
    setErrors({});
  }, [currentStep]);

  if (!stepsConfig.length) {
    return null;
  }

  return (
    <Container fluid="lg">
      <div className="stepper">
        {stepsConfig.map((step, index) => (
          <div
            key={step.name}
            className={`step ${currentStep > index + 1 ? "complete" : ""} ${
              currentStep === index + 1 ? "active" : ""
            }`}
          >
            <div className="step-wrapper">
              <div className="step-number">
                {currentStep > index + 1 ? <span>&#10003;</span> : index + 1}
              </div>
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
        <div className="progress-bar">
          <div className="progress" />
        </div>
      </div>

      {ActiveComponent && <ActiveComponent />}


      {/* -- Navigation buttons -- */}
      <div className="stepper-navigation">
      {
       (currentStep === 3) ? 
       <></> : 
       <>
       <Button
          className="btn"
          variant={currentStep > 1 ? "primary" : "secondary"}
          onClick={handlePrevious}
          disabled={currentStep <= 1}
        >
          Previous
        </Button>

        <Button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </Button>
       </>  
      }
       
      </div>
    </Container>
  );
};

export default CheckoutStepper;
