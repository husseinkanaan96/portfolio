export interface Experience {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly location: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly year: string;
  readonly description: string;
  readonly repository: string;
  readonly images: readonly string[];
  readonly tags: readonly string[];
}

export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'abg',
    role: 'Full Stack Developer',
    company: 'Accord Business Group (ABG)',
    period: 'Jul 2025 - Present',
    location: 'Beirut, Lebanon',
    summary: 'Develop and support a SWIFT payment-processing application and its AML screening workflows.',
    highlights: [
      'Develop and maintain the SWIFT application with Java 21 and Spring Boot, implementing payment-processing and AML changes.',
      'Implement sanctions and blacklist screening against WCHK and Dow Jones data for names, countries, cities, BICs, banks, account numbers, and IBANs.',
      'Use Apache Camel for payment and integration workflows and upgrade it to supported versions.',
      'Support Oracle and PostgreSQL through JPA and Hibernate so the application works with either database.',
      'Install, configure, index, maintain, and upgrade Apache Solr environments for clients.',
      'Provide REST and SOAP APIs for SAS developers working with the SWIFT and AML services.',
      'Handle production deployments, troubleshooting, bug fixes, performance work, Java LTS upgrades, and technical documentation.',
    ],
    technologies: ['Java 21', 'Spring Boot', 'Apache Camel', 'Oracle', 'PostgreSQL', 'Solr', 'REST', 'SOAP'],
  },
  {
    id: 'lyst',
    role: 'Software Developer',
    company: 'Lyst Technologies',
    period: 'Oct 2024 - Present',
    location: 'Beirut, Lebanon',
    summary: 'Develop and support backend services for web and omni-channel banking applications.',
    highlights: [
      'Develop and maintain backend services with Java Spring Boot and MuleSoft Anypoint Studio.',
      'Integrate applications with Oracle, PostgreSQL, and Microsoft SQL Server.',
      'Implement client requirements and update existing programs to improve performance and usability.',
      'Build services for the Omni-Channel platform and create BIRT reports with SQL queries.',
    ],
    technologies: ['Java', 'Spring Boot', 'MuleSoft', 'Oracle', 'PostgreSQL', 'SQL Server', 'BIRT'],
  },
  {
    id: 'valoores',
    role: 'Software Developer',
    company: 'Valoores',
    period: 'Feb 2022 - Jan 2024',
    location: 'Beirut, Lebanon',
    summary: 'Worked on web applications for banking and retail clients using Angular, JSP, Java, and Oracle.',
    highlights: [
      'Maintained Angular and JSP frontends backed by Java Spring Boot and Spring MVC services.',
      'Integrated Oracle Database and implemented changes based on client requests.',
      'Used SonarQube and Veracode to check code quality and security.',
      'Worked with developers, UX designers, and analysts, and prepared technical documentation for support and handover.',
    ],
    technologies: ['Angular', 'Java', 'Spring Boot', 'Spring MVC', 'JSP', 'Oracle', 'SonarQube'],
  },
];

export const PROJECTS: readonly Project[] = [
  {
    id: 'nanovine',
    name: 'NanoVine',
    type: 'Movie website',
    year: 'Mar - Jun 2022',
    description: 'A movie website built with HTML, CSS, Bootstrap, PHP, and PHPMyAdmin. Users can watch trailers, write reviews, choose preferred genres, and create an account.',
    repository: 'https://github.com/husseinkanaan96/NanoVine',
    images: [
      'assets/NanoVine/Nanovine1.png',
      'assets/NanoVine/Nanovine2.png',
      'assets/NanoVine/Nanovine3.png',
      'assets/NanoVine/Nanovine4.png',
      'assets/NanoVine/Nanovine5.png',
      'assets/NanoVine/Nanovine6.png',
      'assets/NanoVine/Nanovine7.png',
      'assets/NanoVine/Nanovine8.png',
      'assets/NanoVine/Nanovine9.png',
    ],
    tags: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'PHPMyAdmin'],
  },
];

export const SKILL_GROUPS = [
  {
    label: 'Backend & integration',
    skills: ['Java 21', 'Spring Boot', 'Spring MVC', 'Apache Camel', 'MuleSoft', 'REST & SOAP', 'Microservices', 'Node.js', 'PHP'],
  },
  {
    label: 'Data, search & reporting',
    skills: ['Oracle', 'PostgreSQL', 'SQL Server', 'JPA / Hibernate', 'Apache Solr', 'BIRT', 'MyBatis', 'iBATIS'],
  },
  {
    label: 'Frontend & delivery',
    skills: ['Angular', 'JavaScript', 'JSP', 'HTML5', 'CSS3', 'jQuery', 'Git / Bitbucket', 'SVN', 'Production support'],
  },
] as const;
