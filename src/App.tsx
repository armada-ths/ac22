import React from 'react';
import CompanyHeader from './components/CompanyHeader/CompanyHeader';
import CompanyCards from './components/CompanyCards/CompanyCards';
import './App.css';
import CompanyInformation from './components/CompanyInformation/CompanyInformation';

function App() {
  return (
    <div className="App">
      Armada Competition 2022
    
    <CompanyHeader location={"Nymble"} language={"English"} tickets={5} onScan={() => {console.log("Working!")}}></CompanyHeader>
   <div> <CompanyCards image= {"blä"} company={"Volvo"} text={" eufhore reirp ytj dgjgpgrstn rt nersoigerhpierg"} route={"volvo"}></CompanyCards></div>
    <CompanyInformation 
      coordinators={[{name: "Nina", mail: "nina@mail.se"}, {name: "Malin", mail: "malin@mail.se"}]}
      themes={["Elictrics Vehicles", "Travel", "Futurism"]}
      extraInformation={["Lunch Provided", "Waitlist Available"]}></CompanyInformation>
  </div>
  );
}

export default App;
