import {
  FaHome,
  FaProjectDiagram,
  FaRss,
  FaIdCardAlt,
  FaGithub,
} from "react-icons/fa";

export interface MenuEl {
  title: string;
  icon: any;
  link: string;
}

export default [
  { title: "about", icon: FaHome, link: "/" },
  { title: "projects", icon: FaProjectDiagram, link: "/projects" },
  { title: "blog", icon: FaRss, link: "/blog" },
  { title: "contact", icon: FaIdCardAlt, link: "/contact" },
  {
    title: "github",
    icon: FaGithub,
    link: "https://github.com/kamilpieczyk",
  },
];
