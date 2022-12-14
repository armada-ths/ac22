import { Company, Tickets } from "./DummyModel";

import lunch_img from "../assets/CompanyInformation/lunch-img.svg";
import waitlist_img from "../assets/CompanyInformation/waitlist-img.svg";
import alstom from "../assets/CompanyLogos/alstom.jpeg";
import diversity from "../assets/CompanyLogos/diversity.png";
import epiroc from "../assets/CompanyLogos/epiroc.png";
import fmv from "../assets/CompanyLogos/fmv-cropped.jpeg";
import gartner from "../assets/CompanyLogos/Gartner-G.png";
import granges from "../assets/CompanyLogos/granges-cropped.png";
import infront from "../assets/CompanyLogos/infront-cropped.png";
import rise from "../assets/CompanyLogos/rise.png";
import siemensEnergy from "../assets/CompanyLogos/siemens-energy-cropped.png";
import siemens from "../assets/CompanyLogos/siemens.png";
import sopraSteria from "../assets/CompanyLogos/sopra-steria.jpeg";
import spp from "../assets/CompanyLogos/spp-cropped.png";
import zwapgrid from "../assets/CompanyLogos/zwapgrid-cropped.jpg";
import alstromcr from "../assets/CompanyLogos/alstom-cropped.png";
import alstomJobs from "../assets/StatsJobs/alstom_jobs.png";
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

const ExhibitorCompanies: Company[] = [
  {
    name: "Alstom Transport AB",
    companyName: "Alstom",
    image: alstromcr,
    jobsStat: alstomJobs,
    progStat: alstomProg,
    yearStat: alstomYear,
    numberOfParticipants:20,
    experienceStallrating:8.6,
    averageStallrating: 8.5,
    id: 0,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Anna Mared", mail: "anna.mared@alstomgroup.com", img: "null" },
    ],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    offerings: [
      "Full Time Job",
      "Masters Thesis",
      "Internship",
      "Bachelor Thesis",
      "Part Time Job",
      "Summer Job",
      "Trainee",
    ],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 12,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "From high-speed trains, metros, monorails, trams, to turnkey systems, services, infrastructure, signaling and digital mobility, Alstom offers its diverse customers the broadest portfolio in the industry. 150,000 vehicles in commercial service worldwide attest to the company???s proven expertise in project management, innovation, design and technology. In 2021, the company was included in the Dow Jones Sustainability Indices, World and Europe, for the 11th consecutive time.",
  },
  {
    name: "Epiroc",
    companyName: "Epiroc",
    image: epiroc,
    id: 1,
    experienceStallrating:8.5,
    averageStallrating: 8.4,
    jobsStat: epirocJobs,
    progStat: epirocProg,
    yearStat: epirocYear,
    numberOfParticipants:42,
    tags: ["workshop", "mingle"],
    coordinators: [
      {
        name: "Klara Petersen",
        mail: "klara.petersen@epiroc.com",
        img: "null",
      },
    ],
    offerings: [
      "Full Time Job",
      "Masters Thesis",
      "Internship",
      "Bachelor Thesis",
      "Part Time Job",
      "Summer Job",
    ],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Gr??ten, Nymble",
    stall: 30,
    starred: true,
    collectedTickets: 10,
    aboutUs:
      "Epiroc is a vital part of a sustainable society and a global productivity partner for mining and infrastructure customers. We develop and provide innovative and safe equipment, such as drill rigs, rock excavation and construction equipment and tools for surface and underground applications. We also offer world-class service and other aftermarket support as well as solutions for automation, digitalization and electrification. Epiroc is based in Stockholm, Sweden and has more than 15 500 passionate employees supporting and collaborating with customers in more than 150 countries.",
  },
  {
    name: "FMV F??rsvarets materielverk",
    companyName: "Fmv",
    image: fmv,
    jobsStat: "",
    progStat: "",
    yearStat: "",
    experienceStallrating:0,
    averageStallrating: 0,
    id: 2,
    tags: ["workshop", "mingle"],
    coordinators: [],
    offerings: ["Full Time Job"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "KTH Library",
    stall: 92,
    starred: false,
    collectedTickets: 0,
    aboutUs:
      "The Swedish Defence Materiel Administration, FMV, is a governmental agency acting under the Ministry of Defence. We make sure the Swedish Armed Forces have the equipment and logistic services they need to execute their mission. That is our contribution to a stronger defense.",
  },
  {
    name: "Gartner",
    companyName: "Gartner",
    image: gartner,
    numberOfParticipants: 13,
    averageStallrating:8.0,
    experienceStallrating:8.0,
    jobsStat: gartnerJobs,
    progStat: gartnerProg,
    yearStat: gartnerYear,
    id: 3,
    tags: ["workshop", "mingle"],
    coordinators: [
      {
        name: "Stephanie Shull",
        mail: "stephanie.shull@gartner.com",
        img: "null",
      },
    ],
    offerings: ["Full Time Job", "Internship"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "K??rbokhandeln",
    stall: 145,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Founded in 1979, we are the leading research and advisory company. We???ve expanded well beyond our flagship technology research to provide senior leaders across the enterprise with the indispensable business insights, advice and tools they need to achieve their mission-critical priorities and build the organizations of tomorrow. Together with our clients, we fuel the future of business so that a more successful world takes shape. Our clients turn to us for indispensable management and technology insights, advice and tools, delivered through our three lines of business.",
  },
  {
    name: "Gr??nges",
    companyName: "Granges",
    image: granges,
    averageStallrating:8.2,
    experienceStallrating:8.3,
    numberOfParticipants: 12,
    jobsStat: grangesJobs,
    progStat: grangesProg,
    yearStat: grangesYear,
    id: 4,
    tags: ["workshop", "mingle"],
    coordinators: [
      {
        name: "Annika Gustavsson",
        mail: "annika.gustavsson@granges.com",
        img: "null",
      },
    ],
    offerings: [
      "Full Time Job",
      "Masters Thesis",
      "Internship",
      "Part Time Job",
      "Summer Job",
      "Bachelor Thesis",
    ],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Salongen",
    stall: 79,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Gr??nges is an aluminium technology company who drives the development of lighter, smarter and more sustainable aluminium products and solutions. The company offers advanced materials that enhance efficiency in the customers??? manufacturing process and the performance of the final products. Gr??nges??? innovative engineering has transformed the industry for more than 125 years, Gr??nges has production facilities and conducts sales on three continents, Asia, Europe and Americas.",
  },
  {
    name: "Infront Financial Technology",
    companyName: "Infront",
    image: infront,
    numberOfParticipants: 49,
    averageStallrating:9.2,
    experienceStallrating:8.6,
    jobsStat: infrontJobs,
    progStat: infrontProg,
    yearStat: infrontYear,
    id: 5,
    tags: ["workshop", "mingle"],
    coordinators: [
      {
        name: "Miriam Larios",
        mail: "miriam.larios@infrontfinance.com",
        img: "null",
      },
    ],
    offerings: ["Full Time Job"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "K??ket, Nymble",
    stall: 147,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Infront was started with the desire to challenge the status quo and build a smarter alternative to financial market data technology. Today, we offer a powerful combination of global market data, electronic trading, news, and analytics along with data and feed solutions, solutions for portfolio management and advisory, regulatory compliance as well as publication and distribution solutions. All built to be modular and scalable to suit your needs.",
  },
  {
    name: "RISE Research Institutes of Sweden",
    companyName: "Rise",
    image: rise,
    averageStallrating:8.1,
    experienceStallrating:8.2,
    jobsStat: riseJobs,
    progStat: riseProg,
    yearStat: riseYear,
    numberOfParticipants: 27,
    id: 6,
    tags: ["workshop", "mingle"],
    coordinators: [],
    offerings: ["Bachelor Thesis", "Masters Thesis", "Internship"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "K??rbokhandeln, Nymble",
    stall: 6,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "RISE is a gathering of the skills and personalities required for the transition to a sustainable economy, society and planet. As the research institutes of Sweden, we devise solutions that can make a difference here and now, while working on research areas and technologies that will be vital for tomorrow. This combination of roles and competencies gives us and others better opportunities to make a difference in a complex world. It also makes RISE a challenging and varied workplace, with near boundless opportunities. Help us towards a better world: ri.se/student",
  },
  {
    name: "Siemens Energy AB",
    companyName: "Siemensenergy",
    image: siemensEnergy,
    averageStallrating:9.3,
    experienceStallrating:9.2,
    jobsStat: siemensEnergyJobs,
    progStat: siemensEnergyProg,
    yearStat: siemensEnergyYear,
    numberOfParticipants: 33,
    id: 7,
    tags: ["workshop", "mingle"],
    coordinators: [
      {
        name: "Johanna Ylip????",
        mail: "johanna.ylipaeae.ext@siemens-energy.com",
        img: "null",
      },
    ],
    offerings: [
      "Bachelor Thesis",
      "Masters Thesis",
      "Trainee",
      "Full Time Job",
    ],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Entrance, KTHB",
    stall: 80,
    starred: true,
    collectedTickets: 10,
    aboutUs:
      "Siemens Energy works with its customers and partners on energy systems for the future, thus supporting the transition to a more sustainable world. With its portfolio of products, solutions and services, Siemens Energy covers almost the entire energy value chain ??? from power generation and transmission to storage. The portfolio includes conventional and renewable energy technology, such as gas and steam turbines, hybrid power plants operated with hydrogen, and power generators and transformers. More than 50 percent of the portfolio has already been decarbonized.",
  },
  {
    name: "Siemens AB",
    companyName: "Siemens",
    image: siemens,
    averageStallrating:8.1,
    experienceStallrating:7.9,
    jobsStat: siemensJobs,
    progStat: siemensProg,
    yearStat: siemensYear,
    numberOfParticipants: 23,
    id: 8,
    tags: ["workshop", "mingle"],
    coordinators: [
      {
        name: "Hel??ne Stigsson",
        mail: "helene.stigsson@siemens.com",
        img: "null",
      },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Summer Job", "Trainee"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Hyllan, Nymble",
    stall: 41,
    starred: false,
    collectedTickets: 0,
    aboutUs:
      "We are a technology company focused on industry, infrastructure, transport, and healthcare. From more resource-efficient factories, resilient supply chains, and smarter buildings and grids, to cleaner and more comfortable transportation as well as advanced healthcare, we create technology with purpose adding real value for customers. By combining the real and the digital worlds, we empower our customers to transform their industries and markets, helping them to transform the everyday for billions of people",
  },
  {
    name: "Sopra Steria",
    companyName: "Soprasteria",
    image: sopraSteria,
    averageStallrating:9.2,
    experienceStallrating:9.2,
    jobsStat: sopraSteriaJobs,
    progStat: sopraSteriaProg,
    yearStat: sopraSteriaYear,
    numberOfParticipants: 13,
    id: 9,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Ina Tran", mail: "ina.tran@soprasteria.com", img: "null" },
    ],
    offerings: ["Full Time Job", "Trainee"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "KTH Library",
    stall: 108,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Sopra Steria is a global consulting company in IT and management that offers complete solutions in digital transformation. Our employees help customers in the private and public sector to achieve their goals through digitization. We have 47,000 employees in 30 countries. In Scandinavia we are close to 3000 and in Sweden we have offices in Stockholm, Gothenburg, ??stersund and Malm?? where every third employee is a woman. Our culture is strong with heart and innovation in focus. We believe that it is when we share our knowledge that long-term relationships are built. Together we reach further.",
  },
  {
    name: "SPP Pension & F??rs??kring AB",
    companyName: "Spp",
    image: spp,
    averageStallrating:8.7,
    experienceStallrating:9.0,
    jobsStat: sppJobs,
    progStat: sppProg,
    yearStat: sppYear,
    numberOfParticipants: 26,
    id: 10,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Sofie Pemer", mail: "sofie.pemer@spp.se", img: "null" },
    ],
    offerings: ["Full Time Job"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Hyllan, Nymble",
    stall: 39,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Welcome to SPP. We are part of the Norwegian Storebrand. Together, we are one of the Nordics??? leading groups for savings and insurance solutions. Among other things, we distinguish ourselves through our focus on sustainability and responsible investments based on the environment, social issues and corporate governance.",
  },
  {
    name: "Zwapgrid AB",
    companyName: "Zwapgrid",
    image: zwapgrid,
    averageStallrating:8.9,
    experienceStallrating:8.6,
    jobsStat: zwapgridJobs,
    progStat: zwapgridProg,
    yearStat: zwapgridYear,
    numberOfParticipants: 22,
    id: 11,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Anna Holmgren", mail: "anna@zwapgrid.com", img: "null" },
    ],
    offerings: ["Full Time Job", "Internship", "Summer Job"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Tidningsrummet, Nymble",
    stall: 68,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "You make all the difference. Help us create the best infrastructure in the world for data sharing between systems. We have already started and large SaaS companies, such as Nets and Kivra are using our technology to help their customers automate mundane tasks that require data from more than one system. Dive deep into the ever growing world of systems and become a part of our team of engineers. Join the grid!",
  },
];

export { ExhibitorCompanies };
