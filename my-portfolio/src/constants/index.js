import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  mysql,
  git,
  figma,
  docker,
  ufrn,
  project_3d,
  memory_card,
  weather,
  mapa_dev,
  threejs,
  trybe,
  gama,
  nodejs,
  redux,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "experience",
    title: "Projetos",
  },
  {
    id: "work",
    title: "Formação",
  },
  {
    id: "contact",
    title: "Contato",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },

];

const experiences = [
  {
    title: "Desenvolvimento Web",
    company_name: "Trybe",
    icon: trybe,
    iconBg: "#1d1836",
    date: "Abril 2022 - junho 2023",
    points: [
      "A Trybe é uma escola para pessoas que querem construir uma carreira de sucesso em tecnologia e que se compromete integralmente com seus estudantes, pois as pessoas só pagam quando conseguirem um bom trabalho.",
      "O programa conta com mais de 1.500 horas de aulas presenciais e online e aborda introdução ao desenvolvimento de software, front-end,",
      "back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.",
      "O currículo da Trybe foi desenhado em parceria com as maiores empresas de tecnologia do Brasil e do mundo e ao longo da formação, estudamos JavaScript, HTML, CSS, React, Node, Express.js, SQL, Git, entre outras linguagens e frameworks",
    ],
  },
  {
    title: "Bootcamp Desenvolvimento Web Full Stack",
    company_name: "Gama Academy",
    icon: gama,
    iconBg: "#1d1836",
    date: "Out 2021 - Dez 2021",
    points: [
      "Bootcamp intensivo de 12 semanas que capacita desenvolvedores full stack. O curso abrange as principais tecnologias e frameworks para desenvolvimento web e mobile. Para finalizar, os alunos desenvolvem uma aplicação de banco em Java com AWS.",
    ],
  },
  {
    title: "Licenciatura em Ciências Sociais",
    company_name: "Universidade Federal do Rio Grande do Norte",
    icon: ufrn,
    iconBg: "#1d1836",
    date: "Jan 2011 - Jan 2015",
    points: [
      "O curso de Ciências Sociais aborda temas como antropologia, sociologia, política, cultura e educação. Na grade curricular são trabalhados temas que estudam a sociedade e as relações humanas, fornecendo uma visão ampla do mundo.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  {
    name: "project React 3D",
    description:
      "Projeto de um site 3D com tecnologia IA usando React | 2023 Three JS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project_3d,
    source_code_link: "https://github.com/ayanara/project_React_3D",
  },
  {
    name: "game memory card",
    description:
      "Jogo da memoria com JavaScript e HTML para iniciantes.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: memory_card,
    source_code_link: "https://github.com/ayanara/game-memory-card/",
  },
  {
    name: "Whether",
    description:
      "Projeto que recria o Weather App do youtuber programador AsmrProg. Intuido é revisar alguns conceitos de programação",
    tags: [
      {
        name: "JavaScrip",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ayanara/Weather-App",
  },
  {
    name: "Mapa Dev Week ",
    description:
      "Projeto feito na semana Mapa Dev Week. O evento tem como objetivo ensinar o básico de HTML, CSS e JavaScript em aula ao vivo e dinâmicas. Ao Fim do projeto, os participantes saem com um projeto pronto, um portofolio.",
    tags: [
      {
        name: "JavaScrip",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: mapa_dev,
    source_code_link: "https://github.com/ayanara/mapadev-week",
  },
];

export { services, technologies, experiences, testimonials, projects };