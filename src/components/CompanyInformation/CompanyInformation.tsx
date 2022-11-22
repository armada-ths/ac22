import React, { FC } from "react";
import "./CompanyInformation.css";

import { CompanyInformationMini } from "../CompanyInformationBox/CompanyInformationBox";

import { Coordinator, ExtraInfo } from "../../models/DummyModel";

/**
 * coordinators:    an array of the coordinators of the company
 * offerings:       an array of what the company has to offer
 * askAbout:        an array of what a student could ask about
 * extraInfo:       an array of extra information such as
 *                  whether food will be served or not
 */
interface Props {
  coordinators: Coordinator[];
  offerings: string[];
  askAbout: string[];
  extraInfo: ExtraInfo[];
}

const CompanyInformation: FC<Props> = ({
  coordinators,
  offerings,
  askAbout,
  extraInfo,
}) => {
  return (
    (coordinators.length !== 0 && (
      <div className="company-info">
        <div className="mini-flex">
          <div className="title">EVENT COORDINATORS</div>
          <div className="company-coordinator-box">
            {coordinators.map((coordinator) => {
              return (
                <div className="company-coordinator" key={coordinator.name}>
                  <div>
                    <div className="name">{coordinator.name}</div>
                    <div className="mail">{coordinator.mail}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <CompanyInformationMini
          title="JOB OFFERINGS"
          information={offerings}
        ></CompanyInformationMini>
      </div>
    )) || (
      <div className="company-info">
        <CompanyInformationMini
          title="JOB OFFERINGS"
          information={offerings}
        ></CompanyInformationMini>
      </div>
    )
  );
};

export default CompanyInformation;
