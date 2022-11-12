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
      <div>
        <span className="select-container">
          <select
            className="select-option"
            placeholder="Gender..."
            onChange={(e) => updateField({ gender: e.target.value })} required>
            <option className="option-text" value="" disabled selected>
              Gender..
            </option>
            {Genders.map((gender) => {
              return <option className="option-text" value={gender} key={gender}>{gender}</option>;
            })}
          </select>
        </span>
      </div>
      <div>
        <div className="test">
          <select
            className="select-option"
            placeholder="Study Programme..."
            onChange={(e) => updateField({ studyProgramme: e.target.value })} required>
            <option value="" disabled selected className="option-text">
              Study programme..
            </option>
            {StudyProgramme.map((programme) => {
              return <option className="option-text" value={programme} key={programme}>{programme}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="double-select">
      <div>
        <select
          className="select-option1"
          placeholder="Year of study..."
          onChange={(e) => updateField({ yearOfStudy: e.target.value })} required>
          <option value="" disabled selected className="option-text">
            Year of study..
          </option>
          {YearOfStudy.map((year) => {
            return <option className="option-text" value={year} key={year}>{year}</option>;
          })}
        </select>
      </div>
      <span className="dash">—</span>
      <div>
        <select
          className="select-option1"
          placeholder="Completion year..."
          onChange={(e) => updateField({ completionYear: e.target.value })} required>
          <option className="option-text" value="" disabled selected>
            Completion year..
          </option>
          {CompletionYear.map((year) => {
            return <option className="option-text" value={year} key={year}>{year}</option>;
          })}
        </select>
      </div>
      </div>
    </div>
  );
};

export default StudyForm;
