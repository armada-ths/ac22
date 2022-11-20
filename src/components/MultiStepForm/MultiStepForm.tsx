import React, { FC, FormEvent, useState } from "react";
import AccountForm from "./Forms/AccountForm";
import StudyForm from "./Forms/StudyForm";
import "./MultiStepForm.css";
import { useMultiStepForm } from "./MultiStepHook/useMultiStepForm";
import AuthButton from "../AuthButton/AuthButton";
import FormStepCounter from "../FormStepCounter/FormStepCounter";
import JobPreference from "./Forms/JobPreference";
import { RegisterInfo } from "../../assets/RegisterInfo";

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
    if ((isFirst) && !(formData.password === formData.repeatPassword)) return;
    else if (!isLast) return nextStep();
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
            {isFirst ? <div className="account-email-info">
              <RegisterInfo />
              <span style={{ marginLeft: "4px" }}>Please use an @kth.se email for registation</span>
            </div> : ""}
            <AuthButton
              buttonText={isLast ? "Complete Registration" : "Next"}
              buttonType="submit"
              active={
                formData.password.length >= 8 &&
                  isValidEmail(formData.email) && formData.password === formData.repeatPassword
                  ? true
                  : false
              }
              onButtonClick={() => { }}
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
