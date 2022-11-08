import React, { FC } from "react";

interface Props {
  currentStep: number;
  steps: number;
}

const FormStepCounter: FC<Props> = ({ currentStep, steps }) => {
  const stepArray = new Array(steps).fill(null).map((_, i) => i + 1);

  return (
    <div>
        {stepArray.map((step, i) => {
            return (
                <div key={i} className={`step ${currentStep === i ? 'active' : ''}`}>
                    {step}
                </div>
            ))}}
    </div>
);
};

export default FormStepCounter;
