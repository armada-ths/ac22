import React, { FC, FormEvent, useState } from "react";
import AccountForm from "./Forms/AccountForm";
import StudyForm from "./Forms/StudyForm";
import "./MultiStepForm.css";
import { useMultiStepForm } from "./MultiStepHook/useMultiStepForm";
import AuthButton from "../AuthButton/AuthButton";
import FormStepCounter from "../FormStepCounter/FormStepCounter";
import JobPreference from "./Forms/JobPreference";
export interface FormData {
  name: string;
  email: string;
  password: string;
  studyProgramme: string;
  gender: string;
  yearOfStudy: string;
  completionYear: string;
  repeatPassword: string;
  jobInterests: string[];
}

const START_DATA: FormData = {
  name: "",
  email: "",
  password: "",
  studyProgramme: "",
  gender: "",
  yearOfStudy: "",
  completionYear: "",
  repeatPassword: "",
  jobInterests: [],
};

interface Props {
  registerSubmit: (data: FormData) => void;
}

const MultiStepForm: FC<Props> = ({ registerSubmit }) => {
  const [formData, setFormData] = useState(START_DATA);

  const updateFields = (data: Partial<FormData>) => {
    setFormData((old) => {
      return { ...old, ...data };
    });
  };

  const isValidEmail = (input: any) => {
    if (
      /^\w+([-+.']\w+)*@?(kth\.se)$/.test(input) ||
      /^\w+([-+.']\w+)*@?(ac22\.se)$/.test(input)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const { steps, currentStep, step, isFirst, prevStep, nextStep, isLast } =
    useMultiStepForm([
      <AccountForm {...formData} updateField={updateFields} />,
      <StudyForm {...formData} updateField={updateFields} />,
      <JobPreference {...formData} updateField={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLast) return nextStep();
    registerSubmit(formData);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={onSubmit} className="form-content">
          <div>
            <FormStepCounter
              currentStep={currentStep + 1}
              steps={steps.length}
            />
          </div>
          {step}
          <div className="button-container">
            <AuthButton
              buttonText={isLast ? "Complete Registration" : "Next"}
              buttonType="submit"
              active={
                formData.password.length >= 8 &&
                isValidEmail(formData.email)
                  ? true
                  : false
              }
              onButtonClick={() => {}}
            />

            {!isFirst && (
              <AuthButton
                onButtonClick={prevStep}
                buttonText="Back"
                active={true}
                buttonType="button"
              />
            )}
          </div>
        </form>
      </div>
      {isFirst && (
        <div className="login-link">
          Already have an account? <a href="/">Login</a>
        </div>
      )}
    </>
  );
};

export default MultiStepForm;
