import { DummyModel } from './DummyModel'
import { Company } from './DummyModel'

//Ta bort sen

const dummyCompanies: Company[] = [
    {
        name: "Volvo Automotive #1",
        coordinators: [{name: "Nina", mail: "nina@mail.se", img: "null"}, {name: "Malin", mail: "malin@mail.se", img: "null"}], 
        offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"], 
        askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
        extraInfo: [{info: "Lunch Provided", img: "null"}, {info: "Waitlist Available", img: "null"}],
        location: "Nya Matsalen, Nymble",
        stall: 50,
        tickets: 30,
        starred: true,
        aboutUs: "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success."
    },
    {
        name: "Volvo Automotive #2",
        coordinators: [{name: "Nina", mail: "nina@mail.se", img: "null"}, {name: "Malin", mail: "malin@mail.se", img: "null"}], 
        offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"], 
        askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
        extraInfo: [{info: "Lunch Provided", img: "null"}, {info: "Waitlist Available", img: "null"}],
        location: "Nya Matsalen, Nymble",
        stall: 50,
        tickets: 30,
        starred: true,
        aboutUs: "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success."
    },
    {
      name: "Volvo Automotive #3",
      coordinators: [{name: "Nina", mail: "nina@mail.se", img: "null"}, {name: "Malin", mail: "malin@mail.se", img: "null"}], 
      offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"], 
      askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
      extraInfo: [{info: "Lunch Provided", img: "null"}, {info: "Waitlist Available", img: "null"}],
      location: "Nya Matsalen, Nymble",
      stall: 50,
      tickets: 30,
      starred: true,
      aboutUs: "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success."
  },
  {
      name: "Volvo Automotive #4",
      coordinators: [{name: "Nina", mail: "nina@mail.se", img: "null"}, {name: "Malin", mail: "malin@mail.se", img: "null"}], 
      offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"], 
      askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
      extraInfo: [{info: "Lunch Provided", img: "null"}, {info: "Waitlist Available", img: "null"}],
      location: "Nya Matsalen, Nymble",
      stall: 50,
      tickets: 30,
      starred: true,
      aboutUs: "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success."
  }
  ]
  
  const dummyCurrentCompany = 0;
  
  const dummyModel = new DummyModel(dummyCompanies, dummyCurrentCompany);

  export {dummyModel}