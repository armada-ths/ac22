import React, {FC} from "react";
import { Company } from "../../models/DummyModel";
import { ExhibitorCompanies } from "../../models/ExhibitorConst";
import alstomJobs from "/home/redve/Koder/Armada/ac22/src/assets/StatsJobs/alstom_jobs.png";
import diversityJobs from "../assets/StatsJobs/diversity_jobs.png";
import epirocJobs from "../assets/StatsJobs/epiroc_jobs.png";
import gartnerJobs from "../assets/StatsJobs/gartner_jobs.png";
import grangesJobs from "../assets/StatsJobs/granges_jobs.png";
import infrontJobs from "../assets/StatsJobs/infront_jobs.png";
import riseJobs from "../assets/StatsJobs/rise_jobs.png";
import siemensEnergyJobs from "../assets/StatsJobs/siemensenergy_jobs.png";
import siemensJobs from "../assets/StatsJobs/siemens_jobs.png";
import sopraSteriaJobs from "../assets/StatsJobs/soprasteria_jobs.png";
import sppJobs from "../assets/StatsJobs/spp_jobs.png";
import zwapgridJobs from "../assets/StatsJobs/zwapgrid_jobs.png";
import alstomProg from "../assets/StatsProgram/alstom_program.png";
import diversityProg from "../assets/StatsProgram/diversity_program.png";
import epirocProg from "../assets/StatsProgram/epiroc_program.png";
import gartnerProg from "../assets/StatsProgram/gartner_program.png";
import grangesProg from "../assets/StatsProgram/granges_program.png";
import infrontProg from "../assets/StatsProgram/infront_program.png";
import riseProg from "../assets/StatsProgram/rise_program.png";
import siemensEnergyProg from "../assets/StatsProgram/siemensenergy_program.png";
import siemensProg from "../assets/StatsProgram/siemens_program.png";
import sopraSteriaProg from "../assets/StatsProgram/soprasteria_program.png";
import sppProg from "../assets/StatsProgram/spp_program.png";
import zwapgridProg from "../assets/StatsProgram/zwapgrid_program.png";
import alstomYear from "../assets/StatsYear/alstom_year.png";
import diversityYear from "../assets/StatsYear/diversity_year.png";
import epirocYear from "../assets/StatsYear/epiroc_year.png";
import gartnerYear from "../assets/StatsYear/gartner_year.png";
import grangesYear from "../assets/StatsYear/granges_year.png";
import infrontYear from "../assets/StatsYear/infront_year.png";
import riseYear from "../assets/StatsYear/rise_year.png";
import siemensEnergyYear from "../assets/StatsYear/siemensenergy_year.png";
import siemensYear from "../assets/StatsYear/siemens_year.png";
import sopraSteriaYear from "../assets/StatsYear/soprasteria_year.png";
import sppYear from "../assets/StatsYear/spp_year.png";
import zwapgridYear from "../assets/StatsYear/zwapgrid_year.png";
import { useNavigate } from "react-router-dom";
import "./company-stat-view.css"
interface Props {
    company: string;
}
    
const CompanyStatView: FC <Props> = (props) => {

    function getJobPic(company: string): any{
        for (let index = 0; index < ExhibitorCompanies.length; index++) {  
            console.log(props.company)
            if(ExhibitorCompanies[index].companyName?.includes(props.company)) 
            {
                return ExhibitorCompanies[index].jobsStat;
            }
        }
    }

    function getYearPic(company: string): any{
        for (let index = 0; index < ExhibitorCompanies.length; index++) {
            if(ExhibitorCompanies[index].companyName?.includes(props.company)) 
            {
                return ExhibitorCompanies[index].yearStat;
            }
        }
    }

    
    function getProgPic(company: string): any{
        for (let index = 0; index < ExhibitorCompanies.length; index++) {
            if(ExhibitorCompanies[index].companyName?.includes(props.company)) 
            {
                return ExhibitorCompanies[index].progStat;
            }
        }
    }

    function getParticipants(company: string): any{
        for (let index = 0; index < ExhibitorCompanies.length; index++) {
            if(ExhibitorCompanies[index].companyName?.includes(props.company)) 
            {
                return ExhibitorCompanies[index].numberOfParticipants;
            }
        }
    }

    function getStallRating(company: string): any{
        for (let index = 0; index < ExhibitorCompanies.length; index++) {
            if(ExhibitorCompanies[index].companyName?.includes(props.company)) 
            {
                return ExhibitorCompanies[index].averageStallrating;
            }
        }
    }

    function getExperienceRating(company: string): any{
        for (let index = 0; index < ExhibitorCompanies.length; index++) {
            if(ExhibitorCompanies[index].companyName?.includes(props.company)) 
            {
                return ExhibitorCompanies[index].experienceStallrating;
            }
        }
    }


    

    return (
        <div style={{width: "100%"}}>
            <h1 className="header-stats">Statistics</h1>
            <div className="statisticParticipants">
                <h2>Participants for this company:{getParticipants(props.company)}</h2>
            </div>
            <div className="statisticStallRating">
                <h2>Average stall rating:{getStallRating(props.company)}</h2>
            </div>
            <div className="statisticExperienceRating">
                <h2>Average experience rating:{getExperienceRating(props.company)}</h2>
            </div>
            <div className="statisticJobs">
                <h2 className="inner-header" style={{paddingLeft: "48%"}}>Jobs</h2>
                <div className="img-container"><img src={getJobPic(props.company)}/></div>
                
            </div>
            <div className="statisticYear">
                <h2 style={{paddingLeft: "48%"}}>Year</h2>
                <div className="img-container"><img src = {getYearPic(props.company)}/></div>
            </div>
            <div className="statisticProg">
                <h2 style={{paddingLeft: "46%"}}>Programme</h2>
               <div className="img-container"><img src = {getProgPic(props.company)}/></div>
            </div>
        </div>
    );
};


export default CompanyStatView;