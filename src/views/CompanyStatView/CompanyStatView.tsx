import React, {FC} from "react";
import { Company } from "../../models/DummyModel";
import { ExhibitorCompanies } from "../../models/ExhibitorConst";


interface Props {
    company: string;
}
    

const CompanyStatView: FC <Props> = (props) => {


    function getJobPic(company: string): string{
        ExhibitorCompanies.forEach(element => {
            if(element.name.search(company)) {
                return element.jobsStat;
            }
        })
        return "";
    }

    function getYearPic(company: string): string{
        ExhibitorCompanies.forEach(element => {
            if(element.name.search(company)) {
                return element.yearStat;
            }
        })
        return "";
    }

    function getProgPic(company: string): string{
        ExhibitorCompanies.forEach(element => {
            if(element.name.search(company)) {
                return element.progStat;
            }
        })
        return "";
    }
    

    return (
        <div>
            <h1>Statistics</h1>
            <div className="statisticJobs">
                <h2>Jobs</h2>
                <img src = {getJobPic(props.company)}/>
            </div>
            <div className="statisticYear">
                <h2>Year</h2>
                <img src = {getYearPic(props.company)}/>
            </div>
            <div className="statisticProg">
                <h2>Programme</h2>
                <img src = {getProgPic(props.company)}/>
            </div>
        </div>
    );
};


export default CompanyStatView;