import React, { FC } from "react";
import "./FormStepCounter.css";
interface Props {
  currentStep: number;
  steps: number;
}

const FormStepCounter: FC<Props> = ({ currentStep, steps }) => {

  return (
    <div className="step-container">
        <div className={currentStep === 1 ? "current-step" : "prev-step"}>1</div>
        <div className={currentStep === 2 ? "current-step" : "next-step"}>2</div>
    </div>
);
};

export default FormStepCounter;
