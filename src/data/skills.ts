/**
 * SKILLS & LANGUAGES
 * Add/remove items in the arrays. `icon` must be a key of iconMap (src/components/icons.tsx).
 * No percentages or progress bars on purpose.
 */
export type SkillCategory = { id: string; title: string; icon: string; items: string[] };

export const skillCategories: SkillCategory[] = [
  { id: "networking", title: "Computer Networking", icon: "network", items: ["TCP/IP", "Routing and Switching", "VLAN", "STP", "OSPF"] },
  { id: "telecom", title: "Telecommunications", icon: "radio", items: ["FTTH", "GPON", "MSAN", "BSC", "Mobile Network Technologies (2G, 3G, 4G/LTE, 5G)"] },
  { id: "equipment", title: "Network Equipment", icon: "router", items: ["Router Configuration", "Modem Configuration", "Wi-Fi Repeater Configuration", "Access Points", "Band Steering"] },
  { id: "programming", title: "Programming", icon: "code", items: ["Python","JavaScript", "Java", "C", "PHP"] },
  { id: "databases", title: "Databases", icon: "database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { id: "tools", title: "Tools", icon: "wrench", items: ["Cisco Packet Tracer", "Wireshark", "Visual Studio Code", "Linux", "Tinkercad"] },
];

export type Language = { name: string; level: string; detail?: string };

export const languages: Language[] = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "B2", detail: "TCF TP (491/699)" },
  { name: "English", level: "C1", detail: "EF SET" },
];
