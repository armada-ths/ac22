import React, { FC, FormEvent, useState } from "react";
import AccountForm from "./Forms/AccountForm";
import StudyForm from "./Forms/StudyForm";
import "./MultiStepForm.css";
import { useMultiStepForm } from "./MultiStepHook/useMultiStepForm";
import AuthButton from "../AuthButton/AuthButton";

type FormData = {
  email: string,
  password: string,
  studyProgram: string,
  gender: string,
  year: string,
  completionYear: string,
  positionInterests: string,
}

const START_DATA: FormData = {
  email: "",
  password: "",
  studyProgram: "",
  gender: "",
  year: "",
  completionYear: "",
  positionInterests: ""
}

interface Props {}

const MultiStepForm: FC<Props> = () => {
  const [formData, setFormData] = useState<FormData>(START_DATA);

  const updateFields = (data: Partial<FormData>) => {
    setFormData(old => {
      return {...old, ...data}
    });
  }

  const { 
    steps, 
    currentStep, 
    step, 
    isFirst, 
    prevStep, 
    nextStep, 
    isLast } = 
      useMultiStepForm([
        <AccountForm email="" data={formData} updateFields={updateFields}/>,
        <StudyForm data={formData} updateFields={updateFields}/>
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="screen">
      <div className="form-container">
        <form onSubmit={onSubmit} className="form-content">
          <div>
            {currentStep + 1} / {steps.length}
          </div>
          {step}
          <div>
            {!isFirst && (
              <button onClick={prevStep} type="button">
                {" "}
                Back{" "}
              </button>
            )}
            
            <AuthButton buttonText={isLast ? "Complete Registration" : "Next"} buttonType="submit" active={true} onButtonClick={() => {}}/>

          </div>
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
