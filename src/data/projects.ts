/**
 * PROJECTS
 * To add a project: copy a block, give it a unique `id`, and pick an `icon`
 * from src/components/icons.tsx (iconMap keys).
 * `repoUrl`: paste the real GitHub URL. While it is empty or starts with "["
 * the card shows a disabled "Repository link soon" button (no broken link).
 */
export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  features?: string[];
  technologies: string[];
  icon: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    id: "coin-recognition",
    name: "Coin Recognition Model",
    category: "Image Processing / Computer Vision",
    description: "Development of a coin recognition model using image processing techniques, In collaboration with a team of 4 members.",
    technologies: ["Python.OpenCV", "Image Processing", "Machine Learning"],
    icon: "scan",
    repoUrl: "https://github.com/i1saac/D-tection-et-classification-de-pi-ces-de-monnaie",
  },
  {
    id: "car-rental",
    name: "Car Rental Agency Application",
    category: "Web Development / Backend",
    description:
      "Development of the backend of a web application designed to manage a car rental agency, including business logic and data management.",
    technologies: ["PHP", "MySQL"],
    icon: "car",
    repoUrl: "https://github.com/benazzouzsidimohamed46-crypto/car-rental-agency-CRUD",
  },
  {
    id: "tic-tac-toe",
    name: "Tic-Tac-Toe Multiplayer Application",
    category: "Java / Computer Networking",
    description: "Development of a multiplayer Tic-Tac-Toe game using Java sockets and client-server communication.",
    technologies: ["Java", "TCP/UDP Sockets", "Client-Server Architecture"],
    icon: "gamepad",
    repoUrl: "https://github.com/benazzouzsidimohamed46-crypto/XO-Multiplayer-Tic-tac-toe-game-in-Java-using-TCP-sockets",
  },
  {
    id: "pin-lock",
    name: "Electronic PIN Code Lock",
    category: "Embedded Systems / Electronics",
    description: "Design and simulation of an electronic PIN-based locking system using Arduino.",
    features: ["Matrix keypad", "LCD display", "Servo motor", "Buzzer and alert system"],
    technologies: ["Arduino", "C/C++", "Tinkercad"],
    icon: "lock",
    repoUrl: "https://www.tinkercad.com/things/j5SjoXEyiHO-serrure-a-code-pin",
  },
];
