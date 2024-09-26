# React Web Portfolio

## Table of Contents
- [Description](#description)
- [Implementation](#implementation)
- [Usage](#usage)
- [Author](#author)
- [Credits](#credits)
- [Images](#images)
- [LINKS](#links)

## Description
Using react + vite we built a porfolio with tabs that navigate through different pages. The site is deployed with Netlify and features "About" as the landing page, as well as the "Porfolio","Contact", and "Resume" pages. The "Contact" tab features a contact form that will allow the viewer to contact us.

## Implementation
Pages were built using React components, such as the Project component, in order to display all projects on the Portfolio tab
```
const ProjectList = ({ title, image, githubLink, liveLink })  => {
  return (
    <div className="project border p-2 mb-2 w-50 col-md-4 d-flex flex-column hover-shadow">
      <h3 className="title">{title}</h3>
      <img src={image} className="w-100" alt={`${title} Screenshot`} />
      <div className="mt-auto">
        <p className="title">
          <a href={liveLink} className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" rel="noopener noreferrer">
            Live URL
            </a>
          {" | "}
          <a href={githubLink} className="link-offset-2 link-underline link-underline-opacity-0" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </p>
      </div>
    </div>    
  );
};

export default ProjectList;
```
## Usage
Click the live link and view the app by navigating via the nav-tabs:

<img src="src/assets/images/navbar-ss.png">

## Author
Stacy Herbert

## Credits
Anthony Harper

## Images
<img src="src\assets\images\about-ss.png">
<img src="src\assets\images\app-ss.png">
<img src="src\assets\images\contact-ss.png">
<img src="src\assets\images\resume-ss.png">
## LINKS

GitHub Repository: https://github.com/JLH-Owner/react-portfolio

Deployed on Netlify: https://smh-react-portfolio.netlify.app/

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh