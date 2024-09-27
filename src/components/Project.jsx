
const ProjectList = (props) => {
  return (
       <div className="project-container">
        <div className="row">
          <div className="col">
            <ul className="projects">
              {props.projects.map(project => (
                <li className="list-group" key={project.id}>
                  <div className="project-title">
                    title: {project.title}
                    image: {project.image}
                  </div>
                  <div className="link-group">
                    liveURL: {project.liveURL}
                    
                    github: {project.github}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
       </div>
  );
};

export default ProjectList



  