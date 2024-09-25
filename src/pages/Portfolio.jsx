import { projects } from '../components/Project';
import { useHref, useLocation } from 'react-router-dom';

export default function Portfolio() {
  let location = useLocation();
  let href = useHref();
  const listItems = projects.map(project =>
    <li key={project.id}>
      <p>
        <b>{project.title}:</b>
        <img
          src={location.project.image}
          alt={project.title} />

        Live URL: {href}={project.url}

        GitHub Repo: {href}={project.github}
        </p>
        </li>
        );
        return (
        <article>
          <h2>Projects</h2>
          <ul>{listItems}</ul>
        </article>
        );
};

