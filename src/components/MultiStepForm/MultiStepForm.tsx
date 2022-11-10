import React, { FC, FormEvent, useState } from "react";
import AccountForm from "./Forms/AccountForm";
import StudyForm from "./Forms/StudyForm";
import "./MultiStepForm.css";
import { useMultiStepForm } from "./MultiStepHook/useMultiStepForm";
import AuthButton from "../AuthButton/AuthButton";
import FormStepCounter from "../FormStepCounter/FormStepCounter";
interface FormData {
  email: string;
  password: string;
  studyProgramme: string;
  gender: string;
  yearOfStudy: string;
  completionYear: string;
};

const START_DATA: FormData = {
  email: "",
  password: "",
  studyProgramme: "",
  gender: "",
  yearOfStudy: "",
  completionYear: "",
};

interface Props {}

const MultiStepForm: FC<Props> = () => {
  const [formData, setFormData] = useState(START_DATA);

  const updateFields = (data: Partial<FormData>) => {
    setFormData((old) => {
      return { ...old, ...data };
    });
  };

  const { steps, currentStep, step, isFirst, prevStep, nextStep, isLast } =
    useMultiStepForm([
      <AccountForm {...formData} updateField={updateFields} />,
      <StudyForm {...formData} updateField={updateFields} />,
      /*<JobPreference {...formData} updateField={updateFields} />,*/
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!isLast) return nextStep();
    console.log(formData);
  };

  return (
    <div className="screen">
      <div className="form-container">
        <form onSubmit={onSubmit} className="form-content">
          <div className="steps">
            <FormStepCounter currentStep={currentStep + 1} steps={steps.length} />
          </div>
          {step}
          <div className="button-container">
            {/*!isFirst && (
              <AuthButton
                onButtonClick={prevStep}
                buttonText="Back"
                active={true}
                buttonType="button"
              />
            )*/}

            <AuthButton
              buttonText={isLast ? "Complete Registration" : "Next"}
              buttonType="submit"
              active={true}
              onButtonClick={() => {}}
            />
          </div>
        </form>
      </div>

      {isFirst && <div className="login-link">Already have an account? <a href="/Login">Login</a></div>}
    </div>
  );
};

export default MultiStepForm;
