import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";

import CheckoutStepper from "./components/Check_Stepper";

const CHECKOUT_STEPS = [
  {
    name: "User Information",
    Component: () => (
      <FirstStep />
    ),
  },
  {
    name: "Address Details",
    Component: () => (
      <SecondStep />
    ),
  },
  {
    name: "Thank You",
    Component: () => (
      <ThirdStep />
    ),
  }
];

function App() {
  return (
    <div className="stepper-box">
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  );
}

export default App;
