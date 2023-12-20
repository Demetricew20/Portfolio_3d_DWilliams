import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
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
} from "../assets/icons";

import { cSharp } from '../assets/icons/'

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
        icon: starbucks,
        iconBg: "#accbe1",
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
        icon: tesla,
        iconBg: "#fbc3bc",
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
        icon: shopify,
        iconBg: "#b7e4c7",
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
        program: "Bachelors of Arts - BA, Management"
    },
    {
        schoolName: "DevCodeCamp",
        yearCompleted: "June 2021",
        program: "Full-Stack Software Development"
    },
    {
        schoolName: "American Military University",
        yearCompleted: "Dec 2019",
        program: "General Studies"
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
        iconUrl: '',
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: '',
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: '',
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];

export const planetPositions = {
    stageOne: [0, -5, 3.75],
    stageTwo: [40, -5, -15],
    stageThree: [0, 2, -20],
    stageFour: [-40, -5, -15],
};