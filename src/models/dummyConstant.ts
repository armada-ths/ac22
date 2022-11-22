import { Company, Tickets } from "./DummyModel";

import lunch_img from "../assets/CompanyInformation/lunch-img.svg";
import waitlist_img from "../assets/CompanyInformation/waitlist-img.svg";
import { UserModel } from "./UserModel";

const dummyCompanies: Company[] = [
  {
    name: "Armada",
    image: "#2BDBA0",
    id: 0,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive II",
    image: "#DB2B2B",
    id: 1,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 10,
    starred: true,
    collectedTickets: 10,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive III",
    image: "#FFE6E6",
    id: 2,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "KTH Bibliotek",
    stall: 150,
    starred: false,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive IV",
    image: "#0F1322",
    id: 3,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive V",
    image: "#E6FFF7",
    id: 4,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive VI",
    image: "#FFE6E6",
    id: 5,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive VII",
    image: "#2BDBA0",
    id: 6,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive VIII",
    image: "#999999",
    id: 7,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 10,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive IX",
    image: "#FFF5E6",
    id: 8,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: false,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive X",
    image: "#0F1322",
    id: 9,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive XI",
    image: "#E6FFF7",
    id: 10,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive XII",
    image: "#F2F2F2",
    id: 11,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive XIII",
    image: "#2BDBA0",
    id: 12,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive XIV",
    image: "#F9A444",
    id: 13,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
  {
    name: "Volvo Automotive XV",
    image: "#333333",
    id: 14,
    tags: ["workshop", "mingle"],
    coordinators: [
      { name: "Nina", mail: "nina@mail.se", img: "null" },
      { name: "Malin", mail: "malin@mail.se", img: "null" },
    ],
    offerings: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    askAbout: ["Full Time Job", "Masters Thesis", "Internship", "Green jobs"],
    extraInfo: [
      { info: "Lunch Provided", img: lunch_img },
      { info: "Waitlist Available", img: waitlist_img },
    ],
    location: "Nya Matsalen, Nymble",
    stall: 50,
    starred: true,
    collectedTickets: 0,
    aboutUs:
      "Are you worried about getting stuck in the “I need experience to get a job but to get a job I need experience” paradox? Don’t worry! With foodora's Aspiring Leadership Program you will get a flexible part time job, valuable knowledge in leadership/management and hands on leadership experience! This is the perfect opportunity if you want to boost your resumé and at the same time earn some extra money! Who are we?: We’re foodorians, a driven and happy gang of food lovers eager to create the last mile delivery service of the future! Our core values help concretize what we’re aiming for: We dare, We get it done & We’re equally pink. We’re people from all backgrounds, with different experiences, opinions and ideas. This is something we value highly, since we fully believe that diversity is what builds our culture and success.",
  },
];

const dummyTickets: Tickets[] = [
  { companyId: 0, nrOfTickets: 30 },
  { companyId: 1, nrOfTickets: 30 },
  { companyId: 2, nrOfTickets: 0 },
  { companyId: 3, nrOfTickets: 30 },
  { companyId: 4, nrOfTickets: 30 },
  { companyId: 5, nrOfTickets: 30 },
  { companyId: 6, nrOfTickets: 0 },
  { companyId: 7, nrOfTickets: 30 },
  { companyId: 8, nrOfTickets: 30 },
  { companyId: 9, nrOfTickets: 30 },
  { companyId: 10, nrOfTickets: 0 },
  { companyId: 11, nrOfTickets: 30 },
  { companyId: 12, nrOfTickets: 30 },
  { companyId: 13, nrOfTickets: 30 },
  { companyId: 14, nrOfTickets: 0 },
];

export { dummyCompanies, dummyTickets };
