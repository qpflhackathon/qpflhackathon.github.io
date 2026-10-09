import type { StaticImageData } from "next/image";

import alessandroPhoto from "@assets/images/Alessandro_photo.jpeg";
import eleonoraPhoto from "@assets/images/Eleonora_photo.jpeg";
import eustachePhoto from "@assets/images/Eustache_photo.jpeg";
import francescaPhoto from "@assets/images/Francesca_photo.jpeg";
import kenPhoto from "@assets/images/Ken_photo.jpeg";
import qseLogo from "@assets/images/Logo_QSE.png";
import lucaPhoto from "@assets/images/Luca_photo.png";

export type CommitteeMember = {
  name: string;
  role: string;
  href: string;
  linkLabel: string;
  /** Members without a photo are shown with their initials. */
  image?: StaticImageData;
  /** Logos are contained on a white background instead of cropped. */
  isLogo?: boolean;
};

export const committee: CommitteeMember[] = [
  {
    name: "EPFL Center for Quantum Science and Engineering (QSE Center)",
    role: "Co-organizer & Sponsor",
    href: "https://www.linkedin.com/company/epfl-center-for-quantum-science-and-engineering-qse",
    linkLabel: "QSE EPFL website",
    image: qseLogo,
    isLogo: true,
  },
  {
    name: "Luca Zoppetti",
    role: "MSc student in Physics",
    href: "https://www.linkedin.com/in/lucazoppetti/",
    linkLabel: "Luca Zoppetti LinkedIn profile",
    image: lucaPhoto,
  },
  {
    name: "Eustache Lamort de Gail",
    role: "MSc student in Physics",
    href: "https://www.linkedin.com/in/eustachy-lamort-de-gail-a10803265/",
    linkLabel: "Eustache Lamort de Gail LinkedIn profile",
    image: eustachePhoto,
  },
  {
    name: "Francesca Fino",
    role: "MSc student in Quantum Science and Engineering",
    href: "https://www.linkedin.com/in/francesca-fino-b62a37250/",
    linkLabel: "Francesca Fino LinkedIn profile",
    image: francescaPhoto,
  },
  {
    name: "Eleonora Giuliani",
    role: "MSc student in Quantum Science and Engineering",
    href: "https://www.linkedin.com/in/eleonora-giuliani/",
    linkLabel: "Eleonora Giuliani LinkedIn profile",
    image: eleonoraPhoto,
  },
  {
    name: "Alessandro Garino",
    role: "MSc student in Quantum Science and Engineering",
    href: "https://www.linkedin.com/in/alessandro-garino-78a345297/",
    linkLabel: "Alessandro Garino LinkedIn profile",
    image: alessandroPhoto,
  },
  {
    name: "Ken Zou",
    role: "MSc student in Quantum Science and Engineering",
    href: "https://www.linkedin.com/in/ken-zou-54a08b226/",
    linkLabel: "Ken Zou LinkedIn profile",
    image: kenPhoto,
  },
];
