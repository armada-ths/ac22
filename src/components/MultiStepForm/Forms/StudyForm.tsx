import React, { FC } from "react";
import "./Forms.css";
import {
  Genders,
  CompletionYear,
  YearOfStudy,
  StudyProgramme,
} from "./StudyInformation";
import DropdownMenu from "../../DropdownMenu/DropdownMenu";
import "./Forms.css";

type AccountData = {
  studyProgramme: string;
  gender: string;
  yearOfStudy: string;
  completionYear: string;
};

interface Props extends AccountData {
  updateField: (data: Partial<AccountData>) => void;
}

const StudyForm: FC<Props> = ({
  studyProgramme,
  gender,
  yearOfStudy,
  completionYear,
  updateField,
}) => {
  return (
    <div className="form-content">
      <h2>Education</h2>
      <div className="test">
        <select
          className="select-option"
          placeholder="Gender..."
          onChange={(e) => updateField({ gender: e.target.value })}
          required>
          <option className="option-text" value="" disabled selected>
            Gender..
          </option>
          {Genders.map((genderOption) => {
            return (
              <option className="option-text" value={genderOption} key={genderOption} selected={genderOption === gender}>
                {genderOption}
              </option>
            );
          })}
        </select>
      </div>
      <div className="test">
        <select
          className="select-option"
          placeholder="Study Programme..."
          onChange={(e) => updateField({ studyProgramme: e.target.value })}
          required>
          <option value="" disabled selected className="option-text">
            Study programme..
          </option>
          {StudyProgramme.map((programme) => {
            return (
              <option
                className="option-text"
                value={programme}
                key={programme}
                selected={programme === studyProgramme}>
                {programme}
              </option>
            );
          })}
        </select>

      </div>

      <div className="test">
        <select
          className="select-option"
          placeholder="Year of study..."
          onChange={(e) => updateField({ yearOfStudy: e.target.value })}
          required>
          <option value="" disabled selected className="option-text">
            Year of study..
          </option>
          {YearOfStudy.map((year) => {
            return (
              <option className="option-text" value={year} key={year} selected={year === yearOfStudy}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <div className="test">
        <select
          className="select-option"
          placeholder="Completion year..."
          onChange={(e) => updateField({ completionYear: e.target.value })}
          required>
          <option className="option-text" value="" disabled selected>
            Completion year..
          </option>
          {CompletionYear.map((year) => {
            return (
              <option className="option-text" value={year} key={year} selected={year === completionYear}>
                {year}
              </option>
            );
          })}
        </select>
      </div>

    </div>
  );
};

export default StudyForm;
