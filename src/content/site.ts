export const siteUrl = "https://qpflhackathon.github.io";

/** Prefixes a public/ file path with the base path, which Next doesn't add to metadata URLs. */
export const publicPath = (path: string) => `${process.env.BASE_PATH ?? ""}${path}`;

export const event = {
  name: "EPFL Quantum Hackathon",
  shortName: "Quantum Hackathon 2027",
  edition: "2nd Edition",
  dates: "March 12 - 14, 2027",
  startDate: "2027-03-12",
  endDate: "2027-03-14",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#committee", label: "Committee" },
  { href: "#practical", label: "Practical Info" },
  { href: "#2026", label: "Past Edition" },
  { href: "#contact", label: "Contact" },
];

export const links = {
  rules:
    "https://drive.google.com/file/d/1_Djqqxee0Qn7CyQc63CXTcZZHMFusObD/view?usp=share_link",
  campusMap: "https://plan.epfl.ch/?lang=en",
  linkedin: "https://www.linkedin.com/company/epfl-quantum-hackathon",
};

export const contactEmail = "quantum-hackathon@epfl.ch";

export const credits = {
  website: { name: "Hugo Izadi", href: "https://www.linkedin.com/in/hugoizadi/" },
  logo: { name: "Nicolò Battocletti", href: "https://www.linkedin.com/in/nicolobattocletti/" },
};
