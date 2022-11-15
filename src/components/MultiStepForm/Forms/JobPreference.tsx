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
      console.log("checked");
      updateField({ jobInterests: [...jobInterests, value] });
    } else {
      console.log("unchecked");
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
    <div className="form-content">
      <h2>Final Step!</h2>

      <div className="subheading">Job Interests</div>
      {twoColumnPositions.map(([positionLeft, positionRight]) => (
        <div className="checkboxes-row">
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox"
              id={positionLeft}
              value={positionLeft}
              onClick={(e) => handleChange(e)}
            />
            <label htmlFor={positionLeft}>{positionLeft}</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox"
              id={positionRight}
              value={positionRight}
              onClick={(e) => handleChange(e)}
            />
            <label htmlFor={positionRight}>{positionRight}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobPreference;
