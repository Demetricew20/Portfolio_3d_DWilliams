import { forvis, amu, devCodeCamp, airForce, army } from "../assets/images";
import {
    shoppingCart,
    contact,
    css,
    estate,
    github,
    html,
    javascript,
    linkedin,
    react,
    redux,
    threads,
    dotNet,
    gitlab,
    bootstrap,
    python,
    sqlServer,
    azure,
    balsamiq,
    telerik,
    blazor,
    cSharp,
    movie,
    disney,
    trash,
    study
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: gitlab,
        name: "Gitlab",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    }, {
        imageUrl: cSharp,
        name: "C#",
        type: "Backend"
    },
    {
        imageUrl: dotNet,
        name: ".Net Core",
        type: "Framework",
    },
    {
        imageUrl: blazor,
        name: "Telerik",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: sqlServer,
        name: "Microsoft SQL server",
        type: "DB Management",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "Cloud computing platform",
    },
    {
        imageUrl: balsamiq,
        name: "Balsamiq",
        type: "Design",
    },
    {
        imageUrl: telerik,
        name: "Telerik",
        type: "UI Library",
    }
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "FORVIS",
        icon: forvis,
        iconBg: "#CB0909",
        date: "July 2021 - Current",
        points: [
            "Designed and presented mockups/wireframes for stakeholder approval",
            "Performed as a Lead Software Engineer on multiple projects.",
            "Built RESTful APIs that serve both Blazor framework and JavaScript libraries",
            "Established team standards by creating and implementing design guides and application templates.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Designed and implemented UI features for new and existing projects.",
            "Ensured proper documentation and reports throughout all stages of the software development lifecycle"
        ],
    },
    {
        title: "Human Resources Assistant",
        company_name: "United States Air Force",
        icon: airForce,
        iconBg: "#d3d7de",
        date: "Oct 2020 - Mar 2021",
        points: [
            "Provided office automation support for processing of military personnel using multiple office automation software with varied functions.",
            "Organized soldier orientation schedules for all incoming soldiers.",
            "Briefed incoming soldiers on daily tasks.",
            "Prepared monthly, weekly, and daily logs using Microsoft Office Suite."
        ],
    },
    {
        title: "Sergeant",
        company_name: "United States Army",
        icon: army,
        iconBg: "#FEE038",
        date: "Dec 2016 - Oct 2020",
        points: [
            "Supervised soldiers and provided technical guidance to ensure the accomplishment of all unit missions.",
            "Responsible for the ordering, receiving, issuing, and accountable of individual, organizational, installation, and expendable supplies and equipment.",
            "Utilized Microsoft Excel worksheets and PowerPoint presentations to develop, publish, and present unit training requirements and training schedules.",
            "Planned, coordinated, and training events including multiple companies.",
            "Created, organized, and taught classes relating to communications for internal unit training."
        ],
    },

];

export const education = [
    {
        schoolName: "American Military University",
        yearCompleted: "Oct 2021",
        program: "Bachelors of Arts - BA, Management",
        icon: amu,
        iconBg: "#ffffff",
    },
    {
        schoolName: "DevCodeCamp",
        yearCompleted: "June 2021",
        program: "Full-Stack Software Development",
        icon: devCodeCamp,
        iconBg: "#d0d4d6"
    },
    {
        schoolName: "American Military University",
        yearCompleted: "Dec 2019",
        program: "General Studies",
        icon: amu,
        iconBg: "#ffffff",
    }
]

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Demetricew20',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/demetricewilliams/',
    }
];

export const projects = [
    {
        iconUrl: shoppingCart,
        theme: 'btn-back-yellow',
        name: 'Amazon Clone',
        description: 'Replicated version of Amazon where users can create an account, add products to their cart, make simulated payments via Stripe, and view their order history.',
        deployLink: 'https://clone-fbc7a.web.app/',
        projectLink: 'https://github.com/Demetricew20/Amazon_Clone'
    },
    {
        iconUrl: movie,
        theme: 'btn-back-red',
        name: 'Netflix Clone',
        description: 'Netflix clone project built using React, Redux, Firebase, Strip, and Google authentication. Users can create an account and mimic subscription payments. Data is pulled from IMDb API.',
        projectLink: 'https://github.com/Demetricew20/NetflixClone',
        deployLink: 'https://netflix-clone-fd696.firebaseapp.com/'
    },
    {
        iconUrl: disney,
        theme: 'btn-back-blue',
        name: 'Disney Clone',
        description: 'Disney-plus Clone developed using ReactJS (Learned Redux, React JS, Styled Components, and Firebase)',
        deployLink: 'https://disney-plus-clone-40446.web.app/',
        projectLink: 'https://github.com/Demetricew20/Disney_Plus_Clone'
    },
    {
        iconUrl: trash,
        theme: 'btn-back-black',
        name: 'Trash Collector',
        description: 'Web app for private mock waste management company utilizing Python, Django, and MySQL.',
        projectLink: 'https://github.com/Demetricew20/TrashCollector',
    },
    {
        iconUrl: study,
        theme: 'btn-back-green',
        name: 'Stack Study',
        description: 'Responsive flashcard application built with React, Python, Django, and MySQL that allows users to create cards and card collections for studying.',
        projectLink: 'https://github.com/Demetricew20/Flashcards_UI',
    }
];

export const planetPositions = {
    stageOne: [0, -5, 3.75],
    stageTwo: [40, -5, -15],
    stageThree: [0, 2, -20],
    stageFour: [-40, -5, -15],
};