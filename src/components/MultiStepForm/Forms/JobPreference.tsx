import React, { FC } from "react";
import "./Forms.css";
import { PositionInterest } from "./StudyInformation";
type AccountData = {
  jobInterests: string[];
};

interface Props extends AccountData {
  updateField: (data: Partial<AccountData>) => void;
}

const JobPreference: FC<Props> = ({ jobInterests, updateField }) => {
  const handleChange = (e: any) => {
    const { value, checked } = e.target;
    if (checked) {
      updateField({ jobInterests: [...jobInterests, value] });
    } else {
      updateField({ jobInterests: jobInterests.filter((i) => i !== value) });
    }
  };

  const twoColumnPositions: string[][] = PositionInterest.reduce(
    (acc: string[][], current, index, array) =>
      2 * index < array.length
        ? acc.concat([array.slice(2 * index, 2 * index + 2)])
        : acc,
    []
  );

  return (
    <div className="form-content checkboxes-margin">
      <h2>Final Step!</h2>

      <div className="subheading">Job Interests</div>
      {twoColumnPositions.map(([jobPositionL, jobPositionR]) => (
        <div className="checkboxes-row">
          <div className="checkbox-container">
            <input
              checked={jobInterests.includes(jobPositionL)}
              type="checkbox"
              className="checkbox"
              id={jobPositionL}
              value={jobPositionL}
              onClick={(e) => handleChange(e)}
            />
            <label htmlFor={jobPositionL}>{jobPositionL}</label>
          </div>
          <div className="checkbox-container right-col-pad">
            <input
              checked={jobInterests.includes(jobPositionR)}
              type="checkbox"
              className="checkbox"
              id={jobPositionR}
              value={jobPositionR}
              onClick={(e) => handleChange(e)}
            />
            <label htmlFor={jobPositionR}>{jobPositionR}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobPreference;
