import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectList from '../components/Project';
import SEO from '../assets/images/SEO.jpg';
import PHTML from '../assets/images/PHTML.png';
import EPT from '../assets/images/EPT.gif';
import BLG from '../assets/images/BLG.png';
import TBA from '../assets/images/TBA.png';
import WDA from '../assets/images/WDA.png';
import DNA from '../assets/images/DNA.png';
import RDM from '../assets/images/RDM.png';
import SLM from '../assets/images/SLM.png';
import NTA from '../assets/images/NTA.png';
import SQL from '../assets/images/SQL.png';
import ORM from '../assets/images/ORM.png';
import MTA from '../assets/images/MTA.png';
import RGX from '../assets/images/RGX.png';
import SNA from '../assets/images/SNA.png';
import PWA from '../assets/images/PWA.png';


export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "HTML SEO Refactor",
      image: SEO,
      liveURL: "https://jlh-owner.github.io/html-seo-refactor/",
      github: "https://github.com/JLH-Owner/html-seo-refactor"
    },
    {
      id: 2,
      title: "Portfolio",
      image: PHTML,
      liveURL: 'https://jlh-owner.github.io/portfolio-bcs-2024/',
      github: 'https://github.com/JLH-Owner/portfolio-bcs-2024'
    },
    {
      id: 3,
      title: "Employee Payroll Tracker",
      image: EPT,
      liveURL: 'https://jlh-owner.github.io/employee-payroll-tracker/',
      github: 'https://github.com/JLH-Owner/employee-payroll-tracker'
    },
    {
      id: 4,
      title: "My First Blog",
      image: BLG,
      liveURL: 'https://jlh-owner.github.io/my-first-blog/',
      github: 'https://github.com/JLH-Owner/my-first-blog'
    },
    {
      id: 5,
      title: "Task Board",
      image: TBA,
      liveURL: 'https://jlh-owner.github.io/task-list-2024/',
      github: 'https://github.com/JLH-Owner/task-list-2024'
    },
    {
      id: 6,
      title: "Weather Dashboard",
      image: WDA,
      liveURL: 'https://jlh-owner.github.io/weather-dashboard-01/',
      github: 'https://github.com/JLH-Owner/weather-dashboard-01'
    },
    {
      id: 7,
      title: "Date Night App",
      image: DNA,
      liveURL: 'https://jlh-owner.github.io/date-night-app/',
      github: 'https://github.com/JLH-Owner/date-night-app'
    },
    {
      id: 8,
      title: "Generating a Professional README",
      image: RDM,
      liveURL: 'https://drive.google.com/file/d/1WHlEFZm-Ev9ZlQttrV7q1CLjtCzfdkEN/view',
      github: 'https://github.com/JLH-Owner/how-to-generate-a-professional-readme'
    },
    {
      id: 9,
      title: "SVG Logo Maker",
      image: SLM,
      liveURL: 'https://www.awesomescreenshot.com/video/29751613?key=8764012d5af917280e169790722dd780',
      github: 'https://github.com/JLH-Owner/svg-logo-maker'
    },
    {
      id: 10,
      title: "Note Taker",
      image: NTA,
      liveURL: 'https://express-js-note-taker-ija4.onrender.com/',
      github: 'https://github.com/JLH-Owner/express.js-note-taker'
    },
    {
      id: 11,
      title: "SQL Employee Tracker",
      image: SQL,
      liveURL: 'https://drive.google.com/file/d/1FVc3RJJ1Eg4NUFVv-oxpiKzGG2UcABiJ/view',
      github: 'https://github.com/JLH-Owner/SQL-employee-tracker'
    },
    {
      id: 12,
      title: "E-Commerce ORM",
      image: ORM,
      liveURL: 'https://drive.google.com/file/d/1RAo78nCHifK6elShCsQvbSUL6CdHOCfG/view',
      github: 'https://github.com/JLH-Owner/e-commerce-orm'
    },
    {
      id: 13,
      title: "Music Trivia App",
      image: MTA,
      liveURL: 'https://music-trivia-app-ylil.onrender.com',
      github: 'https://github.com/lllewell/music-trivia-app'
    },
    {
      id: 14,
      title: "GitHub Gist Regex Email Matching Tutorial",
      image: RGX,
      liveURL: 'https://gist.github.com/JLH-Owner/3f2dfe16f648ba3df74b2de959ead3ea',
      github: 'https://gist.github.com/JLH-Owner/3f2dfe16f648ba3df74b2de959ead3ea'
    },
    {
      id: 15,
      title: "Social Network API",
      image: SNA,
      liveURL: 'https://drive.google.com/file/d/1h9tT4pr0xIAcw56JYtzkOtic6iM8n19h/view',
      github: 'https://github.com/JLH-Owner/social-network-API'
    },
    {
      id: 16,
      title: "Text Editor PWA",
      image: PWA,
      liveURL: 'https://text-editor-pwa-penh.onrender.com/',
      github: 'https://github.com/JLH-Owner/text-editor-pwa'
    },
  ];

  return (
    <Container fluid='md'>
      <Row className="justify-content-md-center">
        <h2>My Projects</h2>
        {projects.map(project => (
          <ProjectList
            key={project.id}
            title={project.title}
            image={project.image}
            liveURL={project.liveURL}
            github={project.github}
          />
        )
        )}
      </Row>
    </Container>
  );
};


