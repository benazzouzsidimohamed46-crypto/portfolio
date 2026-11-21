/**
 * PERSONAL INFORMATION
 * Edit the values below to update the Hero, About, Contact and Footer sections.
 */
export const personal = {
  name: "Sidi Mohamed Benazzouz",
  initials: "Mohamed",
  title: "Telecommunications & Digital Technologies Engineering Student",
  intro:
    "Engineering student passionate about telecommunications, computer networks, and digital technologies. Interested in network infrastructure, mobile communications, and software development.",
  availability: "Open to Internship & Professional Opportunities",
  location: "Ain Tolba, Ain Témouchent, Algeria",
  email: "benazzouzsidimohamed46@gmail.com",
  phone: "+213 780 001 588",
  phoneHref: "+213780001588", // digits only, used for the tel: link
  github: "https://github.com/benazzouzsidimohamed46-crypto",
  linkedin: "https://www.linkedin.com/in/s-mohamed-benazzouz-129563293/",
  graduation: "2027",
  graduationFull: "June/July 2027",
  level: "5th-year engineering student",
  institution:
    "École Nationale Supérieure de Télécommunication et des Technologies de l'Information et de la Communication – Abdelhafid Boussouf, Oran",
  specialization: "Telecommunications and Digital Technologies",

  /** About Me paragraphs: one string per paragraph. */
  about: [
    "I am a fifth-year engineering student at the National Higher School of Telecommunications and ICT, specializing in Telecommunications and Digital Technologies.",
    "Throughout my academic journey, I have developed knowledge in computer networking, telecommunications infrastructure, mobile network technologies, and software development.",
    "My practical experiences at Algérie Télécom and Mobilis allowed me to discover real-world telecommunications environments, including FTTH access networks, MSAN equipment, BSC infrastructure, and mobile network supervision.",
    "I also enjoy developing technical projects involving Java networking, backend development, image processing, and embedded systems.",
  ],

  contactIntro:
    "Interested in collaborating, discussing networking technologies, or offering an internship opportunity? Feel free to get in touch.",
} as const;

/** Navigation links. `id` must match the id of a section on the page. */
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;
